import React from 'react';
import PropTypes from 'prop-types';
import {
  Box,  
  Section,
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
import CourseConfirmation from './courseConfirmation'



class CreateCourse extends React.Component {
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangePresident = this.handleChangePresident.bind(this);
    this.handleChangeRole = this.handleChangeRole.bind(this);

    this._setLayer = this._setLayer.bind(this);

    this.state = {
      name: 'sdfsd',
      president: '',
      type: 0,
      roleString: 'Student',
      showLayer: false,
    };
  }

  _setLayer() {
    this.setState({
      showLayer: this.state.showLayer ? false : true,
    });
  } 

  _onConfirm() {

    this._setLayer();
    this.onSubmit();
  } 
  onSubmit() {
    const user = {
      name: this.state.name,
      president: this.state.president,
      type: this.state.type,
    };
    this.props.actions.addUserRequest(user);
  }

  handleChangeName(e) {
    this.setState({ name: e.target.value });
  }

  handleChangePresident(e) {
    this.setState({ president: e.target.value });
  }

  handleChangeRole(e) {
    let numberRole;
    switch (e.option) {
      case 'Triennale':
        numberRole = 0;
        break;
      case 'Magistrale':
        numberRole = 1;
        break;
      default:
        numberRole = 0;
    }
    this.setState({
      type: numberRole,
      roleString: e.option,
    });
  }

  render() {
    return (
      <div>
        {this.props.state.isSuccess === true && (
          <Toast status="ok">
            <strong>Course created correctly</strong>
          </Toast>
        )}
        {this.props.state.isFailed === true && (
          <Toast status="critical">
            <strong>Course creation error: &quot;Transaction rejected&quot;</strong>
          </Toast>
        )}
        <Box classname = 'PanelBox'
            direction = 'column'
            margin = 'small'>
          <Box classname = 'PanelHeader'
              direction = 'row'
              justify = 'start'
              align = 'center'
              separator = 'horizontal'>
            <FormNextLinkIcon/>
              <Label>
                Manage Courses        
              </Label>
            <FormNextLinkIcon/>
              <Label>
                Create Course       
              </Label>
          </Box>
          <Box classname = 'PanelForm'
              direction = 'row'
              justify = 'center'
              align = 'center'
              separator = 'bottom'>
            <Form>
              <Header>
                  <Heading align ='center'
                          tag = 'h2'>
                    New course creation
                  </Heading>
              </Header>
              <FormFields>          
                <Paragraph>
                  Submit the info of the new course.
                </Paragraph>
                <FormField label="Name:">
                  <TextInput id="name"
                            name="Name"
                            placeHolder="Mario"
                            onDOMChange={this.handleChangeName}/>
                </FormField>
                <FormField label="President:">
                  <TextInput id="president"
                            name="President"
                            placeHolder="Rossi" 
                            onDOMChange={this.handleChangePresident}/>
                </FormField>
                <FormField label="Type:">
                  <Select id="type"
                        options={['Triennale', 'Magistrale']}
                        value={this.state.roleString}
                        onChange={this.handleChangeRole}/>
                </FormField>
              </FormFields>
              <Footer pad={{ vertical: 'small' }}>
                <Button label="Submit"
                      primary
                      onClick={this._setLayer}/>
                  {this.state.showLayer ?
                    <CourseConfirmation _onConfirm = {this._onConfirm} courseName = {this.state.name} courseYear = {this.props.year}/> : null
                  }
              </Footer>
            </Form>
          </Box>
        </Box>        
      </div>
    );
  }
}
CreateCourse.propTypes = {
  actions: PropTypes.shape({
    addUserRequest: PropTypes.func.isRequired,
  }).isRequired,
  state: PropTypes.shape({
    isSuccess: PropTypes.bool.isRequired,
    isFailed: PropTypes.bool.isRequired,
  }).isRequired,
};

export default CreateCourse;

//onClick={this.onSubmit}