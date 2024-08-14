// surveyCrud.js
const { connectDB } = require('./database');

async function createSurvey(survey) {
    const db = await connectDB();
    const collection = db.collection('surveys');
    const result = await collection.insertOne(survey);
    return result;
}

async function getSurveys() {
    const db = await connectDB();
    const collection = db.collection('surveys');
    const surveys = await collection.find().toArray();
    return surveys;
}

async function getSurveyById(id) {
    const db = await connectDB();
    const collection = db.collection('surveys');
    const survey = await collection.findOne({ _id: id });
    return survey;
}

async function updateSurvey(id, update) {
    const db = await connectDB();
    const collection = db.collection('surveys');
    const result = await collection.updateOne({ _id: id }, { $set: update });
    return result;
}

async function deleteSurvey(id) {
    const db = await connectDB();
    const collection = db.collection('surveys');
    const result = await collection.deleteOne({ _id: id });
    return result;
}

module.exports = { createSurvey, getSurveys, getSurveyById, updateSurvey, deleteSurvey };
