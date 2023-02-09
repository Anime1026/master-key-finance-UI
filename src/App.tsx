import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.scss';
import Bounty from './pages/bounty/bounty';
import Dashboard from './pages/dashboard/dashboard';
import Home from './pages/home/home';
import Setting from './pages/setting/setting';
import Wallet from './pages/wallet/wallet';
import Value from './pages/Value';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/bounty" element={<Bounty />} />
          <Route path="/wallet" element={<Wallet />} />
          <Route path="/value" element={<Value />} />
          <Route path="/setting" element={<Setting />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
