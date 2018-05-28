import React from 'react';
import { Box, Animate, Label, Anchor, Image } from 'grommet';
import Checkmark from 'grommet/components/icons/base/Checkmark';
import Close from 'grommet/components/icons/base/Close';

class TransactionStatus extends React.Component {
  constructor(props) {
    super(props);

    this.onClose = this.onClose.bind(this);

    this.state = {
      showNotification: true,
    };
  }

  onClose() {
    this.setState({ showNotification: !this.state.showNotification });
  }
  
  render() {
    switch (this.state.showNotification) {
      case true:
        return (
          <Animate
            enter={{ animation: 'slide-down', duration: 1000, delay: 0 }}
            keep
          >
            <Box colorIndex="ok" direction="row" pad="none" margin="small">
              <Box direction="row" pad={{ vertical: 'small', horizontal: 'small' }} margin="none">
                <Checkmark colorIndex="light-1" />
              </Box>
              <Box flex direction="column" margin={{ top: 'small' }} pad={{ vertical: 'small', horizontal: 'none', between: 'none' }}>
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
              <Box
                direction="row"
                pad={{ vertical: 'none', horizontal: 'none' }}
                margin={{ top: 'small', right: 'small' }}
              >
                <Anchor
                  icon={<Close size="xsmall" />}
                  primary={false}
                  onClick={() => this.onClose()}
                />
              </Box>
            </Box>
          </Animate>
        );
      case false:
        return null;
      default:
        return null;
    }
  }
}

export default TransactionStatus;
