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
import FormNextLinkIcon from 'grommet/components/icons/base/FormNextLink';
import Checkmark from 'grommet/components/icons/base/Checkmark';
import TeachingConfirmation from './CreateTeachingConfirmation';
import { stringFormValidation, selectValidation } from '../formValidator';

/*
const options = {[{
  value: 'first',
  sub: 'alpha',
  label: <Box
    direction="row"
    justify="between"
  >   <span>     first   </span>   <span className="secondary">     alpha   </span>
         </Box>,
}, {
  value: 'second',
  sub: 'beta',
  label: <Box direction="row" justify="between">   <span>     second
  </span>   <span className="secondary">     beta   </span> </Box>,
}]} */


class CreateTeachingComponent extends React.Component {
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);

    this.handleValidation = this.handleValidation.bind(this);

    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeResponsible = this.handleChangeResponsible.bind(this);
    this.handleChangeCourse = this.handleChangeCourse.bind(this);

    this.setLayer = this.setLayer.bind(this);

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
    };
  }

  onSubmit(e) {
    e.preventDefault();
    this.setLayer();
  }

  setLayer() {
    this.setState({
      showLayer: !this.state.showLayer,
    });
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
      <div>
        {/* this.props.state.isSuccess === true && (
          <Toast status="ok">
            <strong>Course created correctly</strong>
          </Toast>
        )}
        {this.props.state.isFailed === true && (
          <Toast status="critical">
            <strong>Course creation error: &quot;Transaction rejected&quot;</strong>
          </Toast>
        ) */}
        <Box
          className="PanelBox"
          direction="column"
          margin="small"
          separator="bottom"
        >
          <Box className="titleBox" alignSelf="center" >
            <Heading tag="h2" strong>
              New teaching creation
            </Heading>
          </Box>

          <Box
            className="infoBox"
            pad={{ horizontal: 'medium', vertical: 'small' }}
          >
            <Heading tag="h5" >
              This page allows you to create and add teachings into the system. In order to send
              the transaction to complete the creation operation you
              must fill all the fields below with the teaching informations.
            </Heading>
          </Box>

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
              <Footer pad={{ vertical: 'small' }}>
                <Button
                  label="Submit"
                  primary
                  onClick={this.state.errors.formIsValid ? this.onSubmit : null}
                />
                {this.state.showLayer ?
                  <TeachingConfirmation
                    setLayer={this.setLayer}
                    teachingName={this.state.name}
                    course={this.state.course}
                    courseRef={this.state.courseRef}
                    responsible={this.state.responsible}
                    responsibleRef={this.state.responsibleRef}
                    addTeachingRequest={this.props.actions.addTeachingRequest}
                  /> : null
                  }
              </Footer>
            </Form>

          </Box>
        </Box>
      </div>
    );
  }
}
CreateTeachingComponent.propTypes = {
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
