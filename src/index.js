// app.js
const { createSurvey, getSurveys, getSurveyById, updateSurvey, deleteSurvey } = require('./surveyCrud');
const { createQuestion, getQuestions, getQuestionById, updateQuestion, deleteQuestion } = require('./questionCrud');
const { createAnswer, getAnswers, getAnswerById, updateAnswer, deleteAnswer } = require('./answerCrud');

async function run() {
    try {
        // Créer une nouvelle enquête
        const newSurvey = {
            id : 2,
            name: "Enquête de Satisfaction 124",
            description: "Évaluation de nouveaux services.",
            createdAt: new Date(),
            createdBy: {
                employeeName: "Alice Doe",
                employeeRole: "Directrice marketing"
            }
        };
        const createSurveyResult = await createSurvey(newSurvey);
        console.log('Survey Created:', createSurveyResult);

        // Créer une nouvelle question
        const newQuestion = {

            surveyId: createSurveyResult.insertedId,
            title: "Comment avez-vous entendu parler de nos services ?",
            type: "singleChoice"
        };
        const createQuestionResult = await createQuestion(newQuestion);
        console.log('Question Created:', createQuestionResult);

        // Créer une nouvelle réponse
        const newAnswer = {
            questionId: createQuestionResult.insertedId,
            title: "televisions"
        };
        const createAnswerResult = await createAnswer(newAnswer);
        console.log('Answer Created:', createAnswerResult);

        // Lire toutes les enquêtes
        const surveys = await getSurveys();
        console.log('All Surveys:', surveys);

        // Lire toutes les questions
        const questions = await getQuestions();
        console.log('All Questions:', questions);

        // Lire toutes les réponses
        const answers = await getAnswers();
        console.log('All Answers:', answers);

        // Mettre à jour une enquête
        const updateSurveyResult = await updateSurvey(createSurveyResult.insertedId, { description: "Mise à jour de l'enquête." });
        console.log('Survey Updated:', updateSurveyResult);

        // Supprimer une réponse
        const deleteAnswerResult = await deleteAnswer(createAnswerResult.insertedId);
        console.log('Answer Deleted:', deleteAnswerResult);

    } catch (err) {
        console.error('Error:', err);
    }
}

run();
