import clsx from "clsx";
import styles from "./List.module.css";

export type ListProps = {
  className?: string;
  items: string[];
};

export const List = (props: ListProps) => {
  const { className } = props;

  return (
    <ul className={clsx(styles.module, className)}>
      {props.items.map((item, index) => (
        <li className={styles.item} key={index}>
          {item}
        </li>
      ))}
    </ul>
  );
};
