import React from 'react';
import PropTypes from 'prop-types';
import {
  Box,
  Label,
  Form,
  FormField,
  Button,
  // Toast,
  Header,
  Heading,
  FormFields,
  Paragraph,
  TextInput,
  Select,
  Footer,
} from 'grommet';
import FormNextLinkIcon from 'grommet/components/icons/base/FormNextLink';
// import TeachingConfirmation from './CreateTeachingConfirmation';

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
      showLayer: false,
    };
  }

  onSubmit() {
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

  handleChangeName(e) {
    this.setState({ name: e.target.value });
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
                Manage Teachings
            </Label>
            <FormNextLinkIcon />
            <Label>
                Create Teaching
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
                    New teaching creation
                </Heading>
              </Header>
              <FormFields>
                <Paragraph>
                  Submit the info of the new teaching.
                </Paragraph>
                <FormField label="Name:">
                  <TextInput
                    id="name"
                    name="Name"
                    placeHolder="Mario"
                    onDOMChange={this.handleChangeName}
                  />
                </FormField>
                <FormField label="Responsible:">
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
    initialize: PropTypes.func.isRequired,
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
