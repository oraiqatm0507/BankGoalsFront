import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


import TempPage from './MG_Goals/Pages/TempPage';
import GoalCalendar from './MG_Goals/Components/GoalCalendar';
import MoneyGoalsHome from './MG_Goals/Pages/MoneyGoalsHome';
import Login from './MG_Goals/Pages/Login';
import NavBar from './MG_Goals/Components/NavBar';
import CreateAccount from './MG_Goals/Pages/CreateAccount';
import CreateGoal from './MG_Goals/Nelda/CreatingGoals.js'


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
