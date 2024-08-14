const mongoose = require('mongoose');

// URL de connexion à MongoDB
const url = 'mongodb://localhost:27017/Enquetes';

// Connexion à la base de données
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to MongoDB database: Enquetes');
    })
    .catch(err => {
        console.error('Error connecting to MongoDB:', err);
    });

// Exemple de modèle Mongoose
const SurveySchema = new mongoose.Schema({
    title: String,
    description: String,
    date: Date
});

const Survey = mongoose.model('Survey', SurveySchema);

// Exemple d'ajout de données
const newSurvey = new Survey({ title: 'Survey 1', description: 'First survey', date: new Date() });
newSurvey.save()
    .then(doc => {
        console.log('Survey saved:', doc);
    })
    .catch(err => {
        console.error('Error saving survey:', err);
    });
