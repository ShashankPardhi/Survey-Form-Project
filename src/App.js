import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SurveyList from './components/SurveyList';

function App() {
  return (<div className="App">

    {/* Add more routes later */}

    <BrowserRouter>
      <Routes>
        <Route path="/dashboard" element={<SurveyList />}></Route>
      </Routes>
    </BrowserRouter>
  </div>);
}

export default App;
