import clsx from "clsx";
import type { Data } from "@/data";
import { LabeledItem } from "@/parts/LabeledItem";
import { TermLabel } from "@/parts/TermLabel";
import styles from "./Company.module.css";

export type CompanyProps = {
  className?: string;
  company: Data["company"];
};

export const Company = (props: CompanyProps) => {
  return (
    <table className={clsx(styles.module, props.className)}>
      <thead>
        <tr>
          <th colSpan={2}>
            <TermLabel startedAt={props.company.joinedAt} finishedAt={Infinity} />{" "}
            {props.company.name}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <LabeledItem
              items={[
                {
                  label: "業務内容",
                  children: props.company.business,
                },
                {
                  label: "社員数",
                  children: `${props.company.employees}名`,
                },
              ]}
            />
          </td>
          <td className={styles.type}>{props.company.type}として勤務</td>
        </tr>
      </tbody>
    </table>
  );
};
