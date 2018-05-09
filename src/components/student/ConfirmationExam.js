import React from 'react';
import PropTypes from 'prop-types';
import { Box, Layer, Form, Header, Heading, FormFields, Paragraph, Footer, Button } from 'grommet';

class ConfirmationExam extends React.Component {
  onSubmit() {
    this.props.subscribeToExam(this.props.address, this.props.name);
  }
  render() {
    return (
      <Layer
        closer
        onClose={this.props.setLayer}
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
                Confermi l iscrizione all esame {this.props.name} in data {this.props.date}?
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
  }
}

ConfirmationExam.propTypes = {
  setLayer: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  subscribeToExam: PropTypes.func.isRequired,
  address: PropTypes.string.isRequired,
};

export default ConfirmationExam;
