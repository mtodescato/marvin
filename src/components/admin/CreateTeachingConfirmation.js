import React from 'react';
import PropTypes from 'prop-types';
import { Box, Layer, Header, Heading, Paragraph, Footer, Button, List, ListItem, Label } from 'grommet';

class CreateTeachingConfirmation extends React.Component {
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit() {
    const teaching = {
      name: this.props.teachingName,
      responsible: this.props.responsibleRef,
      course: this.props.courseRef,
    };
    this.props.addTeachingRequest(teaching);
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

          <Box pad={{ vertical: 'none', horizontal: 'none' }} colorIndex="light-2" separator="all">
            <List >
              <ListItem
                justify="between"
                separator="bottom"
                pad={{ vertical: 'none', horizontal: 'small', between: 'medium' }}
                margin="none"
              >
                <Heading tag="h5" margin="none" strong>
                Name:
                </Heading>
                <Heading tag="h5" margin="none">
                  {this.props.teachingName}
                </Heading>
              </ListItem>

              <ListItem
                justify="between"
                separator="none"
                pad={{ vertical: 'none', horizontal: 'small', between: 'medium' }}
                margin="none"
              >
                <Heading tag="h5" margin="none" strong>
                  Professor in charge:
                </Heading>
                <Heading tag="h5" margin="none">
                  {this.props.responsible}
                </Heading>
              </ListItem>

              <ListItem
                justify="end"
                pad={{ vertical: 'none', horizontal: 'small', between: 'medium' }}
                margin="none"
              >
                <Label size="small">
                  {this.props.responsibleRef}
                </Label>
              </ListItem>

              <ListItem
                justify="between"
                separator="none"
                pad={{ vertical: 'none', horizontal: 'small', between: 'medium' }}
                margin="none"
              >
                <Heading tag="h5" margin="none" strong>
                  Course:
                </Heading>
                <Heading tag="h5" margin="none">
                  {this.props.course}
                </Heading>
              </ListItem>

              <ListItem
                justify="end"
                separator="none"
                pad={{ vertical: 'none', horizontal: 'small', between: 'medium' }}
                margin="none"
              >
                <Label size="small">
                  {this.props.courseRef}
                </Label>
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
  setStatus: PropTypes.func.isRequired,
  resetState: PropTypes.func.isRequired,
  teachingName: PropTypes.string.isRequired,
  responsible: PropTypes.string.isRequired,
  responsibleRef: PropTypes.string.isRequired,
  course: PropTypes.string.isRequired,
  courseRef: PropTypes.string.isRequired,
  addTeachingRequest: PropTypes.func.isRequired,
};

export default CreateTeachingConfirmation;
