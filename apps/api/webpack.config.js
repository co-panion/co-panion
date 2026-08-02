const nodeExternals = require('webpack-node-externals');

module.exports = function (options, webpack) {
  return {
    ...options,
    externals: [
      nodeExternals({
        // @co-panion으로 시작하는 패키지는 외부 모듈로 빼지 말고 통째로 번들링(합체)하라는 지시
        allowlist: [/^@co-panion\//],
      }),
    ],
  };
};
