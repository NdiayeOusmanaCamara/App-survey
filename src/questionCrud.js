// questionCrud.js
const { connectDB } = require('./database');

async function createQuestion(question) {
    const db = await connectDB();
    const collection = db.collection('survey_questions');

    try {
        // Vérifier si une question avec le même ID existe déjà
        const existingQuestion = await collection.findOne({ _id: question._id });
        if (existingQuestion) {
            throw new Error('Question with this ID already exists');
        }

        const result = await collection.insertOne(question);
        console.log("Question ajouté avec succées", result)
        return result;
    } catch (err) {
        console.error('Error creating question:', err);
        throw err;
    }
}

async function getQuestions() {
    const db = await connectDB();
    const collection = db.collection('survey_questions');
    try {
        const questions = await collection.find().toArray();
        console.log('All Questions:', questions);
        return questions;
    } catch (err) {
        console.error('Error getting questions:', err);
        throw err;
    }
}

async function getQuestionById(id) {
    const db = await connectDB();
    const collection = db.collection('survey_questions');
    try {
        const question = await collection.findOne({ _id: id });
        if (!question) {
            throw new Error('Question not found');
        }
        console.log('Question with ID:', question);
        return question;
    } catch (err) {
        console.error('Error getting question by ID:', err);
        throw err;
    }
}

async function updateQuestion(id, update) {
    const db = await connectDB();
    const collection = db.collection('survey_questions');
    try {
        const result = await collection.updateOne({ _id: id }, { $set: update });
        if (result.matchedCount === 0) {
            throw new Error('Question not found');
        }
        console.log("Mise à jour avec succées ", result)

        return result;
    } catch (err) {
        console.error('Error updating question:', err);
        throw err;
    }
}

async function deleteQuestion(id) {
    const db = await connectDB();
    const collection = db.collection('survey_questions');
    try {
        const result = await collection.deleteOne({ _id: id });
        if (result.deletedCount === 0) {
            throw new Error('Question not found');
        }
          console.log("questions supprimé", result)
        return result;
    } catch (err) {
        console.error('Error deleting question:', err);
        throw err;
    }
}

module.exports = { createQuestion, getQuestions, getQuestionById, updateQuestion, deleteQuestion };
