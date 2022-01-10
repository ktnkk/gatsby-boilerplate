"use strict";

module.exports = [
  {
    type: "select",
    name: "category",
    message: "category?",
    choices: ["atoms", "molecules", "organisms"],
  },
  {
    type: "input",
    name: "name",
    message: "name?",
  },
  {
    type: "toggle",
    name: "stories",
    message: "Add story?",
    enabled: "Yes",
    disabled: "No",
  },
];
