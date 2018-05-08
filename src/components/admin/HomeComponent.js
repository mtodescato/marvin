import React from 'react';
import { Section, Accordion, AccordionPanel, Box, Label } from 'grommet';
import FormNextLinkIcon from 'grommet/components/icons/base/FormNextLink';

const Home = () => (
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
    <Accordion>
      <AccordionPanel heading="Personal Details" >
        TODO
      </AccordionPanel>
    </Accordion>
  </Box>
);

export default Home;
