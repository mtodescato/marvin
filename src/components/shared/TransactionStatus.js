import React from 'react';
import PropTypes from 'prop-types';
import { Box, Animate, Label, Button } from 'grommet';
import Checkmark from 'grommet/components/icons/base/Checkmark';
import Close from 'grommet/components/icons/base/Close';

class TransactionStatus extends React.Component {
  constructor(props) {
    super(props);

    this.onClose = this.onClose.bind(this);
  }

  onClose() {
    this.props.setStatus(false);
  }

  render() {
    return (
      <Animate
        enter={{ animation: 'slide-down', duration: 1000, delay: 0 }}
        keep
      >
        <Box colorIndex="ok" direction="row" pad="none" margin="small">
          <Box direction="row" pad={{ vertical: 'small', horizontal: 'small' }} margin="none">
            <Checkmark colorIndex="light-1" />
          </Box>
          <Box flex direction="column" margin={{ top: 'none' }} pad={{ vertical: 'small', horizontal: 'none', between: 'none' }}>
            <Label size="medium" margin="none">
              <font color="white">
                Transaction sent succesfully!
              </font>
            </Label>
            <Label size="small" margin="none">
              <font color="white">
                In order to complete the operation you now have to check your Metamask and
                manage the transaction outcome.
              </font>
            </Label>
          </Box>
          <Box pad="none" margin="none">
            <Button
              icon={<Close size="xsmall" />}
              type="submit"
              primary={false}
              onClick={this.onClose}
            />
          </Box>
        </Box>
      </Animate>
    );
  }
}

TransactionStatus.propTypes = {
  setStatus: PropTypes.func.isRequired,
};

export default TransactionStatus;
