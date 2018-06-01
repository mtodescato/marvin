import React from 'react';
import PropTypes from 'prop-types';
import {
  Box,
  Label,
  Form,
  FormField,
  Button,
  // Toast,
  Heading,
  FormFields,
  TextInput,
  Footer,
  Select,
} from 'grommet';
import Checkmark from 'grommet/components/icons/base/Checkmark';
import CreateTeachingConfirmation from './CreateTeachingConfirmation';
import TransactionStatus from '../../components/shared/TransactionStatus';
import { stringFormValidation, selectValidation } from '../formValidator';

class CreateTeachingComponent extends React.Component {
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);

    this.handleValidation = this.handleValidation.bind(this);

    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeResponsible = this.handleChangeResponsible.bind(this);
    this.handleChangeCourse = this.handleChangeCourse.bind(this);

    this.setLayer = this.setLayer.bind(this);
    this.setStatus = this.setStatus.bind(this);
    this.resetState = this.resetState.bind(this);

    this.state = {
      name: '',
      course: '',
      courseRef: '',
      responsible: '',
      responsibleRef: '',
      errors: {
        name: '',
        responsible: '',
        course: '',
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

    if ((errors.name === 'isValid' && errors.course === 'isValid' && errors.responsible === 'isValid')) {
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

  handleChangeResponsible(e) {
    const errors = Object.assign({}, this.state.errors);

    errors.responsible = selectValidation(e.value.label);
    errors.formIsValid = this.handleValidation(errors);

    this.setState({
      responsible: e.value.label,
      responsibleRef: e.value.value,
      errors,
    });
  }

  handleChangeCourse(e) {
    const errors = Object.assign({}, this.state.errors);

    errors.course = selectValidation(e.value.label);
    errors.formIsValid = this.handleValidation(errors);

    this.setState({
      course: e.value.label,
      courseRef: e.value.value,
      errors,
    });
  }

  render() {
    return (
      <Box className="PanelBox" direction="column" margin="small" separator="bottom" >
        <Box className="titleBox" align="center" alignSelf="center" colorIndex="brand" full="horizontal" >
          <Heading tag="h2" strong>
              New teaching creation
          </Heading>
        </Box>

        <Box className="infoBox" pad={{ horizontal: 'medium', vertical: 'small' }} >
          <Heading tag="h5" >
              This page allows you to create and add teachings into the system. In order to send
              the transaction to complete the creation operation you
              must fill all the fields below with the teaching informations.
          </Heading>
        </Box>

        {(this.props.statusAddTeachingRequest === 'PENDING' || this.props.statusAddTeachingRequest === 'RESOLVED' ||
          this.props.statusAddTeachingRequest === 'ERRORED') && this.state.showStatus ?
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
                  placeHolder="Basi di dati"
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
                      Professor in charge:
                  </Label>
                  {this.state.errors.responsible !== 'isValid' ?
                    <Label size="small">
                      <span style={{ color: 'red' }}>{this.state.errors.responsible}</span>
                    </Label> : null
                    }
                  {this.state.errors.responsible === 'isValid' ?
                    <Checkmark colorIndex="ok" /> : null
                    }
                </Box>
                <Select
                  id="responsible"
                  name="Responsible"
                  placeHolder="Responsible"
                  multiple={false}
                    // onSearch={this.handleChangeResponsible}
                  options={this.props.professors}
                  value={this.state.responsible}
                  onChange={this.handleChangeResponsible}
                />
              </FormField>
              <FormField>
                <Box
                  direction="row"
                  pad={{ vertical: 'none', horizontal: 'small', between: 'large' }}
                  margin="none"
                >
                  <Label size="small">
                      Course:
                  </Label>
                  {this.state.errors.course !== 'isValid' ?
                    <Label size="small">
                      <span style={{ color: 'red' }}>{this.state.errors.course}</span>
                    </Label> : null
                    }
                  {this.state.errors.course === 'isValid' ?
                    <Checkmark colorIndex="ok" /> : null
                    }
                </Box>
                <Select
                  id="course"
                  name="Course"
                  placeHolder="Course"
                  multiple={false}
                    // onSearch={this.handleChangeResponsible}
                  options={this.props.courses}
                  value={this.state.course}
                  onChange={this.handleChangeCourse}
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
              <CreateTeachingConfirmation
                setLayer={this.setLayer}
                teachingName={this.state.name}
                course={this.state.course}
                courseRef={this.state.courseRef}
                responsible={this.state.responsible}
                responsibleRef={this.state.responsibleRef}
                addTeachingRequest={this.props.actions.addTeachingRequest}
                status={this.props.statusAddTeachingRequest}
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
CreateTeachingComponent.propTypes = {
  statusAddTeachingRequest: PropTypes.string.isRequired,
  actions: PropTypes.shape({
    addTeachingRequest: PropTypes.func.isRequired,
  }).isRequired,
  professors: PropTypes.shape({
    value: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
  }).isRequired,
  courses: PropTypes.shape({
    value: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
  }).isRequired,
};

export default CreateTeachingComponent;
