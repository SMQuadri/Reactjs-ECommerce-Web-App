# Nike-Shoes-ECommerce-Site

## SPA link : https://nike-10001.web.app/

This Full Stack Nike shoes e-commerce SPA (single page application) includes user authentication, user tracking, react routing, react hooks, react-context API, react dom manipulation, reusable components, react slick implementation, device responsiveness, dummy payment gateway API integration and the SPA's deployment on Firebase.

### Dependencies used:
-> npm (Node's packet manager)
-> create-react-app  (for default react js project setup)
-> react-dom
-> react-router-dom  (for implementing SPA's page routing without page refresh)
-> react-slick  (for implementing slick carousel)
-> react-currency-format  (to standardize the calculated price of the total items)
-> react-stripe-checkout  (to implement a dummy payment gateway API's integration)
-> material-core
-> material-ui (icon components)
-> firebase  (for user authentication and tracking purposes and hosting the web app)

### Repository Folder Structure:
-> build: Generated output compressed folder on running the 'npm run build' command for web app's production purposes.
-> public: Contains the index.html file which is used for lesser common purposes, but remains unchanged in this project.
-> src: Contains all the js and css files and subdirectories involved in the creation of the project.
-> firebase.json: This file is the root of the project directory created automatically by Firebase on running the 'firebase init' command.
-> package-lock.json: Generated automatically for any operations where npm modifies either the node-modules tree or package.json.
-> package.json: This file holds all the packages and dependencies required by the project.

### Basic steps involved to create and deploy the project to production:
1) Install a text editor of your choice (VS code is my preferance).
2) Slide in the CLI (Command Line Interface) and install react's framework provided by Facebook by running the command 'npm install -g create-react-app'
3) Now to install the default necessary dependancies of a react js project, navigate into the path where you would like to create the project and run the command 'create-react-app name_of_your_app'
4) Navigate into the folder and install the other libraries and dependancies which your project will require. ( npm install react-dom react-router-dom react-slick react-slick react-currency-format react-stripe-checkout), in my case.
5) npm install @material-ui/core
   npm install @material-ui/icons
Run the above commands if your project requires material UI components.
6) Open the react js folder in your IDE and do some default clean-up work.
7) Create a components folder in your src folder and start creating the components of your project.
8) Make sure you use Browser Router, Route, Switch, Link and NavLink in your project to implement your SPA routing without page refresh.
9) Create a Firebase account with your google account. 
10) Go to console in Firebase and add a new project. Complete the basic firebase project creation steps. Make sure you select checkbox of app hosting.
11) Then go to the project settings of your firebase project and look for Firebase SDK snippet in it. Select the config part and copy the firebase config snippet.
12) Create a new javascript file in the src folder of your react project naming 'firebase.js'. Export the authentication and database instances by using the firebase config snippet keys copied in the previous step. Use these exports in your project wherever you require them for authentication and realtime database creation and manipulation purposes.
13) To avoid the headache of prop-drilling you can use either React's context API or Redux as per your requirement and convenience. (In this project I used React's Context API)
14) Also, in your firebase project, enable the required sign-in method for the authentication your project uses.
15) After the completion of your project, the next step is to deploy your project to production. We can do this using firebase hosting.
16) Open up the terminal of your IDE and run the command 'firebase login' command if this is your first time hosting an app on firebase. Do the default login steps and enable the scripts' access rights through your Windows Powershell.
17) Then run the command 'firebase init' to which creates and adds a firebase.json file in the root of your project. It is also required to deploy the assets used by your project with the firebase CLI.
18) Navigate to the hosting method from the options generated on running the 'firebase init' command amd press 'Spacebar' on your keyboard to select the option and then press enter.
19) Then from the options given further, select 'use an existing project'. And then select your firebase project.
20) In the next step type the 'build' command in your terminal and then type 'Y' to configure the app as an SPA.
21) Run the following command in the next step;
    npm run build
22) On execution of the previous command, it will generate an optimized production build version of your entire app project in the form of a folder named 'build' in your root directory.
23) The final step is to run 'firebase deploy' command and on execution of it you will get an http link of your deployed app.
24) You can also get the link of your deployed app from your firebase project.
25) In the meanwhile, if you ever change any bit of code later on, you need to run the 'npm run build' command again.
