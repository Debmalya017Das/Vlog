// import Post from './Post';
// import Header from './Header';
import { Route, Routes } from 'react-router-dom';
import Layout from './layout'; 
import Indexpage from './pages/indexpage';
import Loginpage from './pages/loginpage';
import Reg from './pages/regpage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Indexpage />} />
        <Route path="/login" element={<Loginpage />} />
        <Route path="/register" element={<Reg />} />
      </Route>
    </Routes>
  );
}

export default App;
