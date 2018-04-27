import React from 'react';
import Table from 'grommet/components/Table';
import TableRow from 'grommet/components/TableRow';
import Button from 'grommet/components/Button';
import Layer from 'grommet/components/Layer';
import Header from 'grommet/components/Header';
import Heading from 'grommet/components/Heading';
import FormFields from 'grommet/components/FormFields';
import Paragraph from 'grommet/components/Paragraph';
import Footer from 'grommet/components/Footer';
import Form from 'grommet/components/Form';
import Box from 'grommet/components/Box';
import PropTypes from 'prop-types';
// import ConfirmationComponent from '../../components/student/confirmationComponent';

function ConfirmationComponent(props) {
  return (
    <Layer
      closer
      onClose={props.setLayer}
    >
      <Box pad="medium">
        <Form>
          <Header>
            <Heading>
              Conferma Iscrizione
            </Heading>
          </Header>
          <FormFields>
            <fieldset>
              <Paragraph>
                Confermi l iscrizione al corso di laurea in {props.courseName} {props.courseYear} ?
              </Paragraph>
            </fieldset>
          </FormFields>
          <Footer pad={{ vertical: 'medium' }}>
            <Button
              label="Conferma"
              type="submit"
              primary
            />
          </Footer>
        </Form>
      </Box>
    </Layer>
  );
}

class CourseEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showLayer: false,
    };
    this.setLayer = this.setLayer.bind(this);
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
        <td>{this.props.year}</td>
        <td><Button onClick={this.setLayer}>Iscriviti</Button></td>
        {this.state.showLayer ?
          <ConfirmationComponent
            setLayer={this.setLayer}
            courseName={this.props.name}
            courseYear={this.props.year}
          />
           : null
        }
      </TableRow>
    );
  }
}

const CoursesListComponent = props => (
  <div>
    <h4> Courses avaiable</h4>
    <Table responsive>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>President</th>
          <th>Type</th>
          <th>Year</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {
          props.coursesEntry.map((element, index) => (
            <CourseEntry
              index={index}
              {...element}
            />
          ))
        }
      </tbody>
    </Table>
  </div>
);

CoursesListComponent.propTypes = {
  coursesEntry: PropTypes.arrayOf.isRequired,
};

ConfirmationComponent.propTypes = {
  setLayer: PropTypes.func.isRequired,
  courseName: PropTypes.string.isRequired,
  courseYear: PropTypes.string.isRequired,
};

CourseEntry.propTypes = {
  name: PropTypes.string.isRequired,
  president: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};

export default CoursesListComponent;
