import Handlebars from "handlebars";

/** @param {import("plop").NodePlopAPI} plop  */
export default function (plop) {
  plop.setHelper("ifCond", function (v1, v2, options) {
    if (v1 === v2) {
      return options.fn(this);
    }
    return options.inverse(this);
  });
  plop.setHelper("surroundWithCurlyBraces", function (text) {
    var result = "{" + text + "}";
    return new Handlebars.SafeString(result);
  });

  plop.setGenerator("component", {
    description: "コンポーネントのファイル作成",
    async prompts({ prompt }) {
      const { name } = await prompt({
        name: "name",
        message: "コンポーネントの名前は？",
        type: "input",
        hint: "Button",
        validate: (name) => {
          return Boolean(name) || "コンポーネント名は必須です";
        },
      });

      return {
        name,
      };
    },
    actions(answer) {
      return (
        answer &&
        [
          {
            type: "add",
            path: `src/parts/{{name}}/{{name}}.module.css`,
            templateFile: "./.plop/component/Component.module.css.hbs",
          },
          {
            type: "add",
            path: `src/parts/{{name}}/{{name}}.tsx`,
            templateFile: "./.plop/component/Component.tsx.hbs",
          },
          {
            type: "add",
            path: `src/parts/{{name}}/index.tsx`,
            templateFile: "./.plop/component/index.tsx.hbs",
          },
        ].filter(Boolean)
      );
    },
  });
}
