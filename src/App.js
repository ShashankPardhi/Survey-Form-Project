import './App.css';
import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SurveyList from './components/dashboard/SurveyList';
import Homepage from './components/homepage/homepage'
import Login from './components/login/login'
import Register from './components/register/register'

function App() {

  const [user, setLoginUser] = useState({})

  useEffect(() => {
    // setLoginUser(JSON.parse(localStorage.getItem("MyUser")))
  }, [])

  const updateUser = (user) => {
    /* localStorage.setItem("MyUser", JSON.stringify(user))
    setLoginUser(user) */
  }


  return (<div className="App">

    {/* Add more routes later */}

    <BrowserRouter>
      <Routes>
        {/* <Route exact path="/"
          element={
            user && user._id ? <Homepage updateUser={updateUser} /> : <Login updateUser={updateUser} />
          }>
        </Route> */}
        <Route path="/" element={<Login updateUser={updateUser} />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/dashboard" element={<SurveyList />}></Route>
      </Routes>
    </BrowserRouter>
  </div>);
}

export default App;
