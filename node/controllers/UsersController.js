import connection from '../dataBase/connection.js';

export const getUsers = (req, res) => {
    const sql = 'SELECT * FROM users';
    connection.query(sql, (err, result) => {
        if(err){
            console.log('Ha ocurrido un error: ', err);
        } else{
            console.log(result);
            res.send(result);
        }
    })
}

export const createUser = (req, res) => {
    const sql = `INSERT INTO users(nombre, edad) VALUES('${req.body.name}', ${req.body.age})`;
    const data = req.body;
    connection.query(sql, (err, result) => {
        if(err){
            console.log('Error al agregar el usuario a la DB: ',err);
        }else{
            console.log('Usuario Registrado');
            res.redirect('/users/all');
        }
    })
}

export const updateUser = (req, res) => {
    const id = req.params.id;
    const sql = `UPDATE users SET nombre='${req.body.name}', edad=${req.body.age} WHERE id=${id}`;
    connection.query(sql, (err, result) => {
        if(err){
            console.log('Ha ocurrido un error al actualizar la DB: ', err);
        } else {
            console.log('Usuario Actualizado');
            res.redirect('/users/all');
        }
    })
}

export const deleteUser = (req, res) => {
    const id = req.params.id;
    const sql = `DELETE FROM users WHERE id=${id}`;
    connection.query(sql, (err, result) => {
        if(err){
            console.log('Ha ocurrido un error al eliminar desde la DB: ', err);
        } else{
            console.log('Usuario Eliminado Correctamente');
            res.redirect('/users/all');
        }
    })
}