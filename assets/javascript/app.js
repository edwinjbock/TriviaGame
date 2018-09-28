// BEGINNING OF APP.JS
// Wait for the entire file to load before execution
$(document).ready(function () {

  // ********** GLOBAL DECLARATIONS **********
  // Variables related to the scripting logic
  var questionNumber;
  var questions = [{
    question: "In Harry Potter and the Philosopher's Stone which Gringotts vault was the Philosopher's Stone kept in?",
    answers: ["703", "514", "713", "217"],
    answerCorrect: "713"
  },
    question: "In the epilogue of Harry Potter and the Deathly Hallows, what job does Harry do?",
    answers: ["Professor at Hogwarts", "Auror", "Minister for Magic", "Reporter for the Daily Prophet"],
    answerCorrect: "Auror"
},
  question: "Who tells Harry and Ron that people can be a ‘bit stupid' about their pets?",
  answers: ["Hagrid", "Professor Dumbledore", "Hermione", "Professor Lupin"],
  answerCorrect: "Hagrid"
},
  question: "How many points is the Golden Snitch worth?",
  answers: ["50", "100", "500", "150"],
  answerCorrect: "150"
},
  question: "How many galleons does a twelve-week course of Apparition lessons cost?",
  answers: ["12", "17", "3", "0"],
  answerCorrect: "12"
},
  question: "Dumbledore is famous for single-handedly defeating and imprisoning which Dark wizard before Voldemort goes on to kill him?",
  answers: ["Lucius Malfoy", "Igor Karkaroff", "Gellert Grindelwald", "Amycus Carrow"],
  answerCorrect: "Gellert Grindelwald"
},
  question: "When Harry attended his hearing at the Ministry of Magic, what colour paper aeroplanes flew into the lift at Level Four?",
  answers: ["Mint Green", "Yellow", "Pale Violet", "Pale Blue"],
  answerCorrect: "Pale Violet"
},
  question: "What secret name do Harry, Ron and Hermione use to refer to Sirius Black?",
  answers: ["Scabbers", "Snuffles", "Griphook", "Prongs"],
  answerCorrect: "Snuffles"
},
  question: "In wizarding currency, how many Sickles are in a Galleon?",
  answers: ["5", "21", "17", "13"],
  answerCorrect: "17"
},
  question: "Whose mother was Rowena Ravenclaw?",
  answers: ["Moaning Myrtle", "The Grey Lady", "Lilly Potter", "The Fat Lady"],
  answerCorrect: "The Grey Lady"
},
  question: "What is the symbol for Ravenclaw house?",
  answers: ["Badger", "Lion", "Eagle", "Snake"],
  answerCorrect: "Eagle"
},
  question: "What is the symbol for Slytherin house?",
  answers: ["Badger", "Lion", "Eagle", "Snake"],
  answerCorrect: "Snake"
},
  question: "Who is Ginny's first boyfriend?",
  answers: ["Michael Corner", "Harry Potter", "Zacharias Smith", "Dean Thomas"],
  answerCorrect: "Michael Corner"
},
  question: "What is the name of Dumbledore's phoenix?",
  answers: ["Firenze", "Fluffy", "Fawkes", "Hermes"],
  answerCorrect: "Fawkes"
},
  question: "What is the only antidote to Basilisk venom?",
  answers: ["Phoenix Tears", "Mandrake Draught", "Dragon's Blood", "A Bezoar"],
  answerCorrect: "Phoenix Tears"
},
  question: "Who destroyed the last remaining Horcrux?",
  answers: ["Ginny Weasley", "Severus Snape", "Neville Longbottom", "Viktor Krum"],
  answerCorrect: "Neville Longbottom"
},
  question: "What magical object causes people to turn orange or sprout tentacle-like warts?",
  answers: ["Metamorph-Medals", "The Mirror of Erised", "Decoy Detonators", "U-No-Poo"],
  answerCorrect: "Metamorph-Medals"
},
  question: "Who unwittingly gives Hermione permission to take Most Potente Potions out of the Restricted Section in the library?",
  answers: ["Professor McGonagall", "Professor Dumbledore", "Professor Lockhart", "Professor Flitwick"],
  answerCorrect: "Professor Lockhart"
},
  question: "What does O.W.L. stand for?",
  answers: ["Official Wizarding Licence", "Organized Wizard Learning", "Ordinary Wizarding Level", "Outstanding Wizardry Lesson"],
  answerCorrect: "Ordinary Wizarding Level"
},
  question: "What was Tom Riddle's mother's maiden name?",
  answers: ["Riddle", "Peverell", "Clearwater", "Gaunt"],
  answerCorrect: "Gaunt"
},
  question: "What is the name of the fountain inside the Ministry of Magic?",
  answers: ["Fountain of Fair Fortune", "Fountain of Eros", "Magic Is Might", "Fountain of Magical Brethren"],
  answerCorrect: "Fountain of Magical Brethren"
},
  question: "Who is unanimously elected leader of Dumbledore's Army?",
  answers: ["Ron Weasley", "Harry Potter", "Neville Longbottom", "Hermione Granger"],
  answerCorrect: "Harry Potter"
},
  question: "What is the location of the Order of the Phoenix headquarters?",
  answers: ["Number four, Privet Drive", "Number Twelve, Grimmauld Place", "Shell Cottage", "Spinner's End"],
  answerCorrect: "Number Twelve, Grimmauld Place"
},
  question: "Who invented the Headless Hat?",
  answers: ["Dennis Creevey", "Fred and George Weasley", "Nymphadora Tonks", "Nicolas Flamel"],
  answerCorrect: "Fred and George Weasley"
},
  question: "What is the name of the sweet that Dudley eats when the Weasleys visit Privet Drive in Harry Potter and the Goblet of Fire?",
  answers: ["Nosebleed Nougat", "A Fainting Fancy", "A Puking Pastille", "Ton-Tongue Toffee"],
  answerCorrect: "Ton-Tongue Toffee"
}];

// ********** GLOBAL FUNCTIONS **********
function gradeAnswers() {
  // wins, losses, unanswered questions are wrong
}

// ************ Initial Click/Touch Event ***************
$(document).on('touchstart click', document, function () {
  $("#mainWindow").hide(); // HIDE THE MAIN WINDOW (DIRECTIONS)
  // SHOW THE QUIZ WINDOW
});


}; // End of document.onkeyup

}); // end of $(document).ready(function()
// End of file