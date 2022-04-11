# Getting Started
Clone/download the project on your local machine.
Run the 'npm install' in the ./front-react directory.
Run the 'npm install' in the ./node directory.

## Set up your database
Create a mySql database with the next configuration:
-DB name: emadb (Or just name it as you wish, but it must match with the config.js archive in the node/dataBase directory)
-Table name: 'users'
-Fields: id (INT-PK), nombre(VARCHAR), edad(INT)

# How to use it
The React module runs on port 3000, while the NodeJS module runs on port 6000.
Run the 'npm run myServer' command in the ./node directory to start the server.
Run the 'npm start' command in the ./front-react directory to start the app.

You can add a new register by pressing the 'Agregar' button add filling the form.
You can modify a register by pressing the 'Editar' button, as well as delete it by pressing the 'Eliminar' button.
