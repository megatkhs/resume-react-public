export type Data = {
  /** 氏名 */
  name: string;
  /** 作成日 */
  createdAt: string;
  /** 職務要約 */
  summary: string;
  /** 会社情報 */
  company: Company;
  /** 案件情報 */
  projects: Project[];
  /** 活かせる経験・知識・技術 サマリー */
  skills: string[];
  /** 活かせる経験・知識・技術 テーブル */
  stacks: [category: string, stacks: Stack[]][];
  /** 自己PR */
  promotions: Promotion[];
};

type Company = {
  /** 会社名 */
  name: string;
  /** 入社日 */
  joinedAt: string;
  /** 雇用形態 */
  type: string;
  /** 業務内容 */
  business: string;
  /** 社員数 */
  employees: number;
};

export type Project = {
  /** 参画日 */
  joinedAt: string;
  /** 終了日 */
  leavedAt: string | number;
  /** 案件名 */
  title: string;
  /** 公開サイト情報 */
  publishInfo?: string;
  /** 案件概要(Markdown) */
  summary: string;
  /** 担当フェーズ */
  phase: string[];
  /** 当プロジェクトにおける工夫(経験) */
  experience: string;
  /** 規模 */
  members: number;
  /** プロジェクトにおけるポジション */
  position?: string;
  /** 開発環境 */
  stacks: string[];
};

type Promotion = {
  /** 見出し */
  label: string;
  /** 本文(Markdown) */
  content: string;
};

export type Stack = {
  /** 技術名 */
  name: string;
  /** 経験期間 */
  term: string;
  /** 備考 */
  remarks: string;
};

export const data: Data = {
  name: "職務 太郎",
  createdAt: "2023-10-16",
  summary: `楽しく仕事をしてまいりました。C言語の生みの親は私です。HTMLも作りました。

今後も言語も作っていきたいです。`,
  company: {
    name: "職務 株式会社",
    joinedAt: "2020-04-01",
    type: "正社員@2.1.12",
    business: "世の中を良くする会社です。",
    employees: 4,
  },
  projects: [
    {
      joinedAt: "2022-05-01",
      leavedAt: Infinity,
      title: "世の中を良くするプロジェクト -vol.2-",
      summary:
        "システム上で帳票の回覧を可能にすることでアナログ業務を低減させ業務効率を向上させることを目的としたワークフロー機能を追加する案件。",
      publishInfo: `素敵なサイト [https://example.com](https://example.com)`,
      phase: ["要件定義", "良くするプロダクト世界にお届けする配達員"],
      experience: `前身のプロジェクトが成功し、規模を拡大したことで社外を含めて100名のメンバーと進行しとても愉快に仕事ができています。

**たのしい**とはまさにこのことである！`,
      stacks: [
        "Nuxt.js",
        "Vue Class Component",
        "Vuex",
        "TypeScript",
        "SCSS",
        "ハッピーターンの粉",
      ],
      members: 100,
      position: "サブリーダー",
    },
    {
      joinedAt: "2020-04-01",
      leavedAt: "2022-04-01",
      title: "世の中を良くしたプロジェクト",
      summary: "楽しいプロジェクトでした。",
      phase: ["要件定義", "テスト"],
      experience: `本当はコードが書きたかった`,
      stacks: ["Nuxt.js", "Vue Class Component", "Vuex", "TypeScript", "SCSS", "リッツパーティ"],
      members: 15,
      position: "メンバー",
    },
  ],
  skills: [
    "TypeScriptを用いたプログラミングスキル",
    "VueやReactなどのフレームワークを活用したプログラミングスキル",
    "HTML Living Standard、CSS3に準拠しアクセシビリティ・ユーザビリティを考慮したコーディングスキル",
    "gsapなどを用いた動きのあるフロントエンド開発スキル",
  ],
  stacks: [
    [
      "言語",
      [
        {
          name: "TypeScript",
          term: "2年0ヵ月",
          remarks:
            "型定義、ジェネリクスといった言語機能を活用した効率的で保守性の高いプログラミングが可能",
        },
        {
          name: "HTML",
          term: "4年0ヵ月",
          remarks: "HTML Living Standardに則った正しいマークアップが可能",
        },
        {
          name: "CSS",
          term: "4年0ヵ月",
          remarks: "CSS3に準拠したスタイリング、アニメーションを実装が可能",
        },
        {
          name: "JavaScript",
          term: "4年0ヵ月",
          remarks: "ES6以降仕様を把握しており、効率的に実装が可能",
        },
      ],
    ],
    [
      "フレームワーク",
      [
        {
          name: "Vue.js/Nuxt.js",
          term: "4年0ヵ月",
          remarks: "コードの最適化、コンポーネント設計、プログラミングが可能的なこと",
        },
        {
          name: "React",
          term: "2年0ヵ月",
          remarks: "コードの最適化、コンポーネント設計、プログラミングが可能的なこと",
        },
      ],
    ],
    [
      "ツール",
      [
        {
          name: "Git",
          term: "4年0ヵ月",
          remarks: `SourceTreeを用いた基本的な操作、複数メンバーでの協業が可能。git-flowを用いたブランチ運用経験あり。`,
        },
        {
          name: "Node.js",
          term: "4年0ヵ月",
          remarks: "ファイル操作や非同期処理、ビルド環境の構築などの基本的なプログラミングが可能",
        },
        {
          name: "Backlog",
          term: "4年0ヵ月",
          remarks: "Backlogを用いたプロジェクトのタスク管理、共同作業が可能",
        },
      ],
    ],
  ],
  promotions: [
    {
      label: "楽しいことが大好き",
      content: `世界をもっとよくしたいと思います。`,
    },
    {
      label: "楽しいことが大好き",
      content: `世界をもっとよくしたいと思います。`,
    },
    {
      label: "GitHubアカウント",
      content: `この履歴書は私が作った！
- [https://github.com/megatkhs](https://github.com/megatkhs)`,
    },
  ],
};
