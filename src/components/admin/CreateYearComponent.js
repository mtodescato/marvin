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
} from 'grommet';
import FormNextLinkIcon from 'grommet/components/icons/base/FormNextLink';
import Checkmark from 'grommet/components/icons/base/Checkmark';
import { yearValidation } from '../formValidator';
import CreateYearConfirmation from './CreateYearConfirmation';


class CreateYearComponent extends React.Component {
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);

    this.handleChangeYear = this.handleChangeYear.bind(this);

    this.setLayer = this.setLayer.bind(this);

    this.state = {
      year: '',
      errors: {
        year: '',
        formIsValid: false,
      },
      showLayer: false,
    };
  }

  onSubmit(e) {
    if (this.state.errors.formIsValid) {
      this.setLayer();
    } else e.preventDefault();
  }

  setLayer() {
    this.setState({
      showLayer: !this.state.showLayer,
    });
  }

  handleChangeYear(e) {
    const errors = Object.assign({}, this.state.errors);

    errors.year = yearValidation(e.target.value);

    if ((errors.year === 'isValid')) {
      errors.formIsValid = true;
    } else errors.formIsValid = false;

    this.setState({
      year: e.target.value,
      errors,
    });
  }

  render() {
    return (
      <div>
        { /* this.props.state.status === 'RESOLVED' && (
          <Toast status="ok">
            <strong>Year Signed Up correctly</strong>
          </Toast>
        ) */}
        { /* this.props.state.status === 'ERRORED' && (
          <Toast status="critical">
            <strong>Year SignUp error: &quot;Transaction rejected&quot;</strong>
          </Toast>
        ) */ }
        <Box
          className="PanelBox"
          direction="column"
          margin="small"
          separator="bottom"
        >
          <Box className="titleBox" alignSelf="center" >
            <Heading tag="h2" strong>
              Academic year creation
            </Heading>
          </Box>

          <Box
            className="infoBox"
            pad={{ horizontal: 'medium', vertical: 'small' }}
          >
            <Heading tag="h5" >
              This page allows you to create and add a new academic year into the system.
              In order to send the transaction to complete the creation operation you
              must fill the field below with the year information.
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
                      Year:
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
                    id="year"
                    name="Year"
                    placeHolder="2018"
                    onDOMChange={this.handleChangeYear}
                  />
                </FormField>
              </FormFields>
            </Form>

            <Footer pad={{ vertical: 'medium' }}>
              <Button
                label="Submit"
                primary
                onClick={this.state.errors.formIsValid ? () => this.onSubmit() : null}
              />
              {this.state.showLayer ?
                <CreateYearConfirmation
                  setLayer={this.setLayer}
                  year={this.state.year}
                  addYearRequest={() => this.props.actions.addYearRequest(this.state.year)}
                  state={this.props.state}
                />
                      : null
                    }
            </Footer>
          </Box>
        </Box>
      </div>
    );
  }
}

CreateYearComponent.propTypes = {
  actions: PropTypes.shape({
    addYearRequest: PropTypes.func.isRequired,
  }).isRequired,
  state: PropTypes.shape({
    status: PropTypes.string.isRequired,
  }).isRequired,
};

export default CreateYearComponent;
