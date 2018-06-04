import React from 'react';
import PropTypes from 'prop-types';
import { Box, Layer, Header, Heading, Paragraph, Footer, Button, List, ListItem, Label } from 'grommet';

class ConfirmationDelete extends React.Component {
  constructor(props) {
    super(props);

    this.onDelete = this.onDelete.bind(this);
  }

  onDelete() {
    this.props.deleteAction(this.props.userAddress);
    this.props.setStatus(true);
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
                Delete user confirmation
            </Heading>
          </Header>

          <Box
            justify="center"
            size={{ width: { max: 'medium' } }}
            pad={{ vertical: 'small', horizontal: 'small' }}
          >
            <Paragraph margin="none" align="center">
                  Are you sure you want to send the transaction to delete the user?
            </Paragraph>
          </Box>

          <Box pad={{ vertical: 'none', horizontal: 'none' }} colorIndex="light-2" separator="all">
            <List >
              <ListItem
                justify="between"
                separator="bottom"
                pad={{ vertical: 'none', horizontal: 'small', between: 'medium' }}
                margin="none"
              >
                <Heading tag="h5" margin="none" strong>
                Name:
                </Heading>
                <Heading tag="h5" margin="none">
                  {this.props.userName}
                </Heading>
              </ListItem>
              <ListItem
                justify="between"
                separator="bottom"
                pad={{ vertical: 'none', horizontal: 'small', between: 'medium' }}
                margin="none"
              >
                <Heading tag="h5" margin="none" strong>
                  Surname:
                </Heading>
                <Heading tag="h5" margin="none">
                  {this.props.userSurname}
                </Heading>
              </ListItem>
              <ListItem
                justify="between"
                separator="bottom"
                pad={{ vertical: 'none', horizontal: 'small', between: 'medium' }}
                margin="none"
              >
                <Heading tag="h5" margin="none" strong>
                  Address:
                </Heading>
                <Label size="small">
                  {this.props.userAddress}
                </Label>
              </ListItem>
              <ListItem
                justify="between"
                separator="none"
                pad={{ vertical: 'none', horizontal: 'small', between: 'medium' }}
                margin="none"
              >
                <Heading tag="h5" margin="none" strong>
                  Role:
                </Heading>
                <Heading tag="h5" margin="none">
                  {this.props.userRole === 2 ? 'Admin' : null}
                  {this.props.userRole === 1 ? 'Professor' : null}
                  {this.props.userRole === 0 ? 'Student' : null}
                </Heading>
              </ListItem>
            </List>
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
              onClick={this.onDelete}
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

ConfirmationDelete.propTypes = {
  setLayer: PropTypes.func.isRequired,
  setStatus: PropTypes.func.isRequired,
  userName: PropTypes.string.isRequired,
  userSurname: PropTypes.string.isRequired,
  userAddress: PropTypes.string.isRequired,
  userRole: PropTypes.number.isRequired,
  deleteAction: PropTypes.func.isRequired,
};

export default ConfirmationDelete;
