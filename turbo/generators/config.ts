import type { PlopTypes } from "@turbo/gen";

export default function generator(plop: PlopTypes.NodePlopAPI): void {
  plop.setGenerator("library", {
    description: "새로운 라이브러리 패키지를 libs 폴더에 생성합니다.",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "라이브러리 이름을 입력하세요 (예: utils, ui, core-api)",
      },
    ],
    actions: [
      {
        type: "add",
        path: "libs/{{name}}/package.json",
        template: `{
  "name": "@co-panion/{{name}}",
  "version": "1.0.0",
  "main": "./src/index.ts",
  "types": "./src/index.ts",
  "scripts": {
    "lint": "eslint src/"
  }
}`,
      },
      {
        type: "add",
        path: "libs/{{name}}/tsconfig.json",
        template: `{
  "extends": "../../tsconfig.base.json",
  "compilerOptions": {
    "outDir": "./dist"
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "dist"]
}`,
      },
      {
        type: "add",
        path: "libs/{{name}}/src/index.ts",
        template: `export const {{name}} = () => {
  console.log("{{name}} 패키지 준비 완료");
};`,
      },
    ],
  });
}
