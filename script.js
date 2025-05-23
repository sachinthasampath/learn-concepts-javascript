function printQuiz(questions) {
  questions.forEach((question) => {
    console.log(question.description);
    switch (question.type) {
      case "boolean":
        console.log("1. True");
        console.log("2. False");
        break;
      case "multipleChoice":
        question.options.forEach((option, index) => {
          console.log(`${index + 1}. ${option}`);
        });
        break;
      case "text":
        console.log("Answer: ____________________");
        break;
      case "range":
        console.log("Minimum:___________________");
        console.log("Maximum:___________________");
        break;
    }
  });
}

const questions = [
  {
    type: "boolean",
    description: "This video is useful.",
  },
  {
    type: "multipleChoice",
    description: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Rome"],
  },
  {
    type: "text",
    description: "Describe your favorite movie.",
  },
  {
    type: "range",
    description: "What is the speed limit in your country?",
  },
];

printQuiz(questions);
