import React from 'react';
import PropTypes from 'prop-types';
import { TableRow, Button, Form, FormField, FormFields, TextInput } from 'grommet';
// import CheckMark from 'grommet/components/icons/base/Checkmark';
import ConfirmationPublishMark from './ConfirmationPublishMark';

class StudentEntry extends React.Component {
  constructor(props) {
    super(props);

    this.setLayer = this.setLayer.bind(this);
    this.handleChangeMark = this.handleChangeMark.bind(this);

    this.state = {
      mark: false,
      showLayer: false,
    };
  }

  setLayer() {
    this.setState({
      showLayer: !this.state.showLayer,
    });
  }

  handleChangeMark(e) {
    this.setState({ mark: e.target.value });
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
              <FormField>
                <TextInput
                  id="mark"
                  name="Mark"
                  placeHolder="18"
                  onDOMChange={this.handleChangeMark}
                />
              </FormField>
            </FormFields>
          </Form>
        </td>
        <td>
          <Button primary onClick={() => this.setLayer()} label="Publish" />
        </td>
        {this.state.showLayer ?
          <ConfirmationPublishMark
            setLayer={this.setLayer}
            studentName={this.props.name}
            studentSurname={this.props.surname}
            studSocialNumber={this.props.socialNumber}
            studAddress={this.props.address}
            examMark={this.state.mark}
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
  socialNumber: PropTypes.number.isRequired,
  address: PropTypes.string.isRequired,
  examAddress: PropTypes.string.isRequired,
  publishMark: PropTypes.func.isRequired,
};

export default StudentEntry;

