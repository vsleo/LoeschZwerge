<template>
  <head>
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css2?family=Pixelify+Sans:wght@400..700&display=swap"
    />
  </head>

  <div class="quiz-container">
    <a v-for="quiz in quizzes" :href="quiz.href">
      <div class="quiz-content">
        <div>
          <div>{{ quiz.title }}</div>
          <div style="text-align: center">Quiz</div>
        </div>
        <div class="quiz-image">
          <img :src="quiz.image" />
        </div>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  name: "Quiz",
  data() {
    return {
      quizzes: [],
    };
  },
  methods: {
    async getQuizzes() {
      const module = await import(`../files/quiz/all_quizzes.js`);
      console.log(module);
      this.quizzes = module.importedQuizzes;
    },
  },
  mounted() {
    this.getQuizzes();
  },
};
</script>

<style scoped>
.quiz-container {
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  margin: 1vw;
  padding: 1vw;
  gap: 1vw;
  position: relative;
  top: 8vw;
}

a {
  width: 40vw;
  height: 20vw;
  margin: 10px 0;
  padding-left: 40px;
  background-color: #a7a7a7;
  color: rgb(0 0 0);
  text-decoration: none;
  border-radius: 5px;
  text-align: left;
  align-content: center;
  font-size: 3vw;
  font-weight: bold;
  font-family: "Pixelify Sans", sans-serif;
}

a img {
  width: 15vw;
}

a:hover {
  background-color: #a6e1d7;
  color: rgb(0 0 0);
  transform: scale(1.02);
}

.quiz-content {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
</style>
