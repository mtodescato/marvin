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

class ConfirmationComponent extends React.Component {
  render() {
    return (

      <Layer
        closer
        onClose={this.props._setLayer}
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
              Confermi l'iscrizione al corso di laurea in {this.props.courseName} {this.props.courseYear} ?
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
}

export const coursesEntry = [{
  name: 'Informatica',
  president: 'Tullio',
  type: 'Triennale',
  year: '2018/19',
},
];

class CourseEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showLayer: false,
    };
    this._setLayer = this._setLayer.bind(this);
  }
  _setLayer() {
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
        <td><Button onClick={this._setLayer}>Iscriviti</Button></td>
        {this.state.showLayer ?
          <ConfirmationComponent _setLayer={this._setLayer} courseName={this.props.name} courseYear={this.props.year} />
           : null
        }
      </TableRow>
    );
  }
}

const CoursesListComponent = () => (
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
          coursesEntry.map((element, index) => (
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


export default CoursesListComponent;
