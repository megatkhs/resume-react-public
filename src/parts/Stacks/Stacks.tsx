import clsx from "clsx";
import type { Data } from "@/data";
import { MarkdownContent } from "@/parts/MarkdownContent";
import styles from "./Stacks.module.css";

export type StacksProps = {
  className?: string;
  stacks: Data["stacks"];
};

export const Stacks = (props: StacksProps) => {
  return (
    <table className={clsx(styles.module, props.className)}>
      <tbody>
        {props.stacks.map(([category, stacks], index) =>
          stacks.map((stack, stackIndex) => (
            <tr key={`${index}-${stackIndex}`}>
              {stackIndex === 0 && (
                <th className={styles.category} rowSpan={stacks.length}>
                  {category}
                </th>
              )}
              <td>{stack.name}</td>
              <td className={styles.term}>{stack.term}</td>
              <td>
                <MarkdownContent>{stack.remarks}</MarkdownContent>
              </td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
};
