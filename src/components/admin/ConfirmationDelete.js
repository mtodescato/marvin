import React from 'react';
import PropTypes from 'prop-types';
import { Box, Layer, Form, Header, Heading, FormFields, Paragraph, Footer, Button } from 'grommet';

class ConfirmationDelete extends React.Component {
  constructor(props) {
    super(props);

    this.onDelete = this.onDelete.bind(this);
  }

  onDelete() {
    this.props.deleteAction(this.props.userAddress);
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
                Delete user confirmation
              </Heading>
            </Header>
            <FormFields>
              <fieldset>
                <Paragraph>
                Are you sure you want to delete the user: <br />
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
                onClick={this.onDelete}
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

ConfirmationDelete.propTypes = {
  setLayer: PropTypes.func.isRequired,
  userName: PropTypes.string.isRequired,
  userSurname: PropTypes.string.isRequired,
  userAddress: PropTypes.string.isRequired,
  userRole: PropTypes.number.isRequired,
  deleteAction: PropTypes.func.isRequired,
};

export default ConfirmationDelete;
