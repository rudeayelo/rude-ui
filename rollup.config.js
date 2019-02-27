import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import sourceMaps from "rollup-plugin-sourcemaps";
import typescript from "rollup-plugin-typescript2";
import minify from "rollup-plugin-babel-minify";

import pkg from "./package.json";

export default {
  input: "src/index.ts",
  output: [
    {
      file: pkg.main,
      name: "rudeUI",
      format: "iife",
      sourcemap: true,
      globals: {
        react: "React",
        "styled-components": "styled",
        "styled-system": "styledSystem",
      },
    },
    { file: pkg.module, format: "es", sourcemap: true },
  ],
  external: [...Object.keys(pkg.peerDependencies || {})],
  watch: {
    include: "src/**/*",
  },
  plugins: [
    typescript({ useTsconfigDeclarationDir: true }),
    commonjs(),
    resolve(),
    sourceMaps(),
    minify(),
  ],
};
