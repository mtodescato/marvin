import React from 'react';
import PropTypes from 'prop-types';
import { Box, Layer, Form, Header, Heading, FormFields, Paragraph, Footer, Button } from 'grommet';

class CreateUserConfirmation extends React.Component {
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit() {
    const user = {
      name: this.props.userName,
      surname: this.props.userSurname,
      address: this.props.userAddress,
      role: this.props.userRole,
    };

    this.props.addUserRequest(user);
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
                Confermi creazione utente? <br />
                  {this.props.userName} <br />
                  {this.props.userSurname} <br />
                  {this.props.userAddress} <br />
                  {this.props.userRole} <br />
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
              <Button
                label="Annulla"
                type="submit"
                primary
                onClick={this.props.setLayer}
              />
            </Footer>
          </Form>
        </Box>
      </Layer>
    );
  }
}

CreateUserConfirmation.propTypes = {
  setLayer: PropTypes.func.isRequired,
  userName: PropTypes.string.isRequired,
  userSurname: PropTypes.string.isRequired,
  userAddress: PropTypes.string.isRequired,
  userRole: PropTypes.number.isRequired,
  addUserRequest: PropTypes.func.isRequired,
};

export default CreateUserConfirmation;
