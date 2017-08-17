# Activity 1

You have 15 minutes for this Activity. It's very important that you complete each activity in the allotted time. Work smart. Ask other students or TAs when you get lost. Don't just stare at your screen or get stuck in a Google hole. Today is more about implementation than understanding concepts, so keep your fingers moving.

### Step 1
If you're not already, move to sit by your teammate. Decide who will tackle front-end first and who will tackle back-end. Don't worry you'll switch later.

### Step 2
One person on your team needs to fork this repo by clicking the fork button in the top right of the screen. Whoever forked the repo needs to go to `settings` at the top of the page and then select `collaborators` on the left and add your teammate(s) as collaborators.

### Step 3
Everyone on the team should clone the repo.

Once you have a local copy, go to app > config > connection.js and confirm that you have the correct connection info.

Then go to app > config > schema.sql and copy the code. Paste that code into phpmyadmin and run the command. Confirm that you now have a database named `homie` that has 3 tables.

### Step 4
in the terminal, type `npm install` and then `node server` and verify that your server runs and you are connecting to your database.

You should see something like this in your terminal.
```
App listening on PORT: 8080
connected as id 903
```
Navigate to localhost:8080 and make sure your page is rendering

### Bonus
If you finish early, start looking through the files and get familiar with the structure of the following files:

`apiRoutes.js`

`index.html`

`admin.html`
