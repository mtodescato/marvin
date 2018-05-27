import React from 'react';
import PropTypes from 'prop-types';
import { TableRow, Button, Form, FormField, FormFields, TextInput, Box } from 'grommet';
import Checkmark from 'grommet/components/icons/base/Checkmark';
import Close from 'grommet/components/icons/base/Close';
import { markValidation } from '../formValidator';
import ConfirmationPublishMark from './ConfirmationPublishMark';

class StudentEntry extends React.Component {
  constructor(props) {
    super(props);

    this.setLayer = this.setLayer.bind(this);

    this.handleChangeMark = this.handleChangeMark.bind(this);

    this.state = {
      mark: 0,
      errors: {
        mark: '',
        formIsValid: false,
      },
      showLayer: false,
    };
  }

  setLayer() {
    this.setState({
      showLayer: !this.state.showLayer,
    });
  }

  handleChangeMark(e) {
    const errors = Object.assign({}, this.state.errors);

    errors.mark = markValidation(e.target.value);

    if ((errors.mark === 'isValid')) {
      errors.formIsValid = true;
    } else errors.formIsValid = false;

    this.setState({
      mark: parseInt(e.target.value, 10),
      errors,
    });
  }

  render() {
    return (
      <TableRow>
        <td>{this.props.index + 1}</td>
        <td>{this.props.socialNumber}</td>
        <td>{this.props.name}</td>
        <td>{this.props.surname}</td>
        <td>
          <Form>
            <FormFields>
              <Box
                direction="row"
                pad={{ vertical: 'none', horizontal: 'small', between: 'small' }}
                size="medium"
                margin="none"
              >
                <FormField>
                  <TextInput
                    id="mark"
                    name="Mark"
                    placeholder="18"
                    onDOMChange={this.handleChangeMark}
                  />
                </FormField>
                {this.state.errors.mark !== 'isValid' && this.state.errors.mark !== '' ?
                  <Close colorIndex="critical" /> : null
                    }
                {this.state.errors.mark === 'isValid' ?
                  <Checkmark colorIndex="ok" /> : null
                }
                <Button primary onClick={this.state.errors.formIsValid ? () => this.setLayer() : null} label="Publish" />
              </Box>
            </FormFields>
          </Form>
        </td>
        {this.state.showLayer ?
          <ConfirmationPublishMark
            setLayer={this.setLayer}
            studentName={this.props.name}
            studentSurname={this.props.surname}
            studSocialNumber={this.props.socialNumber}
            stdAddress={this.props.address}
            mark={this.state.mark}
            examAddress={this.props.examAddress}
            publishMark={this.props.publishMark}
          />
                      : null
                    }
      </TableRow>
    );
  }
}

StudentEntry.propTypes = {
  index: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  surname: PropTypes.string.isRequired,
  socialNumber: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  examAddress: PropTypes.string.isRequired,
  publishMark: PropTypes.func.isRequired,
};

export default StudentEntry;

