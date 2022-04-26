import QuestionBank from "./QuestionBank.txt";

export const generateQuestion = async () => {
    let questions= [];
   
    await fetch(QuestionBank)
      .then((response) => response.text())
      .then((result) => {
        const questArr = result.split("\r\n");
        questions = questArr;
      });
    return {questions};
  };