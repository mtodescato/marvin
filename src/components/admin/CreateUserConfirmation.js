import React from 'react';
import PropTypes from 'prop-types';
import { Box, Layer, Header, Heading, Paragraph, Footer, Button, List, ListItem, Label } from 'grommet';

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
                    Are you sure you want to send the transaction to create the user?
            </Paragraph>
          </Box>

          <Box pad={{ vertical: 'none', horizontal: 'none' }}>
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
  userName: PropTypes.string.isRequired,
  userSurname: PropTypes.string.isRequired,
  userAddress: PropTypes.string.isRequired,
  userRole: PropTypes.number.isRequired,
  addUserRequest: PropTypes.func.isRequired,
};

export default CreateUserConfirmation;
