import React from 'react';
import PropTypes from 'prop-types';
import {
  Box,
  Label,
  Form,
  FormField,
  Button,
  Heading,
  FormFields,
  TextInput,
  Select,
  Footer,
} from 'grommet';
import Checkmark from 'grommet/components/icons/base/Checkmark';
import { stringFormValidation, addressValidation, selectValidation } from '../formValidator';
import CreateUserConfirmation from './CreateUserConfirmation';
import TransactionStatus from '../../components/shared/TransactionStatus';

export const selectEntries = [{
  role: 0,
  label: 'Student',
},
{
  role: 1,
  label: 'Professor',
},
{
  role: 2,
  label: 'University (admin)',
},
];

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
    this.setStatus = this.setStatus.bind(this);
    this.resetState = this.resetState.bind(this);

    this.state = {
      name: '',
      surname: '',
      address: '',
      role: 0,
      roleString: '',
      errors: {
        name: '',
        surname: '',
        address: '',
        role: '',
        formIsValid: false,
      },
      showLayer: false,
      showStatus: false,
    };

    this.defaultState = this.state;
  }

  onSubmit(e) {
    if (this.state.errors.formIsValid) {
      this.setLayer();
    } else e.preventDefault();
  }

  setLayer() {
    this.setState({
      showLayer: !this.state.showLayer,
    });
  }

  setStatus(e) {
    this.setState({
      showStatus: e,
    });
  }

  resetState() {
    this.setState(this.defaultState);
  }

  handleValidation(errors) {
    const newLocal = this.state.errors.formIsValid;
    let formIsValid = newLocal;

    if ((errors.name === 'isValid'
    && errors.surname === 'isValid'
    && errors.address === 'isValid'
    && errors.role === 'isValid')) {
      formIsValid = true;
      return formIsValid;
    }
    return false;
  }

  handleChangeName(e) {
    const errors = Object.assign({}, this.state.errors);

    errors.name = stringFormValidation(e.target.value);
    errors.formIsValid = this.handleValidation(errors);

    this.setState({
      name: e.target.value,
      errors,
    });
  }

  handleChangeSurname(e) {
    const errors = Object.assign({}, this.state.errors);

    errors.surname = stringFormValidation(e.target.value);
    errors.formIsValid = this.handleValidation(errors);

    this.setState({
      surname: e.target.value,
      errors,
    });
  }


  handleChangeAddress(e) {
    const errors = Object.assign({}, this.state.errors);

    errors.address = addressValidation(e.target.value);
    errors.formIsValid = this.handleValidation(errors);

    this.setState({
      address: e.target.value,
      errors,
    });
  }

  handleChangeRole(e) {
    const errors = Object.assign({}, this.state.errors);

    errors.role = selectValidation(e.value.label);
    errors.formIsValid = this.handleValidation(errors);

    this.setState({
      role: e.value.role,
      roleString: e.value.label,
      errors,
    });
  }

  render() {
    return (
      <div>
        <Box className="PanelBox" direction="column" margin="small" separator="bottom" >
          <Box className="titleBox" align="center" alignSelf="center" colorIndex="brand" full="horizontal" >
            <Heading tag="h2" strong>
              New user creation
            </Heading>
          </Box>

          <Box className="infoBox" pad={{ horizontal: 'medium', vertical: 'small' }} >
            <Heading tag="h5" >
              This page allows you to create and add users into the system. In order to send
              the transaction to complete the creation operation you
              must fill all the fields below with the user informations.
            </Heading>
          </Box>

          {(this.props.statusAddUserRequest === 'PENDING' || this.props.statusAddUserRequest === 'RESOLVED' ||
            this.props.statusAddUserRequest === 'ERRORED') && this.state.showStatus ?
              <TransactionStatus setStatus={this.setStatus} /> : null
          }

          <Box
            className="formBox"
            direction="column"
            separator="horizontal"
            pad={{ horizontal: 'medium', vertical: 'small', between: 'small' }}
            align="center"
            alignSelf="center"
            colorIndex="light-2"
            full="horizontal"
          >
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
                    value={this.state.name}
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
                    value={this.state.surname}
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
                    value={this.state.address}
                    onDOMChange={this.handleChangeAddress}
                  />
                </FormField>

                <FormField>
                  <Box
                    direction="row"
                    pad={{ vertical: 'none', horizontal: 'small', between: 'large' }}
                    margin="none"
                  >
                    <Label size="small">
                      Role:
                    </Label>
                    {this.state.errors.role !== 'isValid' ?
                      <Label size="small">
                        <span style={{ color: 'red' }}>{this.state.errors.role}</span>
                      </Label> : null
                    }
                    {this.state.errors.role === 'isValid' ?
                      <Checkmark colorIndex="ok" /> : null
                    }
                  </Box>
                  <Select
                    id="role"
                    name="Role"
                    placeHolder="Student"
                    options={selectEntries}
                    value={this.state.roleString}
                    onChange={this.handleChangeRole}
                  />
                </FormField>
              </FormFields>
            </Form>

            <Footer justify="center" align="center" pad={{ horizontal: 'none' }} direction="row" >
              <Button
                label="Submit"
                primary
                onClick={this.state.errors.formIsValid ? this.onSubmit : null}
              />
              {this.state.showLayer ?
                <CreateUserConfirmation
                  setLayer={this.setLayer}
                  userName={this.state.name}
                  userSurname={this.state.surname}
                  userAddress={this.state.address}
                  userRole={this.state.role}
                  addUserRequest={this.props.actions.addUserRequest}
                  status={this.props.statusAddUserRequest}
                  setStatus={this.setStatus}
                  resetState={this.resetState}
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
  statusAddUserRequest: PropTypes.string.isRequired,
};

export default CreateUserComponent;
