# To-do-list
To Do List Creator

Quick start

 1- The first step is to read the project documentation.
 
 In the readme you will see that fork the project is the first thing to do. I didn't find the "Fork" option so i just cloned it and create a branch to start.
It also provides an api that returns a json from https://jsonplaceholder.typicode.com/todos/ with 200 tasks by default, with different data.

    I have created the project to support React, Typescript and Emotion, also using Material UI. With Babel and Webpack:





The api interface look like this:
    "userId": number,
    "id": number,
    "title": string,
    "completed": boolean

    I didn't needed the userId so i removed it.

     I created the call with axios and it looks like this:

    


    Since it is such a large json I limited it to a maximum of 10 elements to make it easier to understand:





