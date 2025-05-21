<template>
  <Quiz_Template
    :question-type="questionType"
    :title="'Brandschutz-Quiz'"
    :description="'Hier kannst du dein Wissen über den Brandschutz testen!'"
  />
</template>

<script>
import Quiz_Template from "./Quiz_Template.vue";

export default {
  name: "Quiz_Feuerwehrauto",
  components: {
    Quiz_Template,
  },
  data() {
    return {
      questionType: "feuerwehrauto",
    };
  },
};
</script>
