
const { connectDB } = require('./config/database');

async function createSurvey(survey) {
    const db = await connectDB();
    const collection = db.collection('surveys');

    try {
        
        const existingSurvey = await collection.findOne({ surveyId: survey.surveyId });
        if (existingSurvey) {
            console.log(`Enquête avec l'ID ${survey.surveyId} existe déjà.`);
            return null;  
        }

        const result = await collection.insertOne(survey);
        console.log(`Enquête créée avec succès : (ID: ${survey.surveyId})`);
        return result;
    } catch (err) {
        console.error('Erreur lors de la création de l\'enquête :', err);
        throw err;
    }
}

async function getSurveys() {
    const db = await connectDB();
    const collection = db.collection('surveys');
    try {
        const surveys = await collection.find().toArray();
        console.log(`Total de ${surveys.length} enquêtes trouvées :`, surveys);
        return surveys;
    } catch (err) {
        console.error('Erreur lors de la récupération des enquêtes :', err);
        throw err;
    }
}

async function getSurveyById(surveyId) {
    const db = await connectDB();
    const collection = db.collection('surveys');
    try {
        const survey = await collection.findOne({ surveyId: surveyId });
        if (!survey) {
            throw new Error(`Enquête avec l'ID ${surveyId} introuvable.`);
        }
        console.log(`Enquête trouvée avec l'ID ${surveyId} :`, survey);
        return survey;
    } catch (err) {
        console.error('Erreur lors de la récupération de l\'enquête par ID :', err);
        throw err;
    }
}

async function updateSurvey(surveyId, update) {
    const db = await connectDB();
    const collection = db.collection('surveys');
    try {
        const result = await collection.updateOne({ surveyId:surveyId }, { $set: update });
        if (result.matchedCount === 0) {
            throw new Error(`Enquête avec l'ID ${surveyId} introuvable.`);
        } 
        console.log(`Enquête avec l'ID ${surveyId} mise à jour avec succès.`);
        return result;
    } catch (err) {
        console.error('Erreur lors de la mise à jour de l\'enquête :', err);
        throw err;
    }
}

async function deleteSurvey(surveyId) {
    const db = await connectDB();
    const collection = db.collection('surveys');
    try {
        const result = await collection.deleteOne({surveyId: surveyId });
        if (result.deletedCount === 0) {
            throw new Error(`Enquête avec l'ID ${surveyId} introuvable.`);
        }
        console.log(`Enquête avec l'ID ${surveyId} supprimée avec succès.`);
        return result;
    } catch (err) {
        console.error('Erreur lors de la suppression de l\'enquête :', err);
        throw err;
    }
}

module.exports = { createSurvey, getSurveys, getSurveyById, updateSurvey, deleteSurvey };
