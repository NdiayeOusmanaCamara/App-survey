# Survey App

## Description

Survey App est une application JavaScript simple permettant de gérer les fiches d'enquête de satisfaction des clients. L'application utilise une base de données MongoDB pour stocker les données et permet d'effectuer des opérations CRUD (Create, Get, Update, Delete) sur ces fiches.

## Prérequis

Avant de commencer, assurez-vous d'avoir installé les éléments suivants :

- [Node.js](https://nodejs.org/) (version 12 ou supérieure)
- [MongoDB](https://www.mongodb.com/try/download/community) (version 4.0 ou supérieure)

## Installation

Suivez ces étapes pour configurer le projet sur votre machine locale :

1. **Clonez le repository :**

    ```bash
    git clone <https://github.com/NdiayeOusmanaCamara/App-survey.git>
    ```

2. **Accédez au dossier du projet :**

    ```bash
    cd App-survey
    ```


3. **Configurez la base de données :**

    - Assurez-vous que MongoDB est en cours d'exécution sur votre machine locale.
    - Mettez les paramètres de connexion dans `config/database.js`.

4. **Utilisation:**

Pour démarrer l'application, exécutez la commande suivante :

```bash
npm start

```
5. **Documentation des function:**
`connectDB()`

    Description: Cette fonction se connecte à la base de données MongoDB et retourne une instance de la base de données pour les opérations CRUD. Si une connexion existe déjà, elle retourne cette connexion.
```fonction connecter à la base de données
const db = await connectDB();
```

`createAnswer(answer)`

    Description: Cette fonction permet de créer une nouvelle réponse pour une question dans une enquête.
    

```  créer une nouvelle réponse
const newAnswer = {
    questionId: "12345",
    title: "Email"
};
const result = await createAnswer(newAnswer);
```
`getAnswers()`

     Description: Récupère toutes les réponses stockées dans la collection survey_answers.

```Lire toutes les réponses
const answers = await getAnswers();
console.log(answers);
```
`getAnswerById(id)`

    Description: Récupère une réponse spécifique en fonction de son id

```Récupère une réponse spécifique
const answer = await getAnswerById("12345");
```
`updateAnswer(id, update)`

    Description: Met à jour une réponse existante avec de nouvelles informations.

```Mettre à jour une reponse
const result = await updateAnswer("12345", { title: "Updated Answer" });
```
`deleteAnswer(id)`

    Description: Supprime une réponse de la collection survey_answers en fonction de son id.

```Supprimer une reponse
const result = await deleteAnswer("12345");
```

`createQuestion(question)`

    Description: Cette fonction permet de créer une nouvelle question dans une enquête.

```Créer une nouvelle question
const newQuestion = {
    surveyId: "67890",
    title: "How did you hear about us?",
    type: "singleChoice"
};
const result = await createQuestion(newQuestion);
```

`getQuestions()`

    Description: Récupère toutes les questions stockées dans la collection survey_questions.
````Lire les questions 
const questions = await getQuestions();
    console.log(questions);
````
`getQuestionById(id)`

    Description: Récupère une question spécifique en fonction de son id.
```Lire une question
const question = await getQuestionById("67890");
```
`updateQuestion(id, update)`

    Description: Met à jour une question existante avec de nouvelles informations.
```Mettre à jour une question
const result = await updateQuestion("67890", { title: "Updated Question" });
```
`deleteQuestion(id)`

    Description: Supprime une question de la collection survey_questions en fonction de son.
```Supprimer une question
const result = await deleteQuestion("67890");
```
`createSurvey(survey)`

    Description: Cette fonction permet de créer une nouvelle enquête.`
```Créer une nouvelle enquete
const newSurvey = {
    name: "Customer Satisfaction Survey",
    description: "Survey to evaluate customer satisfaction.",
    createdAt: new Date(),
    createdBy: {
        employeeName: "John Doe",
        employeeRole: "Marketing Manager"
    }
};
const result = await createSurvey(newSurvey);
```
`getSurveys()`

    Description: Récupère toutes les enquêtes stockées dans la collection surveys.
```Recupere les enquetes
const surveys = await getSurveys();
console.log(surveys);
```
`getSurveyById(id)`

    Description: Récupère une enquête spécifique en fonction de son id.
```Lire une enquete spécifique
const survey = await getSurveyById("12345");
```
`updateSurvey(id, update)`

    Description: Met à jour une enquête existante avec de nouvelles informations.
```Metre à jour une enquete
const result = await updateSurvey("12345", { description: "Updated Survey Description" });
```
`deleteSurvey(id)`

    Description: Supprime une enquête de la collection surveys en fonction de son id.
```Supprimer une enquête
const result = await deleteSurvey("12345");
```
`run()`
    Description: Une fonction d'exécution principale qui teste toutes les fonctionnalités CRUD (Create, Read, Update, Delete) pour les enquêtes, questions, et réponses.
```fonction principal
async function run() {
    // Logique de test CRUD ici
}
```


## Authors

N'Diaye Ousmane Camara