import React from 'react';
import PropTypes from 'prop-types';
import { Box, Layer, Header, Heading, Paragraph, Footer, Button/* ,List, ListItem, Label */ } from 'grommet';

class RequestResultConfirmation extends React.Component {
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit() {
    // this.props.manageDPRequest();
    this.props.setLayer();
  }

  render() {
    return (
      <Layer
        overlayClose
        onClose={this.props.setLayer}
        align="center"
        flush
      >
        <Box
          pad={{ vertical: 'small', horizontal: 'small' }}
        >
          <Header
            colorIndex="brand"
            justify="center"
            full="horizontal"
            pad={{ vertical: 'none', horizontal: 'none', between: 'medium' }}
          >
            <Heading tag="h3" strong>
                Handle Degree Request
            </Heading>
          </Header>

          <Box
            justify="center"
            size={{ width: { max: 'medium' } }}
            pad={{ vertical: 'small', horizontal: 'small' }}
          >
            <Paragraph margin="none" align="center">
                TODO
                  Are you sure you want to send the transaction?
            </Paragraph>
          </Box>

          <Footer
            justify="center"
            align="center"
            pad={{ horizontal: 'none', vertical: 'small', between: 'medium' }}
            direction="row"
          >
            <Button
              label="Accept"
              type="submit"
              primary
              onClick={this.onAccept}
            />
            <Button
              label="Reject"
              type="submit"
              primary
              onClick={this.onReject}
            />
          </Footer>
        </Box>
      </Layer>
    );
  }
}

RequestResultConfirmation.propTypes = {
  setLayer: PropTypes.func.isRequired,
  /* userName: PropTypes.string.isRequired,
  userSurname: PropTypes.string.isRequired,
  userAddress: PropTypes.string.isRequired,
  userRole: PropTypes.number.isRequired,
  manageDPRequest: PropTypes.func.isRequired, */
};

export default RequestResultConfirmation;
