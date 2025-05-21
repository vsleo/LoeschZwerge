<template>
  <div class="quiz-container">
    <div v-if="currentQuestionIndex < questions.length" class="question-box">
      <h2 class="question-number">
        Frage {{ currentQuestionIndex + 1 }} von {{ questions.length }}
      </h2>
      <p class="question-text">{{ currentQuestion.question }}</p>
      <div class="options">
        <button
          v-for="(option, index) in currentQuestion.options"
          :key="index"
          @click="selectAnswer(index)"
          class="option-button"
          :class="{
            correct:
              selectedIndex === index && index === currentQuestion.correctIndex,
            incorrect:
              selectedIndex === index && index !== currentQuestion.correctIndex,
          }"
          :disabled="selectedIndex !== null"
        >
          {{ option }}
        </button>
      </div>
      <button
        v-if="selectedIndex !== null"
        @click="nextQuestion"
        class="next-button"
      >
        Weiter
      </button>
    </div>

    <div v-else class="result-box">
      <h2 class="result-title">Ergebnis</h2>
      <p class="result-text">
        Du hast {{ score }} von {{ questions.length }} richtig beantwortet.
      </p>
      <button @click="restartQuiz" class="restart-button">
        Nochmal spielen
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Quiz",
  props: {
    questionType: {
      required: true,
    },
  },
  data() {
    return {
      currentQuestionIndex: 0,
      selectedIndex: null,
      score: 0,
      questions: [],
    };
  },
  mounted() {
    this.getQuestions();
  },
  computed: {
    currentQuestion() {
      return this.questions[this.currentQuestionIndex];
    },
  },
  methods: {
    selectAnswer(index) {
      if (this.selectedIndex === null) {
        this.selectedIndex = index;
        if (index === this.currentQuestion.correctIndex) {
          this.score++;
        }
      }
    },
    nextQuestion() {
      this.currentQuestionIndex++;
      this.selectedIndex = null;
    },
    restartQuiz() {
      this.currentQuestionIndex = 0;
      this.score = 0;
      this.selectedIndex = null;
    },
    async getQuestions() {
      const module = await import(`../files/questions_${this.questionType}.js`);
      console.log(module);
      this.questions = module.importedQuestions;
    },
  },
};
</script>

<style scoped>
.quiz-container {
  display: flex;
  position: relative;
  justify-content: center;
  top: 10vw;
  max-width: 600px;
  margin: 40px auto;
  padding: 30px;
  background-color: #ffffff;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  font-family: sans-serif;
}

.question-box,
.result-box {
  text-align: center;
}

.question-number {
  font-size: 18px;
  margin-bottom: 10px;
  color: #333;
}

.question-text {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 20px;
}

.options {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 20px;
}

.option-button {
  padding: 12px;
  font-size: 16px;
  border: 2px solid #ddd;
  border-radius: 8px;
  background-color: #f9f9f9;
  cursor: pointer;
  transition: background 0.3s;
  text-align: left;
}

.option-button:hover {
  background-color: #eee;
}

.option-button.correct {
  background-color: #d4edda;
  border-color: #28a745;
  color: #155724;
}

.option-button.incorrect {
  background-color: #f8d7da;
  border-color: #dc3545;
  color: #721c24;
}

.next-button,
.restart-button {
  padding: 10px 20px;
  font-size: 16px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
}

.next-button:hover,
.restart-button:hover {
  background-color: #0056b3;
}

.result-title {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 16px;
}

.result-text {
  font-size: 18px;
  margin-bottom: 24px;
}
</style>
