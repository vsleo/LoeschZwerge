/**
 * @description This file contains the questions for the quiz.
 * @param {Array} questions - The questions for the quiz.
 * @param {number} id - The id of the question.
 * @param {string} question - The question itself.
 * @param {Array} options - The options for the question.
 * @param {number} correctIndex - The index of the correct answer. **Wichtig** Index beginnt bei 0.
 */
export const importedQuestions = [
  {
    id: 4,
    question: "Was ist der Zweck eines Rauchmelders?",
    options: [
      "Er misst die Temperatur im Raum",
      "Er löscht kleine Brände automatisch",
      "Er warnt frühzeitig vor Rauchentwicklung",
      "Er zeigt die Luftfeuchtigkeit an",
    ],
    correctIndex: 2,
  },
  {
    id: 5,
    question:
      "Wie oft sollte man einen Feuerlöscher mindestens überprüfen lassen?",
    options: [
      "Alle 6 Monate",
      "Jährlich",
      "Alle 2 Jahre",
      "Nur nach dem Einsatz",
    ],
    correctIndex: 2,
  },
  {
    id: 6,
    question:
      "Welche drei Elemente braucht ein Feuer zum Brennen (Feuerdreieck)?",
    options: [
      "Luft, Wasser, Funken",
      "Sauerstoff, Brennstoff, Wärme",
      "Holz, Feuerzeug, Zunder",
      "Licht, Energie, Wind",
    ],
    correctIndex: 1,
  },
];
