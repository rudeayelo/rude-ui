module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "scope-case": [1, "always", ["lower-case", "sentence-case"]],
    "subject-case": [1, "always", ["sentence-case", "start-case"]],
  },
};
