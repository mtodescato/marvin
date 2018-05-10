import React from 'react';
import PropTypes from 'prop-types';
import { Box, Layer, Form, Header, Heading, FormFields, Paragraph, Footer, Button } from 'grommet';

const ConfirmationResult = props => (

  <Layer
    closer
    onClose={() => props.setLayer('undefined')}
  >
    <Box pad="medium">
      <Form>
        <Header>
          <Heading>
            {props.action === 'a' ? 'Accettazione' : 'Rifiuto' }
          </Heading>
        </Header>
        <FormFields>
          <fieldset>
            <Paragraph>
              {props.action === 'a' ? 'Accetti' : 'Rifiuti' } il voto {props.result} di {props.name} in data {props.date}?
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

ConfirmationResult.propTypes = {
  setLayer: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  result: PropTypes.number.isRequired,
  action: PropTypes.string.isRequired,
};

export default ConfirmationResult;
