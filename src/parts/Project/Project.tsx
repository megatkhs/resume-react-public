import clsx from "clsx";
import type { Data } from "@/data";
import { LabeledItem } from "@/parts/LabeledItem";
import { List } from "@/parts/List";
import { MarkdownContent } from "@/parts/MarkdownContent";
import { TermLabel } from "@/parts/TermLabel";
import styles from "./Project.module.css";

export type ProjectProps = {
  className?: string;
  project: Data["projects"][number];
};

export const Project = (props: ProjectProps) => {
  return (
    <table className={clsx(styles.module, props.className)}>
      <thead>
        <tr>
          <th colSpan={2}>
            <TermLabel startedAt={props.project.joinedAt} finishedAt={props.project.leavedAt} />
            <br />
            {props.project.title}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <LabeledItem
              items={[
                {
                  label: "概要",
                  children: <MarkdownContent>{props.project.summary}</MarkdownContent>,
                },
                ...((props.project.publishInfo && [
                  {
                    label: "公開サイト情報",
                    children: <MarkdownContent>{props.project.publishInfo}</MarkdownContent>,
                  },
                ]) ||
                  []),
                {
                  label: "担当フェーズ",
                  children: (
                    <ul className={styles.phase}>
                      {props.project.phase.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  ),
                },
                {
                  label: "当プロジェクトにおける工夫",
                  children: <MarkdownContent>{props.project.experience}</MarkdownContent>,
                },
              ]}
            />
          </td>
          <td className={styles.fixed}>
            <LabeledItem
              items={[
                {
                  label: "規模",
                  children: (
                    <>
                      全{props.project.members}名<br />
                      {props.project.position || "メンバー"}として参画
                    </>
                  ),
                },
                {
                  label: "開発環境",
                  children: <List items={props.project.stacks} />,
                },
              ]}
            />
          </td>
        </tr>
      </tbody>
    </table>
  );
};
