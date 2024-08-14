// answerCrud.js
const { connectDB } = require('./database');

async function createAnswer(answer) {
    const db = await connectDB();
    const collection = db.collection('survey_answers');
    const result = await collection.insertOne(answer);
    return result;
}

async function getAnswers() {
    const db = await connectDB();
    const collection = db.collection('survey_answers');
    const answers = await collection.find().toArray();
    return answers;
}

async function getAnswerById(id) {
    const db = await connectDB();
    const collection = db.collection('survey_answers');
    const answer = await collection.findOne({ _id: id });
    return answer;
}

async function updateAnswer(id, update) {
    const db = await connectDB();
    const collection = db.collection('survey_answers');
    const result = await collection.updateOne({ _id: id }, { $set: update });
    return result;
}

async function deleteAnswer(id) {
    const db = await connectDB();
    const collection = db.collection('survey_answers');
    const result = await collection.deleteOne({ _id: id });
    return result;
}

module.exports = { createAnswer, getAnswers, getAnswerById, updateAnswer, deleteAnswer };
