import React from 'react';
import { Link } from 'react-router-dom';
import { useContext } from 'react'; // <== IMPORT
import { AuthContext } from '../context/auth.context';

import { Container, Button} from '@chakra-ui/react';

const HomePage = () => {
  const { isLoggedIn } = useContext(AuthContext);

  return (
    
        <Container>
          <h1>IronProfile</h1>
          <p>
            Today we will create an app with authorisation, adding some cool
            styles!
          </p>
       
        {!isLoggedIn && (
            <div>
            <Link to="/signup">
              <Button>Sign up</Button>
            </Link>
            <Link to="/login">
              <Button>Log in</Button>
            </Link>
            </div>
        )}
        </Container>
  );
};

export default HomePage;
