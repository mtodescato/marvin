import React from 'react';
import PropTypes from 'prop-types';
import {
  Box,
  Label,
  Form,
  FormField,
  Button,
  Toast,
  Header,
  Heading,
  FormFields,
  Paragraph,
  TextInput,
  Select,
  Footer,
} from 'grommet';
import FormNextLinkIcon from 'grommet/components/icons/base/FormNextLink';

class CreateUser extends React.Component {
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeSurname = this.handleChangeSurname.bind(this);
    this.handleChangeAddress = this.handleChangeAddress.bind(this);
    this.handleChangeRole = this.handleChangeRole.bind(this);

    this.state = {
      name: '',
      surname: '',
      address: '0x0',
      role: 0,
      roleString: 'Student',
    };
  }

  onSubmit() {
    const user = {
      name: this.state.name,
      surname: this.state.surname,
      address: this.state.address,
      role: this.state.role,
    };
    this.props.actions.addUserRequest(user);
  }

  handleChangeName(e) {
    this.setState({ name: e.target.value });
  }

  handleChangeSurname(e) {
    this.setState({ surname: e.target.value });
  }

  handleChangeAddress(e) {
    this.setState({ address: e.target.value });
  }

  handleChangeRole(e) {
    let numberRole;
    switch (e.option) {
      case 'Student':
        numberRole = 0;
        break;
      case 'Professor':
        numberRole = 1;
        break;
      case 'University (admin)':
        numberRole = 2;
        break;
      default:
        numberRole = 0;
    }
    this.setState({
      role: numberRole,
      roleString: e.option,
    });
  }

  render() {
    return (
      <div>
        {this.props.state.isSuccess === true && (
          <Toast status="ok">
            <strong>User SignUp correctly</strong>
          </Toast>
        )}
        {this.props.state.isFailed === true && (
          <Toast status="critical">
            <strong>User SignUp error: &quot;Transaction rejected&quot;</strong>
          </Toast>
        )}
        <Box
          classname="PanelBox"
          direction="column"
          margin="small"
        >
          <Box
            classname="PanelHeader"
            direction="row"
            justify="start"
            align="center"
            separator="horizontal"
          >
            <FormNextLinkIcon />
            <Label>
                Manage Users
            </Label>
            <FormNextLinkIcon />
            <Label>
                Create User
            </Label>
          </Box>
          <Box
            classname="PanelForm"
            direction="row"
            justify="center"
            align="center"
            separator="bottom"
          >
            <Form>
              <Header>
                <Heading
                  align="center"
                  tag="h2"
                >
                    New user creation
                </Heading>
              </Header>
              <FormFields>
                <Paragraph>
                  Submit the info of the new user.
                </Paragraph>
                <FormField label="Name:">
                  <TextInput
                    id="name"
                    name="Name"
                    placeHolder="Mario"
                    onDOMChange={this.handleChangeName}
                  />
                </FormField>
                <FormField label="Surname:">
                  <TextInput
                    id="surname"
                    name="Surname"
                    placeHolder="Rossi"
                    onDOMChange={this.handleChangeSurname}
                  />
                </FormField>
                <FormField label="Address:">
                  <TextInput
                    id="address"
                    name="Address"
                    placeHolder="0x0"
                    onDOMChange={this.handleChangeAddress}
                  />
                </FormField>
                <FormField label="Role:">
                  <Select
                    id="role"
                    options={['Student', 'Professor', 'University (admin)']}
                    value={this.state.roleString}
                    onChange={this.handleChangeRole}
                  />
                </FormField>
              </FormFields>
              <Footer pad={{ vertical: 'medium' }}>
                <Button
                  label="Submit"
                  primary
                  onClick={this.onSubmit}
                />
              </Footer>
            </Form>
          </Box>
        </Box>
      </div>
    );
  }
}
CreateUser.propTypes = {
  actions: PropTypes.shape({
    addUserRequest: PropTypes.func.isRequired,
  }).isRequired,
  state: PropTypes.shape({
    isSuccess: PropTypes.bool.isRequired,
    isFailed: PropTypes.bool.isRequired,
  }).isRequired,
};

export default CreateUser;