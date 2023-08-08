import './App.css';
import SignupPage from './Pages/SignupPage/SignupPage';
import LogInPage from './Pages/LogInPage/LogInPage';
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom'
function App() {
  return (
    <div className="App">
   <BrowserRouter>
   <Routes>
          <Route path="/" element={<SignupPage />} />
          <Route path="/login" element={<LogInPage />} />

        </Routes>

        </BrowserRouter>
    </div>
  );
}

export default App;
