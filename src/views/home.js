import React from 'react';
import { Section } from 'grommet';
import Login from '../containers/login';

const Home = () => (
  <div className="Home">
    <div className="Wrap">
      <Section pad="large">
        <Login />
      </Section>
    </div>
  </div>
);

export default Home;
