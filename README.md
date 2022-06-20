# Redux Feedback Loop

## Description

_Duration: 6 hrs

This project is a feedback/reflection form for users to fill out. Users will go through each form and include a rating of how they are feeling, their understanding, the level of support they are receiving, and an option to leave comments. After filling out the form, users can review and submit it. After submission, the data is sent to the server and stored in a local database. 

## Screen Shot

![2022-06-20 12 06 44](https://user-images.githubusercontent.com/77410880/174650475-918edf3c-2c58-48eb-85d2-92fbed0fcdaa.gif)

### Prerequisites

- [Node.js](https://nodejs.org/en/)
- [React](https://reactjs.org/)
- [Postgres](https://postgresapp.com/)

## Installation

1. Create the database with the information contained in the data.sql file
2. Run `npm install`
3. Run `npm run server`
4. Run `npm run client` at the same time as the server
5. A browser will open with the form 

## Structure

These are the main directories.

```
├── server
│   ├── modules
│   │   └── pool.js
│   ├── routes
│   │   └── feedback.router.js
│   └── server.js
├── src
    ├── components
    │   ├── App
    │   │   ├── App.css
    │   │   └── App.jsx
    │   ├── CommentsForm
    │   │   └── CommentsForm.jsx
    │   ├── FeelingForm
    │   │   └── FeelingForm.jsx
    │   ├── Header
    │   │   └── Header.js
    │   ├── Home
    │   │   └── Home.jsx
    │   ├── ReviewForm
    │   │   └── ReviewForm.jsx
    │   ├── SuccessForm
    │   │   └── SuccessForm.jsx
    │   ├── SupportedForm
    │   │   └── SupportedForm.jsx
    │   └── UnderstandingForm
    │       └── UnderstandingForm.jsx
    ├── index.css
    ├── index.js

```

## Usage

This project can be useful to teachers to gauge how their students are feeling about a subject matter, assignment, etc. It can also be useful for employees to gauge how their employees are doing. 

Furthermore, this project can be a great learning resource. Different technologies, framework, and libraries are used in this project. 
## Built With

This project was built with the React framework and Redux library.

## Acknowledgement
Thanks to [Prime Digital Academy](www.primeacademy.io) who equipped and helped me to make this application a reality. 

## Support
If you have suggestions or issues, please email me at xqhuynh@mgmail.com
