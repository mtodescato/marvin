import React from 'react';
import PropTypes from 'prop-types';
import { Section, Box, Label } from 'grommet';
import FormNextLinkIcon from 'grommet/components/icons/base/FormNextLink';

const HomeComponent = props => (
  <Box
    classname="PanelBox"
    direction="column"
    margin="small"
  >
    <Box
      classname="PanelHeader"
      direction="row"
      justify="start"
      align="center"
      separator="horizontal"
    >
      <FormNextLinkIcon />
      <Label>
        Admin home
      </Label>
    </Box>
    <Section>
      Welcome to your private area admin.
    </Section>
    {props.user.name}
  </Box>
);

HomeComponent.propTypes = {
  user: PropTypes.arrayOf.isRequired,
};


export default HomeComponent;
