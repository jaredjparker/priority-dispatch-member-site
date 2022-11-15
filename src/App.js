import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MembersList from './components/MembersList';
import MemberPage from './components/memberPage/MemberPage';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MembersList />}>
        </Route>
        <Route path="/profile" element={<MemberPage />} >
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
