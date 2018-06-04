import React from 'react';
import { Section } from 'grommet';
import MarvinHeader from '../containers/shared/MarvinHeader';
import MarvinFooter from '../components/shared/MarvinFooter';
import Login from '../containers/Login';

const Home = () => (
  <div className="Home">
    <MarvinHeader />
    <div className="Wrap">
      <Section pad="large">
        <Login />
      </Section>
    </div>
    <MarvinFooter />
  </div>
);

export default Home;
