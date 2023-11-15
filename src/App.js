import { BrowserRouter, Routes, Route } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import NavBar from './Components/Navbar';
import AddBook from './Components/Pages/AddBooks';
import ShowBook from './Components/Pages/ShowBooks';
import UpdateBook from './Components/Pages/UpdateBooks';
import DeleteBook from './Components/Pages/DeleteBooks';

function App() {
  return (
    <>  
      <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/add' element={<AddBook/>}/>
        <Route path='/show' element={<ShowBook/>}/>
        <Route path='/update/:id' element={<UpdateBook/>}/>
        <Route path='/delete/:id' element={<DeleteBook/>}/>
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
