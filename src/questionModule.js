
const { connectDB } = require('./config/database');

async function createQuestion(question) {
    const db = await connectDB();
    const collection = db.collection('survey_questions');

    try {
        
        const existingQuestion = await collection.findOne({ questionId: question.questionId });
        if (existingQuestion) {
            throw new Error('Une question avec cet ID existe déjà.');
        }

        const result = await collection.insertOne(question);
        console.log(`Question ajoutée avec succès : ${question.title} (ID: ${question.questionId})`);
        return result;
    } catch (err) {
        console.error('Erreur lors de la création de la question :', err);
        throw err;
    }
}

async function getQuestions() {
    const db = await connectDB();
    const collection = db.collection('survey_questions');
    try {
        const questions = await collection.find().toArray();
        console.log(`Total de ${questions.length} questions trouvées :`, questions);
        return questions;
    } catch (err) {
        console.error('Erreur lors de la récupération des questions :', err);
        throw err;
    }
}

async function getQuestionById(questionId) {
    const db = await connectDB();
    const collection = db.collection('survey_questions');
    try {
        const question = await collection.findOne({questionId: questionId });
        if (!question) {
            throw new Error(`Question avec l'ID ${questionId} introuvable.`);
        }
        console.log(`Question trouvée avec l'ID ${questionId} :`, question);
        return question;
    } catch (err) {
        console.error('Erreur lors de la récupération de la question par ID :', err);
        throw err;
    }
}

async function updateQuestion(questionId, update) {
    const db = await connectDB();
    const collection = db.collection('survey_questions');
    try {
        const result = await collection.updateOne({ questionId: questionId }, { $set: update });
        if (result.matchedCount === 0) {
            throw new Error(`Question avec l'ID ${questionId} introuvable.`);
        }
        console.log(`Question avec l'ID ${questionId} mise à jour avec succès.`);
        return result;
    } catch (err) {
        console.error('Erreur lors de la mise à jour de la question :', err);
        throw err;
    }
}

async function deleteQuestion(questionId) {
    const db = await connectDB();
    const collection = db.collection('survey_questions');
    try {
        const result = await collection.deleteOne({ questionId: questionId });
        if (result.deletedCount === 0) {
            throw new Error(`Question avec l'ID ${questionId} introuvable.`);
        }
        console.log(`Question avec l'ID ${questionId} supprimée avec succès.`);
        return result;
    } catch (err) {
        console.error('Erreur lors de la suppression de la question :', err);
        throw err;
    }
}

module.exports = { createQuestion, getQuestions, getQuestionById, updateQuestion, deleteQuestion };
