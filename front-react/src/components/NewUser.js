import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {useState} from 'react';

const URI = 'http://localhost:8000/users/create';

const NewUser = () => {
    const[name, setName] = useState("");
    const[age, setAge] = useState("");
    const navigate = useNavigate();

    const storeData = async (e) => {
        e.preventDefault();

        await axios.post(URI, {name:name, age:age})
        .catch((e) => console.log(e))

        navigate('/');
        
    }
    

    return(
        <div className='container'>
            <h3 className='title'>Ingrese los datos del usuario</h3>

            <form className='newUser' onSubmit={storeData}>
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

export default NewUser;