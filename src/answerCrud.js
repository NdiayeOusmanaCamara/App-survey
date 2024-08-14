// answerCrud.js
const { connectDB } = require('./database');

async function createAnswer(answer) {
    const db = await connectDB();
    const collection = db.collection('survey_answers');

    try {
        // Vérifier si une réponse avec le même ID existe déjà
        const existingAnswer = await collection.findOne({ _id: answer._id });
        if (existingAnswer) {
            throw new Error('Answer with this ID already exists');
        }

        const result = await collection.insertOne(answer);
        console.log("Response ajouté avec succées",result)
        return result;
    } catch (err) {
        console.error('Error creating answer:', err);
        throw err;
    }
}

async function getAnswers() {
    const db = await connectDB();
    const collection = db.collection('survey_answers');
    try {
        const answers = await collection.find().toArray();
        console.log("Liste des enquetes",answers)
        return answers;
    } catch (err) {
        console.error('Error getting answers:', err);
        throw err;
    }
}

async function getAnswerById(id) {
    const db = await connectDB();
    const collection = db.collection('survey_answers');
    try {
        const answer = await collection.findOne({ _id: id });
        if (!answer) {
            throw new Error('Answer not found');
        }
        console.log("Enquete",answer)
        return answer;
    } catch (err) {
        console.error('Error getting answer by ID:', err);
        throw err;
    }
}

async function updateAnswer(id, update) {
    const db = await connectDB();
    const collection = db.collection('survey_answers');
    try {
        const result = await collection.updateOne({ _id: id }, { $set: update });
        if (result.matchedCount === 0) {
            throw new Error('Answer not found');
        }
        console.log("Mise à jour avec succées",result)
        return result;
    } catch (err) {
        console.error('Error updating answer:', err);
        throw err;
    }
}

async function deleteAnswer(id) {
    const db = await connectDB();
    const collection = db.collection('survey_answers');
    try {
        const result = await collection.deleteOne({ _id: id });
        if (result.deletedCount === 0) {
            throw new Error('Answer not found');
        }
        console.log("une reponse à été supprimé")
        return result;
    } catch (err) {
        console.error('Error deleting answer:', err);
        throw err;
    }
}

module.exports = { createAnswer, getAnswers, getAnswerById, updateAnswer, deleteAnswer };
