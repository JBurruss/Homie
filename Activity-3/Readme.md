# Activity 3
Let's start coding. You'll implement this front-end code together as a group, then we'll start working separately on front-end and back-end tasks in the next activity.



### Step 1

There's a username stored in our database and it's showing up on our admin page, but not on our index page. Let's make a customized greeting.

We want to GET information from the server so let's make a GET request. In the `index.html` file find the comment below
```
/*------------------------
     Get Requests
--------------------------*/
```
Below this comment, add a GET request with the path `'/name'`. You can use the request in the admin.html file as a guide. Once you have a get request running, console.log out the `data` being returned by the callback function.

Your data should be an object with a property of userName and a value of your name.

### Step 2
Now that you are getting the right data back from the server, let's put it in to the `#helloUser` div. We'll use JQuery to change the text in the div
```
$("#userHello").text("Hello " + /* add code */ + "!");
```
Where the above code says `/* add code */`, you want to access the 1st object in the data array that is being returned and get the value of the `userName` property from this object.

If you get stuck, checkout how we access the userName in admin.html
