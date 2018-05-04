import React from 'react';
import HomeComponent from '../../components/student/home';

const user = {
  name: 'Giovanni',
  matricola: '11200000',
  address: '0x0',
};

const Home = () => (
  <HomeComponent user={user} />
);

export default Home;
