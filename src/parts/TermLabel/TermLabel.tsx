import clsx from "clsx";
import dayjs from "dayjs";
import styles from "./TermLabel.module.css";

export type TermLabelProps = {
  className?: string;
  startedAt: string;
  finishedAt: string | number;
};

export const TermLabel = (props: TermLabelProps) => {
  const { className } = props;

  return (
    <span className={clsx(styles.module, className)}>
      {dayjs(props.startedAt).format("YYYY年M月")}～
      {props.finishedAt === Infinity ? "現在" : dayjs(props.finishedAt).format("YYYY年M月")}
    </span>
  );
};
