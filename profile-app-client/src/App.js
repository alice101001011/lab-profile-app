import React from 'react';
import HomePage from './pages/HomePage';
import SignupPage from './pages/SignupPage';
import LoginPage from './pages/LoginPage';
import ProfilePage from './pages/ProfilePage';
import Navbar from './components/Navbar';
import { Route, Routes } from "react-router-dom";
import IsPrivate from './components/IsPrivate';
import IsAnon from './components/IsAnon';
import { Container, Flex} from '@chakra-ui/react';


function App() {
  return (
    <>
    
    <Navbar />
    <Flex>
      <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/signup" element={<IsAnon><SignupPage /></IsAnon>} />
            <Route path="/login" element={<IsAnon><LoginPage /></IsAnon>} />
            <Route path="/profile" element={<IsPrivate><ProfilePage /></IsPrivate>} />
      </Routes>
      </Flex>

    </>
  );
}

export default App;
