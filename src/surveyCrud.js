// surveyCrud.js
const { connectDB } = require('./database');

async function createSurvey(survey) {
    const db = await connectDB();
    const collection = db.collection('surveys');

    
    try {
        // Vérifier si une enquête avec le même ID existe déjà
        const existingSurvey = await collection.findOne({ _id: survey._id });
        if (existingSurvey) {
            console.log(`Survey with ID ${survey._id} already exists`);
            return null;  // Retourne null pour indiquer qu'il y a un doublon
        }

        const result = await collection.insertOne(survey);
        console.log('Survey created successfully');
        return result;
    } catch (err) {
        console.error('Error creating survey:', err);
        throw err;
    }
}

async function getSurveys() {
    const db = await connectDB();
    const collection = db.collection('surveys');
    try {
        const surveys = await collection.find().toArray();
        return surveys;
    } catch (err) {
        console.error('Error getting surveys:', err);
        throw err;
    }
}

async function getSurveyById(id) {
    const db = await connectDB();
    const collection = db.collection('surveys');
    try {
        const survey = await collection.findOne({ _id: id });
        if (!survey) {
            throw new Error('Survey not found');
        }
        return survey;
    } catch (err) {
        console.error('Error getting survey by ID:', err);
        throw err;
    }
}

async function updateSurvey(id, update) {
    const db = await connectDB();
    const collection = db.collection('surveys');
    try {
        const result = await collection.updateOne({ _id: id }, { $set: update });
        if (result.matchedCount === 0) {
            throw new Error('Survey not found');
        }
        return result;
    } catch (err) {
        console.error('Error updating survey:', err);
        throw err;
    }
}

async function deleteSurvey(id) {
    const db = await connectDB();
    const collection = db.collection('surveys');
    try {
        const result = await collection.deleteOne({ _id: id });
        if (result.deletedCount === 0) {
            throw new Error('Survey not found');
        }
        return result;
    } catch (err) {
        console.error('Error deleting survey:', err);
        throw err;
    }
}

module.exports = { createSurvey, getSurveys, getSurveyById, updateSurvey, deleteSurvey };
