// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format
import storybook from "eslint-plugin-storybook";

import { config as baseConfig } from "@repo/eslint-config/base";

export default [// 필요 시 해당 패키지만의 특수한 무시 경로나 규칙을 여기에만 추가
...baseConfig, ...storybook.configs["flat/recommended"]];