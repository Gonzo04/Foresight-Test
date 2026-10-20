import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import json from "@rollup/plugin-json";

export default {
  input: "src/main.jsx",
  output: {
    file: "dist/bundle.js",
    format: "esm",
    sourcemap: true
  },
  plugins: [resolve({ extensions: [".js", ".jsx"] }), commonjs(), json()]
};
