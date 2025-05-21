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
    question: "Was ist die Hauptaufgabe der Feuerwehr?",
    options: [
      "Feuer löschen",
      "Menschen retten",
      "Tiere retten",
      "Umweltschutz",
    ],
    correctIndex: 0,
  },
  {
    id: 2,
    question:
      "Welche Notrufnummer wählt man in Europa für Feuerwehr und Rettung?",
    options: ["110", "112", "911", "116"],
    correctIndex: 1,
  },
  {
    id: 3,
    question:
      "Was gehört zur persönlichen Schutzausrüstung (PSA) eines Feuerwehrmanns?",
    options: [
      "Rennanzug, Helm, Handschuhe",
      "Sonnenbrille, Mütze, Turnschuhe",
      "Feuerwehrhelm, Schutzanzug, Handschuhe, Stiefel",
      "Warnweste, Jeans, Basecap",
    ],
    correctIndex: 2,
  },
];
