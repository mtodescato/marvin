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
import Checkmark from 'grommet/components/icons/base/Checkmark';
import { dateTimeValidation, selectValidation } from '../formValidator';
import CreateExamConfirmation from './CreateExamConfirmation';

class CreateExamComponent extends React.Component {
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);

    this.handleValidation = this.handleValidation.bind(this);

    this.handleChangeDate = this.handleChangeDate.bind(this);
    this.handleChangeTeaching = this.handleChangeTeaching.bind(this);

    this.setLayer = this.setLayer.bind(this);

    this.state = {
      date: '',
      teachingName: '',
      teachingAddress: '',
      errors: {
        date: '',
        teaching: '',
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

  handleValidation(errors) {
    const newLocal = this.state.errors.formIsValid;
    let formIsValid = newLocal;

    if ((errors.date === 'isValid' && errors.teaching === 'isValid')) {
      formIsValid = true;
      return formIsValid;
    }
    return false;
  }


  handleChangeDate(e) {
    const errors = Object.assign({}, this.state.errors);

    errors.date = dateTimeValidation(e);
    errors.formIsValid = this.handleValidation(errors);

    this.setState({
      date: e,
      errors,
    });
  }

  handleChangeTeaching(e) {
    const errors = Object.assign({}, this.state.errors);

    errors.teaching = selectValidation(e.option.value);
    errors.formIsValid = this.handleValidation(errors);

    this.setState({
      teachingName: e.option.value,
      teachingAddress: e.option.address,
      errors,
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
        <Box className="PanelBox" direction="column" margin="small" separator="bottom" >
          <Box className="titleBox" align="center" alignSelf="center" colorIndex="brand" full="horizontal" >
            <Heading tag="h2" strong>
            New exam creation
            </Heading>
          </Box>

          <Box className="infoBox" pad={{ horizontal: 'medium', vertical: 'small' }} >
            <Heading tag="h5" >
              This page allows you to create exams of the teachings of which you are the reference
              professor. In order to send the transaction to complete the creation operation you
              must fill all the fields below with the exam informations.
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
                      Teaching:
                    </Label>
                    {this.state.errors.teaching !== 'isValid' ?
                      <Label size="small">
                        <span style={{ color: 'red' }}>{this.state.errors.teaching}</span>
                      </Label> : null
                    }
                    {this.state.errors.teaching === 'isValid' ?
                      <Checkmark colorIndex="ok" /> : null
                    }
                  </Box>
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
                    {this.state.errors.date !== 'isValid' ?
                      <Label size="small">
                        <span style={{ color: 'red' }}>{this.state.errors.date}</span>
                      </Label> : null
                    }
                    {this.state.errors.date === 'isValid' ?
                      <Checkmark colorIndex="ok" /> : null
                    }
                  </Box>
                  <DateTime
                    id="date"
                    name="Date"
                    format="DD/MM/YYYY"
                    value={this.state.date}
                    onChange={this.handleChangeDate}
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
                <CreateExamConfirmation
                  setLayer={this.setLayer}
                  examDate={this.state.date}
                  teachingName={this.state.teachingName}
                  teachingAddress={this.state.teachingAddress}
                  addExamRequest={this.props.actions.addExamRequest}
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
  actions: PropTypes.shape({
    addExamRequest: PropTypes.func.isRequired,
  }).isRequired,
  state: PropTypes.shape({
    status: PropTypes.bool.isRequired,
  }).isRequired,
};

export default CreateExamComponent;
