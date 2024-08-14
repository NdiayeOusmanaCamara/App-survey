const { ObjectId } = require('mongodb');
const { connectDB } = require('./database');

async function createQuestion(question) {
    const db = await connectDB();
    const collection = db.collection('questions');
    const result = await collection.insertOne(question);
    return result;
}

async function getQuestions() {
    const db = await connectDB();
    const collection = db.collection('questions');
    const questions = await collection.find().toArray();
    return questions;
}

async function getQuestionById(id) {
    const db = await connectDB();
    const collection = db.collection('questions');
    const question = await collection.findOne({ _id: ObjectId(id) });
    return question;
}

async function updateQuestion(id, update) {
    const db = await connectDB();
    const collection = db.collection('questions');
    const result = await collection.updateOne({ _id: ObjectId(id) }, { $set: update });
    return result;
}

async function deleteQuestion(id) {
    const db = await connectDB();
    const collection = db.collection('questions');
    const result = await collection.deleteOne({ _id: ObjectId(id) });
    return result;
}

module.exports = { createQuestion, getQuestions, getQuestionById, updateQuestion, deleteQuestion };
