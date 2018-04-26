import React from 'react';
import PropTypes from 'prop-types';
import { Box, Layer, Form, Header, Heading, FormFields, Paragraph, Footer, Button } from 'grommet/components/Box';


class ConfirmationComponent extends React.Component {
  render() {
    return (<Layer
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
                Confermi l iscrizione al corso di laurea in
                {this.props.courseName}
                {this.props.courseYear}
                ?
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
ConfirmationComponent.propTypes = {
  setLayer: PropTypes.func.isRequired,
  courseName: PropTypes.string.isRequired,
  courseYear: PropTypes.string.isRequired,
};

export default ConfirmationComponent;
