import clsx from "clsx";
import dayjs from "dayjs";
import { data } from "@/data";
import styles from "./Header.module.css";

export type HeaderProps = {
  className?: string;
};

export const Header = (props: HeaderProps) => {
  const { className } = props;

  return (
    <header className={clsx(styles.module, className)}>
      <h1 className={styles.title}>職務経歴書</h1>

      <div className={styles.info}>
        <p>
          <time dateTime={data.createdAt}>{dayjs(data.createdAt).format("YYYY年MM月DD日")}</time>
          現在
        </p>
        <dl className={styles.name}>
          <dt>氏名</dt>
          <dd>{data.name}</dd>
        </dl>
      </div>
    </header>
  );
};
