import README from "readme-components";

let template = new README();

let constants = {
  name: "battery-reminder",
  report_bug: "https://github.com/SanjaySunil/battery-reminder/issues/new?assignees=&labels=Bug&template=bug_report.md&title=%5BBUG%5D",
  request_feature: "https://github.com/SanjaySunil/battery-reminder/issues/new?assignees=&labels=Suggestions&template=suggestions.md&title=%5BSUGGESTION%5D",
};

template.use_premade("header", {
  name: constants.name,
  description:
    "Get notified on when you need to plug/unplug your charger to preserve battery life.",
    report_bug: constants.report_bug,
    request_feature: constants.request_feature
});

template.use_premade("description", {
  name: constants.name,
  long_description:
    "is a command-line tool which aims to notify you when your battery is too low, and when you need to unplug your charger when your device is at a sufficient battery level. The command-line tool allows you to set battery percentage thresholds for when you want to be notified, and is straight-forward to use.",
});

template.use_premade("install", {
  package: constants.name,
});

template.use_component("./components/usage.md");

template.use_premade("license", {
  author: "Sanjay Sunil",
  email: "sanjaysunil@protonmail.com",
  license: "MIT",
});

template.make_readme();
