import React from 'react';
import PropTypes from 'prop-types';
import { TableRow, Button } from 'grommet';
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
        <td>{this.props.index}</td>
        <td>{this.props.name}</td>
        <td>{this.props.surname}</td>
        <td>{this.props.role}</td>
        <td>{this.props.address}</td>
        <td><Button primary onClick={() => this.setLayer()}>Delete</Button></td>
        {this.state.showLayer ?
          <ConfirmationDelete
            setLayer={this.setLayer}
            userName={this.props.name}
            userSurname={this.props.surname}
            userAddress={this.props.address}
            userRole={this.props.role}
            deleteAction={this.props.deleteAction}
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
};

export default UserEntry;
