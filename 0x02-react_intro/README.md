# 0x02. React intro
## Details
 By: Johann Kerbrat, Engineering Manager at Uber Works Weight: 1Ongoing second chance project - startedSep 19, 2022 12:00 AM, must end bySep 26, 2022 12:00 AMManual QA review must be done(request it when you are done with the project) An auto review will be launched at the deadline#### In a nutshell…
* Manual QA review:          Pending      
* Auto QA review:          0.0/4 mandatory      
* Altogether:        waiting on some reviews    
 ![](https://holbertonintranet.s3.amazonaws.com/uploads/medias/2019/12/79df527164ac54981039.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIARDDGGGOU5BHMTQX4%2F20220923%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20220923T024419Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=0120ce35356b9ca7bf2d61d285a4cd03f14ac129725921e2bbf4d865d901b94c) 

## Resources
Read or watch :
* [React Official Website](https://intranet.hbtn.io/rltoken/gE-BlSJd2kuCjmICaLarwg) 

* [Getting started with React](https://intranet.hbtn.io/rltoken/u-WhTwGovygfL6u8JXlIGw) 

* [React overview](https://intranet.hbtn.io/rltoken/MtpwNZ4So29HGsFW02PQKA) 

* [create-react-app](https://intranet.hbtn.io/rltoken/1cLQFHw2EB8yQsPypJyDpg) 

* [React Developer Tools](https://intranet.hbtn.io/rltoken/hCaAgJEBx6oH8bDc4yCk0A) 

* [What is Babel?](https://intranet.hbtn.io/rltoken/f7sPHy1rk4YR4SdtHpGj8A) 

* [Enzyme](https://intranet.hbtn.io/rltoken/CPZnPFs3O3bymj9VPF0heg) 

## Learning Objectives
At the end of this project, you are expected to be able to  [explain to anyone](https://intranet.hbtn.io/rltoken/LicUj2VdnIIXXwVmdK3XkA) 
 ,  without the help of Google :
* How to create a basic Javascript application using React
* How to use the package  ` create-react-app `  to start developing quickly with React
* What JSX is and how to use it
* How to use the React Developer Tools to debug your code
* How to use Enzyme’s Shadow rendering to test your application
* How to use React with Webpack & Babel
## Requirements
* All your files will be interpreted/compiled on Ubuntu 18.04 LTS using  ` node 12.x.x `  and  ` npm 6.x.x ` 
* Allowed editors:  ` vi ` ,  ` vim ` ,  ` emacs ` ,  ` Visual Studio Code ` 
* All your files should end with a new line
* A  ` README.md `  file, at the root of the folder of the project, is mandatory
## Tasks
### 0. Basic application
          mandatory         Progress vs Score  Task Body Create a basic app named  ` dashboard `  using  ` create-react-app `  in your  ` task_0 `  directory
You will need a favicon and the Holberton logo. Download them and add them to the   ` src/ `   directory under   ` dashboard/ ` 
Holberton Logo
 ![](https://holbertonintranet.s3.amazonaws.com/uploads/medias/2019/11/175b85183ecedb529e14.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIARDDGGGOU5BHMTQX4%2F20220923%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20220923T024419Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=5c761560ef592f2baddde3dc2b66a4cd51a2eb18c551358ed15528bdf85c387e) 

Favicon
 ![](https://holbertonintranet.s3.amazonaws.com/uploads/misc/2019/11/e240f8157634d33a9757.ico?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIARDDGGGOU5BHMTQX4%2F20220923%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20220923T024419Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=adb0c51cb07633414bd2592d354dda64e05ab03708f8e0a4771bc8a79841e45e) 

Remove the unused files:
*  ` service-worker ` 
*  ` index.css ` 
*  ` App.test.js ` 
in  ` task_0/dashboard/src/App.js ` , create a function  ` App `  that returns:
* a header div with a class named  ` App-header `  containing the Holberton logo and a h1 with the text  ` School dashboard ` 
* a body div with a class named  ` App-body `  containing at least one paragraph with the text  ` Login to access the full dashboard ` 
* a footer div with a class named  ` App-footer `  containing at least one paragraph with the text  ` Copyright 2020 - holberton School ` 
Modify the App.css to make the project looks like the following screenshot:
 ![](https://holbertonintranet.s3.amazonaws.com/uploads/medias/2019/11/7743eba00239687a6fdd.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIARDDGGGOU5BHMTQX4%2F20220923%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20220923T024419Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=e04b27c4f31e0485d84c94c8b99ddd2b5f9e6126bd05f9d40a0caac7f471d7b3) 

Requirements:
* When running, there should not be any lint error in the console
 Task URLs  Github information Repo:
* GitHub repository:  ` holbertonschool-web_react ` 
* Directory:  ` 0x02-react_intro ` 
* File:  ` task_0/dashboards/src/, task_0/dashboard/src/App.css, task_0/dashboard/src/App.js ` 
 Self-paced manual review  Panel footer - Controls 
### 1. Embedding expressions, functions
          mandatory         Progress vs Score  Task Body Using your code from the previous task, in  ` task_1/dashboard/src/utils.js ` :
* Create a function named  ` getFullYear `  that will return the current year
* Create a function named  ` getFooterCopy ` :* It accepts one argument  ` isIndex ` (boolean). When true, the function should return  ` Holberton School ` . When false, the function should return  ` Holberton School main dashboard ` 

* Modify the footer returned in  ` task_1/dashboard/src/App.js `  to use these two functions
in  ` task_1/dashboard/src/Notifications.js ` , create a Notifications element:
* It should import React
* It should export a function
* The function should return a  ` div `  with the class  ` Notifications ` 
* The div should contain a paragraph with the text  ` Here is the list of notifications ` 
* import the file  ` Notifications.css ` . 
in  ` task_1/dashboard/src/Notifications.css ` , style the Notifications class:
* Add a border and some padding around the  ` div ` 
Render the Notifications element:
* Modify  ` task_1/dashboard/src/index.js `  to render the new element ( ` Notifications ` ) in a  ` div `  named  ` root-notifications ` 
* Check that you can see the two elements on the browser, and using the React browser extension
Requirements:
* When running, there should not be any lint error in the console
 Task URLs  Github information Repo:
* GitHub repository:  ` holbertonschool-web_react ` 
* Directory:  ` 0x02-react_intro ` 
* File: ```bash
task_1/dashboard/src/, task_1/dashboard/src/utils.js, task_1/dashboard/src/App.js, task_1/dashboard/src/Notifications.css, task_1/dashboard/src/Notifications.js, task_1/dashboard/src/index.js
```

 Self-paced manual review  Panel footer - Controls 
### 2. Modify the App
          mandatory         Progress vs Score  Task Body using your code from the previous task, in  ` task_2/dashboard/src/App.js `  under the paragraph that says  ` Login to access the full dashboard ` :
* add a label and input for email
* add a label and input for password
* when the user clicks on a label, it should select the corresponding input
* add one button element with the text “OK”
 Task URLs  Github information Repo:
* GitHub repository:  ` holbertonschool-web_react ` 
* Directory:  ` 0x02-react_intro ` 
* File:  ` task_2/dashboard/src/, task_2/dashboard/src/App.js ` 
 Self-paced manual review  Panel footer - Controls 
### 3. Modify the Notifications
          mandatory         Progress vs Score  Task Body in  ` task_2/dashboard/src/utils.js ` :
* Create a function named  ` getLatestNotification `  that returns the following string:  ` <strong>Urgent requirement</strong> - complete by EOD ` 
in  ` task_2/dashboard/src/Notifications.js `  in the Notifications div:
* add a button element with inline styling (without using the CSS file):* show button on right side of notifications box
*  ` aria-label `  is  ` Close ` 
* when user clicks on the button it logs to the console  ` Close button has been clicked ` 

* in the button element add a children  ` img `  element that will import the  ` close-icon.png `  image
* after the paragraph add an unordered list* the list has the following items:* The first one has a default priority and says  ` New course available ` 
* The second one has a urgent priority and says  ` New resume available ` 
* Add the priority to the first and second items of the list using a  ` data `  attribute
* The last item correctly displays the content of  ` getLatestNotification `  using  ` dangerouslySetInnerHTML ` 


in  ` task_2/dashboard/src/Notifications.css ` :
* style the notification priorities using their data attribute: set the color of default items to blue, and the color of urgent items to red.
Requirements:
* When running, there should not be any lint error in the console
* Your app should look like the following screenshot:
 ![](https://holbertonintranet.s3.amazonaws.com/uploads/medias/2019/11/8d639e2671ebe15575ad.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIARDDGGGOU5BHMTQX4%2F20220923%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20220923T024419Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=55e352511d08090c6cab9902e2a3ee599963f3257b5109931eef3bb9182ef44b) 

 Task URLs  Github information Repo:
* GitHub repository:  ` holbertonschool-web_react ` 
* Directory:  ` 0x02-react_intro ` 
* File: ```bash
task_2/dashboard/src/, task_2/dashboard/src/utils.js, task_2/dashboard/src/Notifications.js, task_2/dashboard/src/Notifications.css
```

 Self-paced manual review  Panel footer - Controls 
### 4. Create basic tests with four tests
          mandatory         Progress vs Score  Task Body in  ` task_3/dashboard/src/utils.test.js ` :
* Write a test to check that the function  ` getFullYear `  returns the correct year (be careful to not create a time bomb)
* Write a test to check that  ` getFooterCopy `  returns the correct string when the argument is true or false
* Write a test checking the returned string for  ` getLatestNotification ` 
 Task URLs  Github information Repo:
* GitHub repository:  ` holbertonschool-web_react ` 
* Directory:  ` 0x02-react_intro ` 
* File:  ` task_3/dashboard/src/utils.test.js ` 
 Self-paced manual review  Panel footer - Controls 
### 5. Install Enzyme
          mandatory         Progress vs Score           Score: 0.00% (Checks completed: 0.00%)         Task Body * Install Enzyme with  ` npm ` 
* Create a file named  ` setupTests.js `  and configure the adapter for Enzyme
 Task URLs  Github information Repo:
* GitHub repository:  ` holbertonschool-web_react ` 
* Directory:  ` 0x02-react_intro ` 
* File:  ` task_3/dashboard/src/setupTests.js ` 
 Self-paced manual review  Panel footer - Controls 
### 6. Create React tests
          mandatory         Progress vs Score  Task Body in  ` task_3/dashboard/src/App.test.js `  create four tests:
* test that App renders without crashing
* verify that App renders a div with the class  ` App-header ` 
* verify that App renders a div with the class  ` App-body ` 
* verify that App renders a div with the class  ` App-footer ` 
in  ` task_3/dashboard/src/Notifications.test.js `  create three tests
* test that Notifications renders without crashing
* verify that Notifications renders three list items
* verify that Notifications renders the text  ` Here is the list of notifications ` 
Requirements:
* When running the test suites, you should see the following result
* You must use shallow rendering to write the React tests
 ` Test Suites: 3 passed, 3 total
Tests: 11 passed, 11 total
 `  Task URLs  Github information Repo:
* GitHub repository:  ` holbertonschool-web_react ` 
* Directory:  ` 0x02-react_intro ` 
* File:  ` task_3/dashboard/src/App.test.js, task_3/dashboard/src/Notifications.test.js ` 
 Self-paced manual review  Panel footer - Controls 
### 7. Deploy to a GitHub page
          mandatory         Progress vs Score  Task Body Deploy your application to GitHub Pages using   ` gh-pages `   branch and   ` create-react-app ` 
Your application should be working correctly when accessing the GitHub URL.
 Task URLs #### Add URLs here:
                Save               Github information Repo:
* GitHub repository:  ` holbertonschool-web_react ` 
* Directory:  ` 0x02-react_intro ` 
* File:  ` task_4/ ` 
 Self-paced manual review  Panel footer - Controls 
### 8. Create a project using Webpack
          mandatory         Progress vs Score           Score: 0.00% (Checks completed: 0.00%)         Task Body Without reusing   ` create-react-app `   or the code from the previous exercise, start a brand new npm project
Reusing what you learned during the Webpack module:
* Set up a system to output a  ` bundle.js `  file in a  ` dist `  folder
* Set up a dev server with hot reloading
* Create a  ` src `  folder that will contain your Javascript
* Set up a simple html file in the  ` dist `  folder that will import the bundle file in the  ` body `  tag.
Install and configure the various plugins to support:
* inline source map
* style loader
* css loader
* image webpack loader
 Task URLs  Github information Repo:
* GitHub repository:  ` holbertonschool-web_react ` 
* Directory:  ` 0x02-react_intro ` 
* File: ```bash
task_5/dashboard/config/webpack.config.js, task_5/dashboard/dist/index.html, task_5/dashboard/src/index.js
```

 Self-paced manual review  Panel footer - Controls 
### 9. Install Babel
          mandatory         Progress vs Score  Task Body * Install Babel, and in  ` task_5/dashboard/.babelrc ` , add the presets for  ` preset-env `  and  ` preset-react ` 
* Add a  ` babel-loader `  to the Webpack configuration so you can support  ` js `  and  ` jsx `  files
* Import the files that you wrote in the previous task. All the Javascript and React code should be within the  ` src `  folder
At this point, running   ` webpack-dev-server `   should correctly execute your code, and you should be able to see the dashboard like in the last task
 Task URLs  Github information Repo:
* GitHub repository:  ` holbertonschool-web_react ` 
* Directory:  ` 0x02-react_intro ` 
* File:  ` task_5/dashboard/.babelrc, task_5/dashboard/config/webpack.config.js ` 
 Self-paced manual review  Panel footer - Controls 
### 10. Reorganize the files
          mandatory         Progress vs Score           Score: 0.00% (Checks completed: 0.00%)         Task Body Let’s reorganize the files in our project:
* Every file related to the App, should be within a  ` App `  folder
* Every file related to the Notifications, should be within a  ` Notifications `  folder
* Every file related to the utils functions, should be within a  ` utils `  folder
* Every asset file should be within the  ` assets `  folder
* Set up the  ` favicon.ico `  in the  ` dist `  folder
* Webpack config file should be within a  ` config `  folder if it isn’t already
 Task URLs  Github information Repo:
* GitHub repository:  ` holbertonschool-web_react ` 
* Directory:  ` 0x02-react_intro ` 
* File: ```bash
task_5/dashboard/src/App/App.css, task_5/dashboard/src/App/App.js, task_5/dashboard/src/App/App.test.js, task_5/dashboard/src/Notifications/Notifications.css, task_5/dashboard/src/Notifications/Notifications.js, task_5/dashboard/src/Notifications/Notifications.test.js, task_5/dashboard/src/utils/utils.js, task_5/dashboard/src/utils/utils.test.js, task_5/dashboard/config/webpack.config.js, task_5/dashboard/src/assets/holberton-logo.jpg, task_5/dashboard/dist/favicon.ico
```

 Self-paced manual review  Panel footer - Controls 
### 11. Testing
          mandatory         Progress vs Score  Task Body Install Jest and Enzyme to run your test suites
move the   ` setupTests.js `   file to   ` config `   folder if you have not already
Requirements:
* Your  ` package.json `  should have the two following scripts:
```bash
    "start": "webpack-dev-server --mode development --config config/webpack.config.js",
    "test": "jest"

```
* Running the first script should start your dev server and build without any error
* Running the second script should start your test suites and pass for each test
 Task URLs  Github information Repo:
* GitHub repository:  ` holbertonschool-web_react ` 
* Directory:  ` 0x02-react_intro ` 
* File:  ` task_5/dashboard/config/setupTests.js, task_5/dashboard/package.json ` 
 Self-paced manual review  Panel footer - Controls 
Ready for a  manual review