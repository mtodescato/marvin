import React from 'react';
import PropTypes from 'prop-types';
import { Box, Layer, Header, Heading, Paragraph, Footer, Button, List, ListItem } from 'grommet';

class CreateCourseConfirmation extends React.Component {
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit() {
    const course = {
      name: this.props.courseName,
      president: this.props.coursePresident,
      type: this.props.courseType,
      academicYear: this.props.courseYear,
    };

    this.props.addCourseRequest(course);
    this.props.resetState();
    this.props.setStatus(true);
    this.props.setLayer();
  }

  render() {
    return (
      <Layer
        overlayClose
        onClose={this.props.setLayer}
        align="center"
        flush
      >
        <Box
          pad={{ vertical: 'small', horizontal: 'small' }}
        >
          <Header
            colorIndex="brand"
            justify="center"
            full="horizontal"
            pad={{ vertical: 'none', horizontal: 'none', between: 'medium' }}
          >
            <Heading tag="h3" strong>
                Create course confirmation
            </Heading>
          </Header>

          <Box
            justify="center"
            size={{ width: { max: 'medium' } }}
            pad={{ vertical: 'small', horizontal: 'small' }}
          >
            <Paragraph margin="none" align="center">
                Are you sure you want to send the transaction to create the course?
            </Paragraph>
          </Box>

          <Box pad={{ vertical: 'none', horizontal: 'none' }} colorIndex="light-2" separator="all">
            <List >
              <ListItem
                justify="between"
                separator="bottom"
                pad={{ vertical: 'none', horizontal: 'small', between: 'medium' }}
                margin="none"
              >
                <Heading tag="h5" margin="none" strong>
                  Academic Year:
                </Heading>
                <Heading tag="h5" margin="none" >
                  {this.props.courseYear}
                </Heading>
              </ListItem>
              <ListItem
                justify="between"
                separator="bottom"
                pad={{ vertical: 'none', horizontal: 'small', between: 'medium' }}
                margin="none"
              >
                <Heading tag="h5" margin="none" strong>
                Name:
                </Heading>
                <Heading tag="h5" margin="none" >
                  {this.props.courseName}
                </Heading>
              </ListItem>
              <ListItem
                justify="between"
                separator="bottom"
                pad={{ vertical: 'none', horizontal: 'small', between: 'medium' }}
                margin="none"
              >
                <Heading tag="h5" margin="none" strong>
                President:
                </Heading>
                <Heading tag="h5" margin="none" >
                  {this.props.coursePresident}
                </Heading>
              </ListItem>
              <ListItem
                justify="between"
                separator="none"
                pad={{ vertical: 'none', horizontal: 'small', between: 'medium' }}
                margin="none"
              >
                <Heading tag="h5" margin="none" strong>
                Type:
                </Heading>
                <Heading tag="h5" margin="none" >

                  {this.props.courseType === 0 ? 'Bachelor\'s' : null}
                  {this.props.courseType === 1 ? 'Master\'s' : null}
                </Heading>
              </ListItem>
            </List>
          </Box>

          <Footer
            justify="center"
            align="center"
            pad={{ horizontal: 'none', vertical: 'small', between: 'medium' }}
            direction="row"
          >
            <Button
              label="Confirm"
              type="submit"
              primary
              onClick={this.onSubmit}
            />
            <Button
              label="Cancel"
              type="submit"
              primary
              onClick={this.props.setLayer}
            />
          </Footer>
        </Box>
      </Layer>
    );
  }
}

CreateCourseConfirmation.propTypes = {
  setLayer: PropTypes.func.isRequired,
  setStatus: PropTypes.func.isRequired,
  resetState: PropTypes.func.isRequired,
  courseName: PropTypes.string.isRequired,
  coursePresident: PropTypes.string.isRequired,
  courseType: PropTypes.number.isRequired,
  courseYear: PropTypes.number.isRequired,
  addCourseRequest: PropTypes.func.isRequired,
};

export default CreateCourseConfirmation;
