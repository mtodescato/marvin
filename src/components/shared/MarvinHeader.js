import React from 'react';
import PropTypes from 'prop-types';
import { Header, Heading, Image, Box } from 'grommet';
import AccessibleIcon from 'grommet/components/icons/base/Accessible';
import uniwebLogo from '../../images/unipd.png';
import marvinLogo from '../../images/marvin_logo.png';

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
      {props.title ?
        <Heading
          align="center"
          tag="h1"
        >
          {props.title}
        </Heading> : null
      }

    </Box>
    {props.user.name ?
      <Box
        direction="row"
        pad={{ horizontal: 'small', between: 'small', vertical: 'none' }}
        separator="vertical"
      >
        <AccessibleIcon colorIndex="ok" type="status" />
        <Heading tag="h4" strong>
          {props.user.name} {props.user.surname}
        </Heading>
      </Box> : null
      }
  </Header>
);


MarvinHeader.defaultProps = {
  title: '',
};

MarvinHeader.propTypes = {
  title: PropTypes.string,
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    surname: PropTypes.string.isRequired,
  }).isRequired,
};

export default MarvinHeader;
