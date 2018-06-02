import React from 'react';
import PropTypes from 'prop-types';
import { TableRow, Button } from 'grommet';
import ConfirmationSubscribe from './ConfirmationSubscribe';

class CourseEntry extends React.Component {
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
        <td>{this.props.president}</td>
        <td>{this.props.type}</td>
        <td>
          {this.props.activeCourseName === this.props.name ? 'Subscribed' : (
            <Button primary onClick={() => this.setLayer()}>Subscribe</Button>
          )}
        </td>
        {this.state.showLayer ?
          <ConfirmationSubscribe
            setLayer={this.setLayer}
            courseName={this.props.name}
            coursePresident={this.props.president}
            courseType={this.props.type}
            courseAddress={this.props.ID}
            subscribeToCourse={this.props.subscribeToCourse}
            setStatus={this.props.setStatus}
          />
                      : null
                    }
      </TableRow>
    );
  }
}

CourseEntry.propTypes = {
  index: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  president: PropTypes.string.isRequired,
  type: PropTypes.number.isRequired,
  ID: PropTypes.string.isRequired,
  subscribeToCourse: PropTypes.func.isRequired,
  activeCourseName: PropTypes.string.isRequired,
  setStatus: PropTypes.func.isRequired,
};

export default CourseEntry;
