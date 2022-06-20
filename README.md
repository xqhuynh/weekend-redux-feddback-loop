# Redux Feedback Loop

## Description

_Duration: 6 hrs

This project is a feedback/reflection form for users to fill out. Users will go through each form and include a rating of how they are feeling, their understanding, the level of support they are receiving, and an option to leave comments. After filling out the form, users can review and submit it. After submission, the data is sent to the server and stored in a local database. 

## Screen Shot

![Screen Shot 2022-06-19 at 9 16 10 PM](https://user-images.githubusercontent.com/77410880/174514157-8194f37e-49c0-4fe3-96f9-ee544e1af8fa.png)

![Screen Shot 2022-06-19 at 9 16 39 PM](https://user-images.githubusercontent.com/77410880/174514163-b9d696a3-6495-4ac0-92fb-aba2b019bb1d.png)

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

# Structure

These are the main directories.

```
├── server
│   ├── modules
│   │   └── pool.js
│   ├── routes
│   │   └── feedback.router.js
│   └── server.js
├── src
│   ├── components
│   │   ├── App
│   │   │   ├── App.css
│   │   │   └── App.jsx
│   │   ├── CommentsForm
│   │   │   └── CommentsForm.jsx
│   │   ├── FeelingForm
│   │   │   └── FeelingForm.jsx
│   │   ├── Header
│   │   │   └── Header.js
│   │   ├── Home
│   │   │   └── Home.jsx
│   │   ├── ReviewForm
│   │   │   └── ReviewForm.jsx
│   │   ├── SuccessForm
│   │   │   └── SuccessForm.jsx
│   │   ├── SupportedForm
│   │   │   └── SupportedForm.jsx
│   │   └── UnderstandingForm
│   │       └── UnderstandingForm.jsx
│   ├── index.css
│   ├── index.js

```

## Usage

1. To gain experience working with the Redux store
2. To gain experience using React router and routes
3. To gain experience using React-redux useSelector and useDispatch hooks
4. To gain experience with Redux state

## Built With

This project was built with the React framework and Redux library.

## Acknowledgement
Thanks to [Prime Digital Academy](www.primeacademy.io) who equipped and helped me to make this application a reality. 

## Support
If you have suggestions or issues, please email me at xqhuynh@mgmail.com
