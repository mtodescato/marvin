import React from 'react';
import PropTypes from 'prop-types';
import { TableRow, Button, Paragraph } from 'grommet';
import ConfirmationDelete from './ConfirmationDelete';

class UserEntry extends React.Component {
  constructor(props) {
    super(props);

    this.setLayer = this.setLayer.bind(this);

    this.state = {
      showLayer: false,
    };
  }

  setLayer() {
    this.setState({
      showLayer: !this.state.showLayer,
    });
  }

  render() {
    return (
      <TableRow>
        <td>{this.props.index + 1}</td>
        <td>{this.props.name}</td>
        <td>{this.props.surname}</td>
        <td>
          {this.props.role === 2 ? 'Admin' : null}
          {this.props.role === 1 ? 'Professor' : null}
          {this.props.role === 0 ? 'Student' : null}
        </td>
        <td>
          <Paragraph size="medium" margin="none">
            {this.props.address}
          </Paragraph>
        </td>
        <td><Button primary onClick={() => this.setLayer()}>Delete</Button></td>
        {this.state.showLayer ?
          <ConfirmationDelete
            setLayer={this.setLayer}
            userName={this.props.name}
            userSurname={this.props.surname}
            userAddress={this.props.address}
            userRole={this.props.role}
            deleteAction={this.props.deleteAction}
            setStatus={this.props.setStatus}
          />
                      : null
                    }
      </TableRow>
    );
  }
}

UserEntry.propTypes = {
  index: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  surname: PropTypes.string.isRequired,
  role: PropTypes.number.isRequired,
  address: PropTypes.string.isRequired,
  deleteAction: PropTypes.func.isRequired,
  setStatus: PropTypes.func.isRequired,
};

export default UserEntry;
