// index.js
const { createSurvey, getSurveys, getSurveyById, updateSurvey, deleteSurvey } = require('./surveyCrud');
const { createQuestion, getQuestions, getQuestionById, updateQuestion, deleteQuestion } = require('./questionCrud');
const { createAnswer, getAnswers, getAnswerById, updateAnswer, deleteAnswer } = require('./answerCrud');

async function run() {
    try {
        // Créer une nouvelle enquête avec ID explicite
        const newSurvey = {   
        _id: 1,
        name: "Enquête de Satisfaction 001",
        description: "Enquête visant à évaluer la satisfaction des clients concernant nos services.",
        createdAt: "2024-07-25T08:00:00Z",
        createdBy: {
            employeeName: "camara",
            employeeRole: "Responsable du service client"
            }
        };
        await createSurvey(newSurvey);

         // // Lire toutes les enquetes
        const surveys = await getSurveys();
        
        // Mettre à jour une enquete
         await updateSurvey(1, { title: "Comment évalueriez-vous notre service ?" });
        // // Lire une enquête par ID
        const survey = await getSurveyById(1);
     

       

        // // Supprimer une enquête
        await deleteSurvey(1);
        

        // // Créer une nouvelle réponse avec ID explicite
        const newAnswer = {
            _id: 4,
            questionId: 1,
            title: "Satisfait"
        };
        await createAnswer(newAnswer);

         // // Lire toutes les réponses
        const answers = await getAnswers();
        console.log('All Answers:', answers);

        // // Lire une réponse par ID
        const answer = await getAnswerById(4);
        console.log('Answer with ID 4:', answer);

          // Mettre à jour une réponse
        await updateAnswer(4, { title: "Comment évalueriez-vous notre service ?" });

        // // Supprimer une reponse
        await deleteAnswer(4);

        // Créer un nouveau question avec ID explicite
        const newQuestion = {
            _id: 5,
            surveyId: 1,
            title: "Satisfait",
            type:"chansons"
        };
        await createQuestion(newQuestion);


        // Lire toutes les questions
        const questions = await getQuestions();
        

        // // Lire une question par ID
        const question = await getQuestionById(5);
        
        // // // Mettre à jour une question
        await updateQuestion(5, { title: "Comment avez-vous entendu parler de nous ?" });

        // // // Supprimer une question
        await deleteQuestion(5);

    } catch (err) {
        console.error('Error:', err);
    }
}

run();
