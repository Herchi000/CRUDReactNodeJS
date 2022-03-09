import './styles/App.css';
import AllUsers from './components/AllUsers';
import NewUser from './components/NewUser';
import EditUser from './components/EditUser';
import {BrowserRouter, Routes, Route}  from 'react-router-dom';


const App = ()=>{
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <AllUsers />} />
          <Route path='/create' element={ <NewUser />} />
          <Route path='/update/:id' element={ <EditUser />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
