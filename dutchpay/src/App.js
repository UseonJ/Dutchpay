import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CreateGroup } from './components/Create Group';
import { ExpenseMain } from './components/ExpenseMain';
import { Addmembers } from './components/AddMembers';

const App = ()=>(
  
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<CreateGroup/>} />
      <Route path='/members' element={<Addmembers/>}/>
      <Route path='/expense' element={<ExpenseMain/>} />
    </Routes>
    </BrowserRouter>
  
)

export default App;
