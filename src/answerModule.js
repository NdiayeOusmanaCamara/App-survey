
const { connectDB } = require('./config/database');

async function createAnswer(answer) {
    const db = await connectDB();
    const collection = db.collection('survey_answers');

    try {
        
        const existingAnswer = await collection.findOne({ id: answer.id });
        if (existingAnswer) {
            throw new Error('Une réponse avec cet ID existe déjà.');
        }

        const result = await collection.insertOne(answer);
        console.log(`Réponse ajoutée avec succès : ${answer.title} (ID: ${answer.id})`);
        return result;
    } catch (err) {
        console.error('Erreur lors de la création de la réponse :', err);
        throw err;
    }
}

async function getAnswers() {
    const db = await connectDB();
    const collection = db.collection('survey_answers');
    try {
        const answers = await collection.find().toArray();
        console.log(`Total de ${answers.length} réponses trouvées :`, answers);
        return answers;
    } catch (err) {
        console.error('Erreur lors de la récupération des réponses :', err);
        throw err;
    }
}

async function getAnswerById(id) {
    const db = await connectDB();
    const collection = db.collection('survey_answers');
    try {
        const answer = await collection.findOne({ id: id });
        if (!answer) {
            throw new Error(`Réponse avec l'ID ${id} introuvable.`);
        }
        console.log(`Réponse trouvée avec l'ID ${id} :`, answer);
        return answer;
    } catch (err) {
        console.error('Erreur lors de la récupération de la réponse par ID :', err);
        throw err;
    }
}

async function updateAnswer(id, update) {
    const db = await connectDB();
    const collection = db.collection('survey_answers');
    try {
        const result = await collection.updateOne({ id: id }, { $set: update });
        if (result.matchedCount === 0) {
            throw new Error(`Réponse avec l'ID ${id} introuvable.`);
        }
        console.log(`Réponse avec l'ID ${id} mise à jour avec succès.`);
        return result;
    } catch (err) {
        console.error('Erreur lors de la mise à jour de la réponse :', err);
        throw err;
    }
}

async function deleteAnswer(id) {
    const db = await connectDB();
    const collection = db.collection('survey_answers');
    try {
        const result = await collection.deleteOne({ id: id });
        if (result.deletedCount === 0) {
            throw new Error(`Réponse avec l'ID ${id} introuvable.`);
        }
        console.log(`Réponse avec l'ID ${id} supprimée avec succès.`);
        return result;
    } catch (err) {
        console.error('Erreur lors de la suppression de la réponse :', err);
        throw err;
    }
}

module.exports = { createAnswer, getAnswers, getAnswerById, updateAnswer, deleteAnswer };
