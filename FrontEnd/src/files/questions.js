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
    id: 1,
    question: "welche Farbe hat ein Feuerwehrauto?",
    options: ["grün", "rot", "braun", "schwarz"],
    correctIndex: 1,
  },
  {
    id: 2,
    question: "Welche Nummer wird angerufen, wenn man Feuerwehr rufen möchte?",
    options: ["112", "110", "113", "114"],
    correctIndex: 0,
  },
  {
    id: 3,
    question:
      "Was sollte man als Autofahrer machen, wenn die Feuerwehr mit Blaulicht und Martinshorn kommt?",
    options: [
      "weiterfahren wie gewohnt",
      "links ranfahren und anhalten",
      "rechts ranfahren und anhalten",
      "überholen",
    ],
    correctIndex: 2,
  },
];
