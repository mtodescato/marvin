import React from 'react';
import PropTypes from 'prop-types';
import { Box, Layer, Form, Header, Heading, FormFields, Paragraph, Footer, Button } from 'grommet';

const ConfirmationComponent = props => (

  <Layer
    closer
    onClose={props.setLayer}
  >
    <Box pad="medium">
      <Form>
        <Header>
          <Heading>
              Conferma Iscrizione
          </Heading>
        </Header>
        <FormFields>
          <fieldset>
            <Paragraph>
                Confermi l iscrizione all esame {props.name} in data {props.date}?
            </Paragraph>
          </fieldset>
        </FormFields>
        <Footer pad={{ vertical: 'medium' }}>
          <Button
            label="Conferma"
            type="submit"
            primary
          />
        </Footer>
      </Form>
    </Box>
  </Layer>
);

ConfirmationComponent.propTypes = {
  setLayer: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};

export default ConfirmationComponent;
