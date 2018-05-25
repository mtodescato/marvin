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
// import TeachingConfirmation from './CreateTeachingConfirmation';
import Checkmark from 'grommet/components/icons/base/Checkmark';
import { stringFormValidation } from '../formValidator';

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
    this.handleChangeCourse = this.handleChangeCourse.bind(this);
    this.handleChangeResponsible = this.handleChangeResponsible.bind(this);

    this.setLayer = this.setLayer.bind(this);

    this.state = {
      name: '',
      course: '',
      courseRef: '',
      responsible: '',
      responsibleRef: '',
      errors: {
        name: '',
        course: '',
        responsible: '',
        formIsValid: false,
      },
      showLayer: false,
    };
  }

  onSubmit(e) {
    e.preventDefault();
    const teaching = {
      name: this.state.name,
      responsible: this.state.responsibleRef,
      course: this.state.courseRef,
    };
    this.props.actions.addTeachingRequest(teaching);
  }

  setLayer() {
    this.setState({
      showLayer: !this.state.showLayer,
    });
  }


  handleValidation() {
    const errors = Object.assign({}, this.state.errors);
    /*
    if ((errors.name === 'isValid'
          && errors.surname === 'isValid'
          && errors.address === 'isValid')) {
      errors.formIsValid = true;
    } else errors.formIsValid = false;
    */
    errors.formIsValid = true;

    this.setState({ errors });
    return this.state.errors.formIsValid;
  }

  handleChangeName(e) {
    const errors = Object.assign({}, this.state.errors);

    errors.name = stringFormValidation(e.target.value);

    this.setState({ name: e.target.value });
    this.setState({ errors });
  }

  handleChangeCourse(e) {
    this.setState({ course: e.value.label, courseRef: e.value.value });
  }

  handleChangeResponsible(e) {
    this.setState({ responsible: e.value.label, responsibleRef: e.value.value });
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
          <Box
            className="PanelHeader"
            direction="row"
            justify="start"
            align="center"
            separator="bottom"
          >
            <FormNextLinkIcon />
            <Label>
                Manage Teachings
            </Label>
            <FormNextLinkIcon />
            <Label>
                Create Teaching
            </Label>
          </Box>

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
            justify="start"
            separator="bottom"
            pad={{ horizontal: 'medium' }}
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
                <FormField label="Professor in charge:">
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
                <FormField label="Course:">
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
                  onClick={this.onSubmit}
                  // onClick={this.setLayer}
                />
                {/* {this.state.showLayer ?
                  <TeachingConfirmation
                    setLayer={this.setLayer}
                    teachingName={this.state.name}
                    teachingResponsible={this.state.responsible}
                  /> : null
                  } */}
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
