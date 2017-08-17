# Activity 4
Now it's time to split into teams and get to work.

### Step 1
#### Front-end
In the `admin.html` file, under the setName function, write a function to POST todos calles setTodo. Your new POST request should have the path `'/todo'`. You can copy past the setName function to get you started. Make sure you change the object that you are sending to the server to look like this:

```
var newTask = {
          task: $("#task").val()
}
```

Be sure to add an action listener that calls this function when you click the todo plus sign

```
$("#task").on('keyup', setTodo);
```

#### Back-end
In the `apiRoutes.js` file, underneath the `app.post('/name'...)` route, add a new POST route. You can copy paste the `app.post('/name'...)` route to get you started. The path for your new route should be `'/todo'`.

### Step 2

Work together to ensure that data is being added to the database. Debug as a team when necessary.

### Step 3
Now that the data is in the database, let's bring it back

#### Front-end
In the `admin.html` file, under the getName function, write a function to GET todos. Your new GET request should have the path `'/todos'`. You can copy past the getName function to get you started. Then console.log the data that you are getting back from the server.

Make sure you call the `getTodos();` function in the callback function for your POST request.

#### Back-end
In the `apiRoutes.js` file, underneath the `app.get('/name'...)` route, add a new get route. You can copy paste the `app.get('/name'...)` route to get you started. The path for your new route should be `'/todos'`. Make sure you access the data from the `todo` table not the `users` table.

### Step 4

Work together to ensure that you are able to console.log out the data from the database. Once you have the data being passed to the client, iterate through the array of todo objects and add the following code:

```
 $("#todos").append('<button type="button" class="list-group-item todoitem" data-id="' + data[i].id + '">' + data[i].task + '</button>');
 ```

 Read through this code together until you understand it. You are appending a new button for each todo item and adding a data-attribute to store the id. This last part will be essential later when we need to update and delete todos.
