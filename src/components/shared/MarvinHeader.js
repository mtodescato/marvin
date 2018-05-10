import React from 'react';
import PropTypes from 'prop-types';
import { Header, Heading, Image, Box } from 'grommet';
import uniwebLogo from '../../images/unipd.png';
import marvinLogo from '../../images/marvin_logo.png';
// import AccessibleIcon from 'grommet/components/icons/base/Accessible';

const MarvinHeader = props => (
  <Header
    fixed
    size="medium"
    splash={false}
    colorIndex="light-2"
    separator="horizontal"
  >
    <Box pad="small"><Image src={marvinLogo} size="small" /></Box>
    <Box pad="small"><Image src={uniwebLogo} size="thumb" /></Box>
    <Box
      flex
      justify="center"
      direction="row"
      responsive={false}
    >
      <Heading
        align="left"
        tag="h1"
      >
        {props.title}
      </Heading>
      <Box
        pad="small"
        justify="end"
      >
        Logged as
      </Box>
    </Box>
  </Header>
);


MarvinHeader.defaultProps = {
  title: '',
};

MarvinHeader.propTypes = {
  title: PropTypes.string,
};

export default MarvinHeader;