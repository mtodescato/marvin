import React from 'react';
import PropTypes from 'prop-types';
import { Box, Layer, Form, Header, Heading, FormFields, Paragraph, Footer, Button } from 'grommet';

class ConfirmationComponent extends React.Component {
  onSubmit() {
    this.props.subscribeToCourse(this.props.address, this.props.courseName);
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
                Confermi l iscrizione al corso di laurea in {this.props.courseName} ?
                </Paragraph>
              </fieldset>
            </FormFields>
            <Footer pad={{ vertical: 'medium' }}>
              <Button
                label="Conferma"
                type="submit"
                primary
                onClick={this.onSubmit}
              />
            </Footer>
          </Form>
        </Box>
      </Layer>
    );
  }
}

ConfirmationComponent.propTypes = {
  setLayer: PropTypes.func.isRequired,
  courseName: PropTypes.string.isRequired,
  subscribeToCourse: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,

};

export default ConfirmationComponent;
