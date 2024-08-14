// questionCrud.js
const { connectDB } = require('./database');

async function createQuestion(question) {
    const db = await connectDB();
    const collection = db.collection('survey_questions');
    const result = await collection.insertOne(question);
    return result;
}

async function getQuestions() {
    const db = await connectDB();
    const collection = db.collection('survey_questions');
    const questions = await collection.find().toArray();
    return questions;
}

async function getQuestionById(id) {
    const db = await connectDB();
    const collection = db.collection('survey_questions');
    const question = await collection.findOne({ _id: id });
    return question;
}

async function updateQuestion(id, update) {
    const db = await connectDB();
    const collection = db.collection('survey_questions');
    const result = await collection.updateOne({ _id: id }, { $set: update });
    return result;
}

async function deleteQuestion(id) {
    const db = await connectDB();
    const collection = db.collection('survey_questions');
    const result = await collection.deleteOne({ _id: id });
    return result;
}

module.exports = { createQuestion, getQuestions, getQuestionById, updateQuestion, deleteQuestion };
