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
      "Wie viele Personen haben in einem standard Löschgruppenfahrzeug (LF) Platz?",
    options: ["3", "5", "9", "12"],
    correctIndex: 2,
  },
  {
    id: 10,
    question:
      "Wie viel Wasser fördert die Feuerlöschkreiselpumpe eines LF 10 pro Minute bei 8 Bar?",
    options: ["800","1000","1200","2500"],
    correctIndex: 1,
  },
  {
    id: 11,
    question:
      "Welche Nennrettungshöhe und Nennausladung hat eine Drehleiter (DLK) 23/12",
    options: ["23m Nennrettungshöhe und 12m Nennausladung",
              "23m Nennrettungshöhe und 23m Nennausladung",
              " 12m Nennrettungshöhe und 23m Nennausladung",
              "23m Nennrettungshöhe und 23m Nennausladung"
            ],
    correctIndex: 0,
  },
];
