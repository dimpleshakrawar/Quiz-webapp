# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

////////////////////////////////////////

1) Overall Structure:
   a)App: The main component that manages the state of the quiz, timer, and navigation between questions.
   b)QuizForm: A component to display a question with options and allow users to select answers.
   c)Timer: A component responsible for counting down the remaining time.
   d)ReportPage: A component to display correct and submitted answers after the quiz ends.

2) State Management:
   Use a state management library like Redux-toolkit and useEffect to manage the state of the quiz, including the data of question fetched through API, count to move to next question,      user-selected answers, correct answers, etc.

3) Timer Functionality:
   Implement a timer that counts down from 30 minutes (or your desired duration). Use setTimeout or an interval to update the timer display and trigger automatic submission when the 
   timer reaches zero.

4) Question Navigation:
   Implement logic to display one question at a time and provide navigation buttons (e.g., "Next" and "Previous") to move between questions.

5) User Interaction:
   Allow users to select answers for each question and store their selections in the state. Used radio buttons for this purpose.

6) Automatic Submission:
   When the timer reaches zero, trigger an automatic submission of the quiz. This can be done by calling a submission function that checks user answers against correct answers.

7) Report Generation:
   After submission, navigate to the report page.
   This page should display the following information:
     -User's selected answers for each question.
     -Correct answers for each question.

8) Styling and Design:
   Apply TailwindCSS library to style components and make the quiz visually appealing.

9) Deployment:
   Deployed on Viceral, the link provided is -

--> run npm i for all the required installation and npm run dev to run the code
