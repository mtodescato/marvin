import React from 'react';
import PropTypes from 'prop-types';
import { Box, Layer, Header, Heading, Paragraph, Footer, Button, List, ListItem } from 'grommet';

class ConfirmationPublishMark extends React.Component {
  constructor(props) {
    super(props);

    this.onConfirm = this.onConfirm.bind(this);
  }

  onConfirm() {
    this.props.publishMark(this.props.stdAddress, this.props.examAddress, this.props.mark);
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
                Exam mark confirmation
            </Heading>
          </Header>

          <Box
            justify="center"
            size={{ width: { max: 'medium' } }}
            pad={{ vertical: 'small', horizontal: 'small' }}
          >
            <Paragraph margin="none" align="center">
                  Are you sure you want to send the transaction to publish this mark?
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
                  Studente:
                </Heading>
                <Heading tag="h5" margin="none">
                  {this.props.studentName} {this.props.studentSurname}
                </Heading>
              </ListItem>
              <ListItem
                justify="between"
                separator="bottom"
                pad={{ vertical: 'none', horizontal: 'small', between: 'medium' }}
                margin="none"
              >
                <Heading tag="h5" margin="none" strong>
                  Matricola:
                </Heading>
                <Heading tag="h5" margin="none">
                  {this.props.studSocialNumber}
                </Heading>
              </ListItem>
              <ListItem
                justify="between"
                separator="none"
                pad={{ vertical: 'none', horizontal: 'small', between: 'medium' }}
                margin="none"
              >
                <Heading tag="h5" margin="none" strong>
                  Vote:
                </Heading>
                <Heading tag="h5" margin="none">
                  {this.props.mark}
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
              onClick={this.onConfirm}
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

ConfirmationPublishMark.propTypes = {
  setLayer: PropTypes.func.isRequired,
  mark: PropTypes.func.isRequired,
  studentName: PropTypes.string.isRequired,
  studentSurname: PropTypes.string.isRequired,
  studSocialNumber: PropTypes.number.isRequired,
  stdAddress: PropTypes.string.isRequired,
  examAddress: PropTypes.string.isRequired,
  publishMark: PropTypes.func.isRequired,
};

export default ConfirmationPublishMark;
