import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


import TempPage from './Pages/TempPage';
import GoalCalendar from './Components/GoalCalendar';
import MoneyGoalsHome from './Pages/MoneyGoalsHome';
import Login from './Pages/Login';
import NavBar from './Components/NavBar';
import CreateAccount from './Pages/CreateAccount';
import CreateGoal from './Nelda/CreatingGoals.js'


function App() {
  return (
    <Router>
    <NavBar />
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/SignIn" element={<Login />} />
      <Route path="/MoneyGoals" element={<MoneyGoalsHome />} />
      <Route path="/CreateAccount" element={<CreateAccount />} />
      <Route path="/Trigger" element={<TempPage />} />
      <Route path="/CreateGoal" element={<CreateGoal />} />


    </Routes>
  </Router>
 
  );
}

export default App;
