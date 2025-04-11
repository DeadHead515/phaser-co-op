import { nodeResolve } from "@rollup/plugin-node-resolve";
import { terser } from "rollup-plugin-terser";

export default {
  input: "index.js",
  output: {
    file: "dist/bundle.js",
    format: "iife",
    name: "Game",
    sourcemap: true,
  },
  plugins: [nodeResolve(), terser()],
};
