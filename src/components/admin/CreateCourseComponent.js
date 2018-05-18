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
import { stringFormValidation } from '../formValidator';
import CreateCourseConfirmation from './CreateCourseConfirmation';

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

    this.state = {
      name: '',
      president: '',
      type: 0,
      typeString: 'Tree-year',
      academicYear: 2018,
      errors: {
        name: '',
        president: '',
        type: '',
        formIsValid: false,
      },
      showLayer: false,
    };
  }

  onSubmit(e) {
    if (this.handleValidation()) {
      this.setLayer();
    /* const course = {
      name: this.state.name,
      president: this.state.president,
      type: this.state.type,
      academicYear: this.state.academicYear,
    };
    this.props.actions.addCourseRequest(course); */
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
    /* && errors.president === 'isValid'
  && errors.type === 'isValid' */)) {
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

  handleChangePresident(e) {
    this.setState({ president: e.option });
  }

  handleChangeAcademicYear(e) {
    this.setState({ academicYear: Number(e.target.value) });
  }

  render() {
    return (
      <div>
        { this.props.state.status === 'RESOLVED' && (
          <Toast status="ok">
            <strong>Course created correctly</strong>
          </Toast>
        )}
        {this.props.state.status === 'ERRORED' && (
          <Toast status="critical">
            <strong>Course creation error: &quot;Transaction rejected&quot;</strong>
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
            separator="horizontal"
          >
            <FormNextLinkIcon />
            <Label>
                Manage Courses
            </Label>
            <FormNextLinkIcon />
            <Label>
                Create Course
            </Label>
          </Box>

          <Box className="titleBox" alignSelf="center" >
            <Heading tag="h2" strong>
            New course creation
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
              Submit the informations of the new course.
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
                    placeHolder="Informatica"
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
                    {this.state.errors.name !== 'isValid' ?
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
                    placeHolder="Massimo Marchiori"
                    onDOMChange={this.handleChangePresident}
                  />
                </FormField>
                <FormField label="Degree Type:">
                  <Select
                    id="type"
                    options={['Tree-year', 'Master']}
                    value={this.state.typeString}
                    onChange={this.handleChangeType}
                  />
                </FormField>
                <FormField label="Academic Year:">
                  <TextInput
                    id="academicYear"
                    name="Name"
                    placeHolder="2018"
                    onDOMChange={this.handleChangeAcademicYear}
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
              {this.state.showLayer ?
                <CreateCourseConfirmation
                  setLayer={this.setLayer}
                  courseName={this.state.name}
                  coursePresident={this.state.president}
                  courseType={this.state.type}
                  courseYear={this.state.academicYear}
                  addCourseRequest={this.props.actions.addCourseRequest}
                  state={this.props.state}
                /> : null
                  }
            </Footer>
          </Box>
        </Box>
      </div>
    );
  }
}
CreateCourseComponent.propTypes = {
  actions: PropTypes.shape({
    addCourseRequest: PropTypes.func.isRequired,
  }).isRequired,
  state: PropTypes.shape({
    status: PropTypes.bool.isRequired,
  }).isRequired,
};

export default CreateCourseComponent;
