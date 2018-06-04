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
import { stringFormValidation, selectValidation, yearValidation } from '../formValidator';
import CreateCourseConfirmation from './CreateCourseConfirmation';
import TransactionStatus from '../../components/shared/TransactionStatus';

export const typeEntries = [
  { type: 0, label: 'Bachelor\'s' },
  { type: 1, label: 'Master\'s' },
];

class CreateCourseComponent extends React.Component {
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);

    this.handleValidation = this.handleValidation.bind(this);

    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangePresident = this.handleChangePresident.bind(this);
    this.handleChangeType = this.handleChangeType.bind(this);
    this.handleChangeAcademicYear = this.handleChangeAcademicYear.bind(this);

    this.setLayer = this.setLayer.bind(this);
    this.setStatus = this.setStatus.bind(this);
    this.resetState = this.resetState.bind(this);

    this.state = {
      name: '',
      president: '',
      type: 0,
      typeString: '',
      academicYear: 2018,
      errors: {
        name: '',
        president: '',
        type: '',
        year: '',
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

  setStatus(e) {
    this.setState({
      showStatus: e,
    });
  }

  setLayer() {
    this.setState({
      showLayer: !this.state.showLayer,
    });
  }

  resetState() {
    this.setState(this.defaultState);
  }

  handleValidation(errors) {
    const newLocal = this.state.errors.formIsValid;
    let formIsValid = newLocal;

    if ((errors.name === 'isValid'
          && errors.president === 'isValid'
          && errors.type === 'isValid'
          && errors.year === 'isValid'
    )) {
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

  handleChangeType(e) {
    const errors = Object.assign({}, this.state.errors);

    errors.type = selectValidation(e.value.label);
    errors.formIsValid = this.handleValidation(errors);

    this.setState({
      type: e.value.type,
      typeString: e.value.label,
      errors,
    });
  }

  handleChangePresident(e) {
    const errors = Object.assign({}, this.state.errors);

    errors.president = stringFormValidation(e.target.value);
    errors.formIsValid = this.handleValidation(errors);

    this.setState({
      president: e.target.value,
      errors,
    });
  }

  handleChangeAcademicYear(e) {
    const errors = Object.assign({}, this.state.errors);

    errors.year = yearValidation(e.target.value);

    if ((errors.year === 'isValid')) {
      errors.formIsValid = true;
    } else errors.formIsValid = false;

    this.setState({
      academicYear: e.target.value,
      errors,
    });
  }

  render() {
    return (
      <Box className="PanelBox" direction="column" margin="small" separator="bottom" >
        <Box className="titleBox" align="center" alignSelf="center" colorIndex="brand" full="horizontal" >
          <Heading tag="h2" strong>
              New course creation
          </Heading>
        </Box>

        <Box className="infoBox" pad={{ horizontal: 'medium', vertical: 'small' }} >
          <Heading tag="h5" >
              This page allows you to create and add study courses into the system. In order to send
              the transaction to complete the creation operation you
              must fill all the fields below with the course informations.
          </Heading>
        </Box>

        {(this.props.statusAddCourseRequest === 'PENDING' || this.props.statusAddCourseRequest === 'RESOLVED' ||
          this.props.statusAddCourseRequest === 'ERRORED') && this.state.showStatus ?
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
                  placeHolder="Informatica"
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
                        President:
                  </Label>
                  {this.state.errors.president !== 'isValid' ?
                    <Label size="small">
                      <span style={{ color: 'red' }}>{this.state.errors.president}</span>
                    </Label> : null
                      }
                  {this.state.errors.president === 'isValid' ?
                    <Checkmark colorIndex="ok" /> : null
                      }
                </Box>
                <TextInput
                  id="president"
                  name="President"
                  value={this.state.president}
                  placeHolder="Mario Rossi"
                  onDOMChange={this.handleChangePresident}
                />
              </FormField>
              <FormField>
                <Box
                  direction="row"
                  pad={{ vertical: 'none', horizontal: 'small', between: 'large' }}
                  margin="none"
                >
                  <Label size="small">
                      Degree Type:
                  </Label>
                  {this.state.errors.type !== 'isValid' ?
                    <Label size="small">
                      <span style={{ color: 'red' }}>{this.state.errors.type}</span>
                    </Label> : null
                    }
                  {this.state.errors.type === 'isValid' ?
                    <Checkmark colorIndex="ok" /> : null
                    }
                </Box>
                <Select
                  id="type"
                  placeHolder="Bachelor's"
                  options={typeEntries}
                  value={this.state.typeString}
                  onChange={this.handleChangeType}
                />
              </FormField>
              <FormField >
                <Box
                  direction="row"
                  pad={{ vertical: 'none', horizontal: 'small', between: 'large' }}
                  margin="none"
                >
                  <Label size="small">
                      Academic Year:
                  </Label>
                  {this.state.errors.year !== 'isValid' ?
                    <Label size="small">
                      <span style={{ color: 'red' }}>{this.state.errors.year}</span>
                    </Label> : null
                    }
                  {this.state.errors.year === 'isValid' ?
                    <Checkmark colorIndex="ok" /> : null
                    }
                </Box>
                <TextInput
                  id="academicYear"
                  name="Name"
                  placeHolder="2018"
                  onDOMChange={this.handleChangeAcademicYear}
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
              <CreateCourseConfirmation
                setLayer={this.setLayer}
                courseName={this.state.name}
                coursePresident={this.state.president}
                courseType={this.state.type}
                courseYear={this.state.academicYear}
                addCourseRequest={this.props.actions.addCourseRequest}
                status={this.props.statusAddCourseRequest}
                setStatus={this.setStatus}
                resetState={this.resetState}
              /> : null
                  }
          </Footer>
        </Box>
      </Box>
    );
  }
}
CreateCourseComponent.propTypes = {
  actions: PropTypes.shape({
    addCourseRequest: PropTypes.func.isRequired,
  }).isRequired,
  statusAddCourseRequest: PropTypes.string.isRequired,
};

export default CreateCourseComponent;
