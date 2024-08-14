// index.js
const { createSurvey, getSurveys, getSurveyById, updateSurvey, deleteSurvey } = require('./surveyCrud');
const { createQuestion, getQuestions, getQuestionById, updateQuestion, deleteQuestion } = require('./questionCrud');
const { createAnswer, getAnswers, getAnswerById, updateAnswer, deleteAnswer } = require('./answerCrud');

async function run() {
    try {
        // // Créer une nouvelle enquête avec ID explicite
        // const newSurvey = {
        //     _id: 1,
        //     name: "Enquête de Satisfaction",
        //     description: "Évaluation de nouveaux services.",
        //     createdAt: new Date(),
        //     createdBy: {
        //         employeeName: "Alice Doe",
        //         employeeRole: "Directrice marketing"
        //     }
        // };
        // await createSurvey(newSurvey);

        // Créer une nouvelle question avec ID explicite
        // const newQuestion = {
        //     _id: 6,
        //     surveyId: 7,
        //     title: "Comment avez-vous entendu parler de nos services ?",
        //     type: "singleChoice"
        // };
        
        // await createQuestion(newQuestion);
        

        // // // Créer une nouvelle réponse avec ID explicite
        // const newAnswer = {
        //     _id: 9,
        //     questionId: 19,
        //     title: "Roman"
        // };
        // await createAnswer(newAnswer);

         // // // Lire toutes les réponses
        // const answers = await getAnswers();
        // console.log('All Answers:', answers);

        // // // Lire une réponse par ID
        // const answer = await getAnswerById(1);
        // console.log('Answer with ID 1:', answer);

        // // Lire toutes les enquêtes
        // const surveys = await  getAnswers();
        // console.log('All Surveys:', surveys);

        // // Lire toutes les questions
        // const questions = await getQuestions();
        // console.log('All Questions:', questions);

       
        // // // Lire une enquête par ID
        // const survey = await getSurveyById(1);
        // console.log('Survey with ID 1:', survey);

        // // // Lire une question par ID
        // const question = await getQuestionById(1);
        // console.log('Question with ID 1:', question);

        

        // // // Mettre à jour une enquête
        // await updateSurvey(1, { description: "Évaluation complète des services." });

        // // // Mettre à jour une question
        // await updateQuestion(1, { title: "Comment avez-vous entendu parler de nous ?" });

        // // Mettre à jour une réponse
        await updateAnswer(1, { title: "Comment évalueriez-vous notre service ?" });

        // // // Supprimer une enquête
        // await deleteSurvey(1);

        // // // Supprimer une question
        // await deleteQuestion(1);
        // console.log("questions supprimé")

        // // // Supprimer une réponse
        // await deleteAnswer(1);

    } catch (err) {
        console.error('Error:', err);
    }
}

run();
