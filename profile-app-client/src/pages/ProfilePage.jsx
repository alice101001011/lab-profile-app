import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Container, Button} from '@chakra-ui/react';

const API_URL = 'http://localhost:5005';

const ProfilePage = () => {
  const [user, setUser] = useState({});
  const [image, setImage] = useState();
  const storedToken = localStorage.getItem('authToken');

  const getUser = () => {
    axios
      .get(
        `${API_URL}/api/users`,
        {
          headers: { Authorization: `Bearer ${storedToken}` },
        },
        console.log(storedToken)
      )
      .then((response) => {
        console.log(response);
        const foundUser = response.data.user;
        setUser(foundUser);
        setImage(foundUser.image);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getUser();
  }, []);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const requestBody = { image };

    const storedToken = localStorage.getItem('authToken');

    axios
      .post(`${API_URL}/api/users/upload`, requestBody, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => {
        console.log('updated profile picture');
      });
  };

  return (
    <>
      <div>
        <h1>Profile</h1>
        <h3>
          <span>Username</span> {user.username}
        </h3>
        <h3>
          <span>Campus</span> {user.campus}
        </h3>
        <h3>
          <span>Course</span> {user.course}
        </h3>
        image
      </div>
      <div>
        <h3>Change profile picture</h3>
        <form onSubmit={handleFormSubmit}>
          <label>Profile Picture URL:</label>
          <input
            type="text"
            name="image"
            value={user.image}
            onChange={(e) => setImage(e.target.value)}
          />

          <Button type="submit">Update Profile Picture</Button>
        </form>
        <picture>
          <img src={user.image} alt={user.username} />
        </picture>
      </div>
    </>
  );
};

export default ProfilePage;
