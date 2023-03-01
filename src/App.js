import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SurveyList from './components/dashboard/SurveyList';
import Homepage from './components/homepage/homepage'
import Login from './components/login/login'
import Register from './components/register/register'

function App() {

  // check if user is looged in
  let loginStatus = localStorage.getItem("isLoggedIn")

  return (<div className="App">
    <BrowserRouter>
      <Routes>
        <Route exact path="/"
          element={
            loginStatus === null ? <Login /> : <SurveyList />
          }>
        </Route>
        <Route path="/" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/dashboard" element={<SurveyList />}></Route>
      </Routes>
    </BrowserRouter>
  </div>);
}

export default App;
