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
                Delete user confirmation
            </Heading>
          </Header>
          <Paragraph margin="small" align="center">
                Are you sure you want to delete the user?
          </Paragraph>
          <Box pad={{ vertical: 'small', horizontal: 'none' }}>
            <List >
              <ListItem
                justify="between"
                separator="bottom"
                pad={{ vertical: 'none', horizontal: 'small', between: 'medium' }}
                margin="none"
              >
                <Heading tag="h4" margin="none">
                Name:
                </Heading>
                <Heading tag="h4" margin="none">
                  {this.props.userName}
                </Heading>
              </ListItem>
              <ListItem
                justify="between"
                separator="bottom"
                pad={{ vertical: 'none', horizontal: 'small', between: 'medium' }}
                margin="none"
              >
                <Heading tag="h4" margin="none">
                Surname:
                </Heading>
                <Heading tag="h4" margin="none">
                  {this.props.userSurname}
                </Heading>
              </ListItem>
              <ListItem
                justify="between"
                separator="bottom"
                pad={{ vertical: 'none', horizontal: 'small', between: 'medium' }}
                margin="none"
              >
                <Heading tag="h4" margin="none">
                Address:
                </Heading>
                <Label size="small">
                  {this.props.userAddress}
                </Label>
              </ListItem>
              <ListItem
                justify="between"
                separator="bottom"
                pad={{ vertical: 'none', horizontal: 'small', between: 'medium' }}
                margin="none"
              >
                <Heading tag="h4" margin="none">
                Role:
                </Heading>
                <Heading tag="h4" margin="none">
                  {this.props.userRole}
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
  userName: PropTypes.string.isRequired,
  userSurname: PropTypes.string.isRequired,
  userAddress: PropTypes.string.isRequired,
  userRole: PropTypes.number.isRequired,
  deleteAction: PropTypes.func.isRequired,
};

export default ConfirmationDelete;
