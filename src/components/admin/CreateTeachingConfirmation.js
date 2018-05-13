import React from 'react';
import PropTypes from 'prop-types';
import { Layer, Box, Header, Heading, Footer, Button } from 'grommet';

const CreateTeachingConfirmation = props => (
  <Layer
    closer
    align="center"
    onClose={props.setLayer}
  >
    <Box
      className="LayerBox"
      direction="column"
      justify="center"
      align="center"
      separator="bottom"
    >
      <Header>
        <Heading
          align="center"
          tag="h2"
        >
          Confirmation Transaction
        </Heading>
      </Header>
      <Heading
        align="center"
        tag="h4"
      >
        Are you sure you want to send the transaction for the creation of
        the Degree Course in {props.teachingName} {props.teachingResponsible} ?
      </Heading>
      <Footer
        justify="between"
        pad={{ vertical: 'small' }}
      >
        <Box
          direction="row"
          align="center"
          pad={{ between: 'medium' }}
        >
          <Button
            label="Confirm"
            type="submit"
            primary
          />
          <Button
            label="Cancel"
            type="reset"
            primary
          />
        </Box>
      </Footer>
    </Box>
  </Layer>
);

CreateTeachingConfirmation.propTypes = {
  setLayer: PropTypes.func.isRequired,
  teachingName: PropTypes.string.isRequired,
  teachingResponsible: PropTypes.string.isRequired,
};

export default CreateTeachingConfirmation;
