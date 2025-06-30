import "postcss-html";
import "stylelint-config-recommended";
import "stylelint-config-standard";
import "stylelint-config-standard-vue";

export default {
  extends: [
    "stylelint-config-recommended",
    "stylelint-config-standard",
    "stylelint-config-standard-vue",
  ],
  customSyntax: "postcss-html",
  rules: {
    // Beispielregel: Du kannst sie nach deinen Bedürfnissen anpassen

    "block-no-empty": null,
  },
};
