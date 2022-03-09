import { useState, useEffect } from "react";
import axios from 'axios';
import {Link} from 'react-router-dom';

const URI = 'http://localhost:8000/users/';


const AllUsers = () => {
    const[users, setUsers] = useState([]);
    useEffect( () => {
        getUsers();
    }, [])

    const getUsers = async () => {
        const res = await axios.get(URI)
        setUsers(res.data);
        console.log(res.data);
    }

    const deleteUser = async (id) => {
        await axios.delete(`${URI}delete/${id}`)
        getUsers();
    }

    

    return(
        <div className="container">
            <Link to="/create" className="btn-add">Agregar</Link>
            <table className="tableUsers">
                <thead>
                    <tr >
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Edad</th>
                        <th>Editar</th>
                        <th>Eliminar</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr className="tr" key={ user.id}>
                            <td>{user.id}</td>
                            <td>{user.nombre}</td>
                            <td>{user.edad}</td>
                            <td><Link to={`/update/${user.id}`} className="btn-edit">Editar</Link></td>
                            <td><button onClick={() => deleteUser(user.id)} className="btn-delete">Eliminar</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
        
    )
}


export default AllUsers;