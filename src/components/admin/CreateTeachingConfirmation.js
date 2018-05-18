import React from 'react';
import PropTypes from 'prop-types';
import { Box, Layer, Header, Heading, Paragraph, Footer, Button, List, ListItem } from 'grommet';

class CreateTeachingConfirmation extends React.Component {
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit() {
    /*
    const teaching = {
      course: this.props.teachingCourse,
      responsible: this.props.teachingResponsible,
      name: this.props.teachingName,
    }; */

    // this.props.addTeachingRequest(teaching);
    this.props.setLayer();
  }
  render() {
    return (
      <Layer
        closer
        onClose={this.props.setLayer}
        align="center"
        flush
      >
        <Box
          pad={{ vertical: 'small', horizontal: 'small' }}
        >
          <Header
            colorIndex="light-2"
            justify="center"
            full="horizontal"
            pad={{ vertical: 'none', horizontal: 'none', between: 'medium' }}
          >
            <Heading tag="h3" strong>
                Create teaching confirmation
            </Heading>
          </Header>

          <Box
            justify="center"
            size={{ width: { max: 'medium' } }}
            pad={{ vertical: 'small', horizontal: 'small' }}
          >
            <Paragraph margin="none" align="center">
                    Are you sure you want to send the transaction to create the teaching?
            </Paragraph>
          </Box>

          <Box pad={{ vertical: 'none', horizontal: 'none' }}>
            <List >
              <ListItem
                justify="between"
                separator="bottom"
                pad={{ vertical: 'none', horizontal: 'small', between: 'medium' }}
                margin="none"
              >
                <Heading tag="h4" margin="none">
                Name:
                </Heading>
                <Heading tag="h4" margin="none">
                  {this.props.teachingName}
                </Heading>
              </ListItem>

              <ListItem
                justify="between"
                separator="bottom"
                pad={{ vertical: 'none', horizontal: 'small', between: 'medium' }}
                margin="none"
              >
                <Heading tag="h4" margin="none">
                  Responsible:
                </Heading>
                <Heading tag="h4" margin="none">
                  {this.props.teachingResponsible}
                </Heading>
              </ListItem>

              <ListItem
                justify="between"
                separator="bottom"
                pad={{ vertical: 'none', horizontal: 'small', between: 'medium' }}
                margin="none"
              >
                <Heading tag="h4" margin="none">
                  Course:
                </Heading>
                <Heading tag="h4" margin="none">
                  {this.props.teachingCourse}
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

CreateTeachingConfirmation.propTypes = {
  setLayer: PropTypes.func.isRequired,
  teachingName: PropTypes.string.isRequired,
  teachingResponsible: PropTypes.string.isRequired,
  teachingCourse: PropTypes.string.isRequired,
  // addTeachingRequest: PropTypes.func.isRequired,
};

export default CreateTeachingConfirmation;
