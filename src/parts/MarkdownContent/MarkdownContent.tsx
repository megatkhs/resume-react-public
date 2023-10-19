import React from "react";
import rehypeReact from "rehype-react";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype/lib";
import { unified } from "unified";
import styles from "./MarkdownContent.module.css";

export type MarkdownContentProps = {
  children: string;
};

const processor = unified().use(remarkParse).use(remarkRehype).use(rehypeReact, {
  passNode: true,
  Fragment: React.Fragment,
  createElement: React.createElement,
});

export const MarkdownContent = (props: MarkdownContentProps) => {
  return <div className={styles.module}>{processor.processSync(props.children).result}</div>;
};
