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
    id: 6,
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
    id: 7,
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
    id: 8,
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
  {
    id: 9,
    question:
      "Welchen Sauerstoffgehalt hat unsere Atemluft?",
    options: [
      "21%",
      "7%",
      "78%",
      "45%"
    ],
    correctIndex: 0,
  },
  {
    id: 10,
    question:
      "Warum haben große Gebäude oft eine Brandmeldeanlage (BMA)?",
    options: [
      "Die Brandmeldeanlage dient nur der Überwachung der Luftqualität",
      "Die Brandmeldeanlage löscht das Feuer immer automatisch",
      "Damit bei Feueralarm automatisch alle Fenster geöffnet werden",
      "Die Brandmeldeanlage dient zur frühen Erkennung von Bränden und alarmiert in der Regel automatisch die Feuerwehr",
    ],
    correctIndex: 3,
  },
];
