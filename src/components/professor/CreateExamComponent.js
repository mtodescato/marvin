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
  DateTime,
  Select,
  Footer,
} from 'grommet';
import FormNextLinkIcon from 'grommet/components/icons/base/FormNextLink';
import Checkmark from 'grommet/components/icons/base/Checkmark';
// import { stringFormValidation } from '../formValidator';
import CreateExamConfirmation from './CreateExamConfirmation';

class CreateExamComponent extends React.Component {
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);

    // this.handleValidation = this.handleValidation.bind(this);

    this.handleChangeDate = this.handleChangeDate.bind(this);
    this.handleChangeTeaching = this.handleChangeTeaching.bind(this);

    this.setLayer = this.setLayer.bind(this);

    this.state = {
      date: '',
      teachingName: '',
      teachingAddress: '',
      errors: {
        name: '',
        president: '',
        type: '',
        formIsValid: false,
      },
      showLayer: false,
    };
  }

  onSubmit() {
    this.setLayer();
  }

  setLayer() {
    this.setState({
      showLayer: !this.state.showLayer,
    });
  }
  /*
  handleValidation() {
    const errors = Object.assign({}, this.state.errors);

    if ((errors.name === 'isValid'
    && errors.president === 'isValid'
  && errors.type === 'isValid' )) {
      errors.formIsValid = true;
    } else errors.formIsValid = false;

    this.setState({ errors });
    return this.state.errors.formIsValid;
  }
  */


  handleChangeDate(e) {
    this.setState({ date: e });
  }

  handleChangeTeaching(e) {
    this.setState({
      teachingName: e.option.value,
      teachingAddress: e.option.address,
    });
  }

  render() {
    return (
      <div>
        {/* this.props.state.status === 'RESOLVED' && (
          <Toast status="ok">
            <strong>Exam created correctly</strong>
          </Toast>
        ) */}
        {/* this.props.state.status === 'ERRORED' && (
          <Toast status="critical">
            <strong>Exam creation error: &quot;Transaction rejected&quot;</strong>
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
            separator="horizontal"
          >
            <FormNextLinkIcon />
            <Label>
                Manage Exams
            </Label>
            <FormNextLinkIcon />
            <Label>
                Create Exam
            </Label>
          </Box>

          <Box className="titleBox" alignSelf="center" >
            <Heading tag="h2" strong>
            New exam creation
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
              Submit the informations of the new exam.
            </Heading>
            <Form>
              <FormFields>
                <FormField label="Teaching:">
                  <Select
                    id="teaching"
                    name="Teaching"
                    placeHolder="Teaching"
                    multiple={false}
                    options={this.props.teachingsEntries}
                    value={this.state.teachingName}
                    onChange={this.handleChangeTeaching}
                  />
                </FormField>
                <FormField>
                  <Box
                    direction="row"
                    pad={{ vertical: 'none', horizontal: 'small', between: 'large' }}
                    margin="none"
                  >
                    <Label size="small">
                      Data:
                    </Label>
                    {this.state.errors.data !== 'isValid' ?
                      <Label size="small">
                        <span style={{ color: 'red' }}>{this.state.errors.data}</span>
                      </Label> : null
                    }
                    {this.state.errors.data === 'isValid' ?
                      <Checkmark colorIndex="ok" /> : null
                    }
                  </Box>
                  <DateTime
                    id="date"
                    name="Date"
                    format="DD/MM/YYYY H:mm"
                    value={this.state.date}
                    onChange={this.handleChangeDate}
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
                <CreateExamConfirmation
                  setLayer={this.setLayer}
                  examDate={this.state.date}
                  teachingName={this.state.teachingName}
                  teachingAddress={this.state.teachingAddress}
                  // addExamRequest={this.props.actions.addExamRequest}
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
CreateExamComponent.propTypes = {
  teachingsEntries: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    label: PropTypes.element.isRequired,
  })).isRequired,
  /*
  actions: PropTypes.shape({
    addExamRequest: PropTypes.func.isRequired,
  }).isRequired,
   teachingEntries: PropTypes.arrayOf(PropTypes.shape({
    ID: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    cfu: PropTypes.number.isRequired,
    address: PropTypes.string.isRequired,
  })).isRequired, */
  state: PropTypes.shape({
    status: PropTypes.bool.isRequired,
  }).isRequired,
};

export default CreateExamComponent;
