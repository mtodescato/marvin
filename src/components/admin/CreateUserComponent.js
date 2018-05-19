import React from 'react';
import PropTypes from 'prop-types';
import {
  Box,
  Label,
  Form,
  FormField,
  Button,
  Toast,
  Heading,
  FormFields,
  TextInput,
  Select,
  Footer,
} from 'grommet';
import FormNextLinkIcon from 'grommet/components/icons/base/FormNextLink';
import Checkmark from 'grommet/components/icons/base/Checkmark';
import { stringFormValidation, addressValidation } from '../formValidator';
import CreateUserConfirmation from './CreateUserConfirmation';


class CreateUserComponent extends React.Component {
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);

    this.handleValidation = this.handleValidation.bind(this);

    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeSurname = this.handleChangeSurname.bind(this);
    this.handleChangeAddress = this.handleChangeAddress.bind(this);
    this.handleChangeRole = this.handleChangeRole.bind(this);

    this.setLayer = this.setLayer.bind(this);

    this.state = {
      name: '',
      surname: '',
      address: '0x0',
      role: 0,
      roleString: 'Student',
      errors: {
        name: '',
        surname: '',
        address: '',
        formIsValid: false,
      },
      showLayer: false,
    };
  }

  onSubmit(e) {
    if (this.handleValidation()) {
      this.setLayer();
      /*
      const user = {
        name: this.state.name,
        surname: this.state.surname,
        address: this.state.address,
        role: this.state.role,
      };
      this.props.actions.addUserRequest(user); */
    } else {
      e.preventDefault();
    }
  }

  setLayer() {
    this.setState({
      showLayer: !this.state.showLayer,
    });
  }

  handleValidation() {
    const errors = Object.assign({}, this.state.errors);

    if ((errors.name === 'isValid'
          && errors.surname === 'isValid'
          && errors.address === 'isValid')) {
      errors.formIsValid = true;
    } else errors.formIsValid = false;

    this.setState({ errors });
    return this.state.errors.formIsValid;
  }

  handleChangeName(e) {
    const errors = Object.assign({}, this.state.errors);

    errors.name = stringFormValidation(e.target.value);

    this.setState({ name: e.target.value });
    this.setState({ errors });
  }

  handleChangeSurname(e) {
    const errors = Object.assign({}, this.state.errors);

    errors.surname = stringFormValidation(e.target.value);

    this.setState({ surname: e.target.value });
    this.setState({ errors });
  }

  handleChangeAddress(e) {
    const errors = Object.assign({}, this.state.errors);

    errors.address = addressValidation(e.target.value);
    this.setState({ address: e.target.value });

    // 0xD915Bb5FCf25ff607f852fA77822DFc757aBd9bA

    this.setState({ errors });
  }

  handleChangeRole(e) {
    switch (e.option) {
      case 'Student':
        this.setState({ role: '0' });
        break;
      case 'Professor':
        this.setState({ role: '1' });
        break;
      case 'University (admin)':
        this.setState({ role: '2' });
        break;
      default:
        this.setState({ role: '0' });
    }
    this.setState({ roleString: e.option });
  }

  render() {
    return (
      <div>
        {this.props.state.status === 'RESOLVED' && (
          <Toast status="ok">
            <strong>User Signed Up correctly</strong>
          </Toast>
        )}
        {this.props.state.status === 'ERRORED' && (
          <Toast status="critical">
            <strong>User SignUp error: &quot;Transaction rejected&quot;</strong>
          </Toast>
        )}
        <Box
          className="PanelBox"
          direction="column"
          margin="small"
          separator="bottom"
        >
          <Box
            className="PanelHeader"
            direction="row"
            justify="start"
            align="center"
            separator="bottom"
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

          <Box className="titleBox" alignSelf="center" >
            <Heading tag="h2" strong>
              New user creation
            </Heading>
          </Box>

          <Box
            className="formBox"
            direction="column"
            justify="start"
            separator="bottom"
            pad={{ horizontal: 'medium' }}
          >
            <Heading tag="h5" >
              Submit the informations of the new user.
            </Heading>
            <Form>
              <FormFields>
                <FormField>
                  <Box
                    direction="row"
                    pad={{ vertical: 'none', horizontal: 'small', between: 'large' }}
                    margin="none"
                  >
                    <Label size="small">
                      Name:
                    </Label>
                    {this.state.errors.name !== 'isValid' ?
                      <Label size="small">
                        <span style={{ color: 'red' }}>{this.state.errors.name}</span>
                      </Label> : null
                    }
                    {this.state.errors.name === 'isValid' ?
                      <Checkmark colorIndex="ok" /> : null
                    }
                  </Box>
                  <TextInput
                    id="name"
                    name="Name"
                    placeHolder="Mario"
                    onDOMChange={this.handleChangeName}
                  />
                </FormField>

                <FormField>
                  <Box
                    direction="row"
                    pad={{ vertical: 'none', horizontal: 'small', between: 'large' }}
                    margin="none"
                  >
                    <Label size="small">
                      Surname:
                    </Label>
                    {this.state.errors.surname !== 'isValid' ?
                      <Label size="small">
                        <span style={{ color: 'red' }}>{this.state.errors.surname}</span>
                      </Label> : null
                    }
                    {this.state.errors.surname === 'isValid' ?
                      <Checkmark colorIndex="ok" /> : null
                    }
                  </Box>
                  <TextInput
                    id="surname"
                    name="Surname"
                    placeHolder="Rossi"
                    onDOMChange={this.handleChangeSurname}
                  />
                </FormField>
                <FormField>
                  <Box
                    direction="row"
                    pad={{ vertical: 'none', horizontal: 'small', between: 'large' }}
                    margin="none"
                  >
                    <Label size="small">
                      Address:
                    </Label>
                    {this.state.errors.address !== 'isValid' ?
                      <Label size="small">
                        <span style={{ color: 'red' }}>{this.state.errors.address}</span>
                      </Label> : null
                    }
                    {this.state.errors.address === 'isValid' ?
                      <Checkmark colorIndex="ok" /> : null
                    }
                  </Box>
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
            </Form>

            <Footer pad={{ vertical: 'medium' }}>
              <Button
                label="Submit"
                primary
                onClick={this.onSubmit}
              />
              {!this.state.errors.formIsValid ?
                  'no valid' : null
                }
              {this.state.showLayer ?
                <CreateUserConfirmation
                  setLayer={this.setLayer}
                  userName={this.state.name}
                  userSurname={this.state.surname}
                  userAddress={this.state.address}
                  userRole={this.state.role}
                  addUserRequest={this.props.actions.addUserRequest}
                  state={this.props.state}
                />
                      : null
                    }
            </Footer>
          </Box>
        </Box>
      </div>
    );
  }
}

CreateUserComponent.propTypes = {
  actions: PropTypes.shape({
    addUserRequest: PropTypes.func.isRequired,
  }).isRequired,
  state: PropTypes.shape({
    status: PropTypes.string.isRequired,
  }).isRequired,
};

export default CreateUserComponent;
