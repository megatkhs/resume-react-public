import { data } from "@/data";
import { Company } from "@/parts/Company";
import { Header } from "@/parts/Header";
import { List } from "@/parts/List";
import { MarkdownContent } from "@/parts/MarkdownContent";
import { Project } from "@/parts/Project";
import { Stacks } from "@/parts/Stacks";
import styles from "./App.module.css";

export function App() {
  return (
    <article className={styles.container}>
      <Header />

      <div className={styles.body}>
        <section>
          <h2>職務要約</h2>
          <MarkdownContent>{data.summary}</MarkdownContent>
        </section>

        <section>
          <h2>職務経歴</h2>

          <Company company={data.company} />

          {data.projects.map((project, index) => (
            <Project project={project} key={index} />
          ))}
        </section>

        <section className={styles.break}>
          <h2>活かせる経験・知識・技術</h2>

          <div className={styles.skills}>
            <List items={data.skills} />
            <Stacks stacks={data.stacks} />
          </div>
        </section>

        <section>
          <h2>自己PR</h2>

          <dl className={styles.promotions}>
            {data.promotions.map(({ label, content }, index) => (
              <div key={index} className={styles.promotion}>
                <dt className={styles.label}>{label}</dt>
                <dd>
                  <MarkdownContent>{content}</MarkdownContent>
                </dd>
              </div>
            ))}
          </dl>

          <p className={styles.finished}>以上</p>
        </section>
      </div>
    </article>
  );
}
