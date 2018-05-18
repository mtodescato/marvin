import React from 'react';
import PropTypes from 'prop-types';
import { Box, Layer, Header, Heading, Paragraph, Footer, Button } from 'grommet';

class CreateUserConfirmation extends React.Component {
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit() {
    // this.props.addYearRequest(this.props.year);
    this.props.setLayer();
  }

  render() {
    return (
      <Layer
        closer
        onClose={this.props.setLayer}
        align="center"
        flush
      >
        <Box
          pad={{ vertical: 'small', horizontal: 'small' }}
        >
          <Header
            colorIndex="light-2"
            justify="center"
            full="horizontal"
            pad={{ vertical: 'none', horizontal: 'none', between: 'medium' }}
          >
            <Heading tag="h3" strong>
                Create user confirmation
            </Heading>
          </Header>

          <Box
            justify="center"
            size={{ width: { max: 'medium' } }}
            pad={{ vertical: 'small', horizontal: 'small' }}
          >
            <Paragraph margin="none" align="center">
                    Are you sure you want to send the transaction to create
              {this.props.year} academic year?
            </Paragraph>
          </Box>


          <Footer
            justify="center"
            align="center"
            pad={{ horizontal: 'none', vertical: 'small', between: 'medium' }}
            direction="row"
          >
            <Button
              label="Confirm"
              type="submit"
              primary
              onClick={this.onSubmit}
            />
            <Button
              label="Cancel"
              type="submit"
              primary
              onClick={this.props.setLayer}
            />
          </Footer>
        </Box>
      </Layer>
    );
  }
}

CreateUserConfirmation.propTypes = {
  setLayer: PropTypes.func.isRequired,
  year: PropTypes.number.isRequired,
  // addYearRequest: PropTypes.func.isRequired,
};

export default CreateUserConfirmation;
