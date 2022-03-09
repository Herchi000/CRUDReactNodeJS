import axios from 'axios';
import { useNavigate,  useParams} from 'react-router-dom';
import {useState, useEffect} from 'react';

const URI = 'http://localhost:8000/users/';

const EditUser = () => {
    const[name, setName] = useState("");
    const[age, setAge] = useState("");
    const navigate = useNavigate();
    const {id} = useParams();

    useEffect(() => {
        getUser();
    }, [])

    const getUser = async () => {
        const res = await axios.post(URI + id, {id:id});
        setName(res.data[0].nombre);
        setAge(res.data[0].edad);
    }

    const updateData = async (e) => {
        e.preventDefault();

        await axios.put(`${URI}update/${id}`, {name:name, age:age})
        .catch((e) => console.log(e))

        navigate('/');
    }

    return (
        <div className='container'>
            <h3 className='title'>Ingrese los datos del usuario</h3>

            <form className='newUser' onSubmit={updateData}>
                <div className='nameCamp'>
                    <label className='label'>Nombre</label>
                    <input 
                        className='input'
                        type="text" 
                        placeholder='Ingrese nombre completo' 
                        required={true}
                        name='name'
                        value = {name}
                        onChange = {(e) => setName(e.target.value)}
                    >   
                    </input>
                </div>
               

                <div className='ageCamp'>
                    <label className='label'>Edad</label>
                    <input 
                        className='input'
                        type="number" 
                        placeholder='Ingrese la edad' 
                        min='0' max='120'
                        required={true}
                        name='age'
                        value = {age}
                        onChange =  {(e) => setAge(e.target.value)}
                    >
                    </input>
                </div>

                <button type='submit' className='btn-submit'>Aceptar</button>
            </form>
        </div>
    )
}

export default EditUser;