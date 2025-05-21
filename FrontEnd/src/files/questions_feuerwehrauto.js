/* @param {Array} questions - The questions for the quiz.
 * @param {number} id - The id of the question.
 * @param {string} question - The question itself.
 * @param {Array} options - The options for the question.
 * @param {number} correctIndex - The index of the correct answer. **Wichtig** Index beginnt bei 0.
 */
export const importedQuestions = [
  {
    id: 7,
    question:
      "Wie nennt man das große Einsatzfahrzeug mit Wassertank und Pumpe?",
    options: [
      "Drehleiter",
      "Tanklöschfahrzeug (TLF)",
      "Rüstwagen (RW)",
      "Mannschaftstransportwagen (MTW)",
    ],
    correctIndex: 1,
  },
  {
    id: 8,
    question: "Wozu dient die Drehleiter auf einem Feuerwehrauto?",
    options: [
      "Zum Löschen von Bodenbränden",
      "Zum Transport von Wasser",
      "Zum Retten von Personen aus Höhen",
      "Zum Beladen des Fahrzeugs",
    ],
    correctIndex: 2,
  },
  {
    id: 9,
    question:
      "Wie viele Personen haben in einem normalen Löschgruppenfahrzeug (LF) Platz?",
    options: ["4", "6", "9", "12"],
    correctIndex: 2,
  },
];
