import babel from "rollup-plugin-babel";

var globals = { 
  "d3": "d3",
};

export default {
  entry: "index.js",
  dest: "build/d3-foo.js",
  format: "umd",
  moduleName: "d3",
  external: Object.keys(globals),
  globals: globals,
  plugins: [
    babel({
      exclude: "node_modules/**"})
  ]
};