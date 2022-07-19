import React from 'react';
import { ChakraProvider, Container } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';
import { useContext } from 'react'; // <== IMPORT
import { AuthContext } from '../context/auth.context';

const Navbar = () => {
  const { isLoggedIn, logOutUser } = useContext(AuthContext);

  return (
    <ChakraProvider>
      <Container>
        <NavLink to="/">Home</NavLink>

        {!isLoggedIn && (
          <>
            <NavLink to="/signup">SignUp</NavLink>
            <NavLink to="/login">LogIn</NavLink>
          </>
        )}

        {isLoggedIn && (
          <>
            <NavLink to="/profile">Profile</NavLink>
            <button onClick={logOutUser}>Logout</button>
          </>
        )}
      </Container>
    </ChakraProvider>
  );
};

export default Navbar;
