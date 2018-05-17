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
import CourseConfirmation from './CreateCourseConfirmation';

class CreateCourseComponent extends React.Component {
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
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
      showLayer: false,
    };
  }

  onSubmit() {
    const user = {
      name: this.state.name,
      president: this.state.president,
      type: this.state.type,
      academicYear: this.state.academicYear,
    };
    this.props.actions.addCourseRequest(user);
  }

  setLayer() {
    this.setState({
      showLayer: !this.state.showLayer,
    });
  }

  handleChangeName(e) {
    this.setState({ name: e.target.value });
  }

  handleChangePresident(e) {
    this.setState({ president: e.target.value });
  }

  handleChangeAcademicYear(e) {
    this.setState({ academicYear: Number(e.target.value) });
  }

  handleChangeType(e) {
    let numberType;
    switch (e.option) {
      case 'Tree-year':
        numberType = 0;
        break;
      case 'Master':
        numberType = 1;
        break;
      default:
        numberType = 0;
    }
    this.setState({
      type: numberType,
      typeString: e.option,
    });
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
          <Box
            className="PanelForm"
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
                    New course creation
                </Heading>
              </Header>
              <FormFields>
                <Paragraph>
                  Submit the info of the new course.
                </Paragraph>
                <FormField label="Name:">
                  <TextInput
                    id="name"
                    name="Name"
                    placeHolder="Informatica"
                    onDOMChange={this.handleChangeName}
                  />
                </FormField>
                <FormField label="President:">
                  <TextInput
                    id="president"
                    name="President"
                    placeHolder="Mario"
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
              <Footer pad={{ vertical: 'small' }}>
                <Button
                  label="Submit"
                  primary
                  onClick={this.onSubmit}
                />
                {this.state.showLayer ?
                  <CourseConfirmation
                    setLayer={this.setLayer}
                    courseName={this.state.name}
                    coursePresident={this.state.president}
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
CreateCourseComponent.propTypes = {
  actions: PropTypes.shape({
    addCourseRequest: PropTypes.func.isRequired,
  }).isRequired,
  state: PropTypes.shape({
    status: PropTypes.bool.isRequired,
  }).isRequired,
};

export default CreateCourseComponent;
