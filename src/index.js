
const { createSurvey, getSurveys, getSurveyById, updateSurvey, deleteSurvey } = require('./surveyModule');
const { createQuestion, getQuestions, getQuestionById, updateQuestion, deleteQuestion } = require('./questionModule');
const { createAnswer, getAnswers, getAnswerById, updateAnswer, deleteAnswer } = require('./answerModule');

async function run() {
    try {
        
        console.log("==== Gestion des Enquêtes ====");
        const newSurvey = {   
            surveyId: 1,
            name: "Enquête de Satisfaction 001",
            description: "Enquête visant à évaluer la satisfaction des clients concernant nos services.",
            createdAt: "2024-07-25T08:00:00Z",
            createdBy: {
                employeeName: "Camara",
                employeeRole: "Responsable du service client"
            }
        };
        await createSurvey(newSurvey);

        await getSurveys();
        await updateSurvey(1, { name: "Enquête de Satisfaction Mise à Jour" });
        await getSurveyById(1);
        await deleteSurvey(1);

       
        console.log("\n==== Gestion des Questions ====");
        const newQuestion = {
            questionId: 1,
            surveyId: 1,
            title: "Comment évalueriez-vous notre service ?",
            type: "rating",
            options: {
                minValue: 1,
                maxValue: 5,
                step: 1
            }
        };
        await createQuestion(newQuestion);

        await getQuestions();
        await getQuestionById(1);
        await updateQuestion(1, { title: "Comment avez-vous entendu parler de nous ?" });
        await deleteQuestion(1);

       
        console.log("\n==== Gestion des Réponses ====");
        const newAnswer = {
            answerId: 1,
            questionId: 1,
            title: "Satisfait"
        };
        await createAnswer(newAnswer);

        await getAnswers();
        await getAnswerById(1);
        await updateAnswer(1, { title: "Très satisfait" });
        await deleteAnswer(1);

    } catch (err) {
        console.error('Erreur:', err);
    }
}

run();
