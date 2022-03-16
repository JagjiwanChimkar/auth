import './App.css';
import SignIn from './sign-in';
import SignUp from './sign-up';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
           <div className="App">
           <Routes>
                 <Route exact path='/' element={< SignIn />}></Route>
                 <Route exact path='/signup' element={< SignUp />}></Route>
          </Routes>
          </div>
       </Router>
  );
}

export default App;
