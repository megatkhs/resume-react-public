import clsx from "clsx";
import styles from "./LabeledItem.module.css";
import type { ReactNode } from "react";

export type LabeledItemProps = {
  className?: string;
  items: LabeledItemInput[];
};

export type LabeledItemInput = {
  label: string;
  children: ReactNode;
};

export const LabeledItem = (props: LabeledItemProps) => {
  const { className } = props;

  return (
    <dl className={clsx(styles.module, className)}>
      {props.items.map((data, index) => (
        <div className={styles.group} key={index}>
          <dt className={styles.label}>{data.label}</dt>
          <dd>{data.children}</dd>
        </div>
      ))}
    </dl>
  );
};
