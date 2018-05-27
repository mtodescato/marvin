import React from 'react';
import PropTypes from 'prop-types';
import { Box, Layer, Header, Heading, Paragraph, Footer, Button, List, ListItem } from 'grommet';

class ConfirmationExam extends React.Component {
  constructor(props) {
    super(props);

    this.onSubscribe = this.onSubscribe.bind(this);
  }

  onSubscribe() {
    this.props.subscribeToExam(this.props.examAddress);
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
                Exam subscribe <br /> confirmation
            </Heading>
          </Header>

          <Box
            justify="center"
            size={{ width: { max: 'medium' } }}
            pad={{ vertical: 'small', horizontal: 'small' }}
          >
            <Paragraph margin="none" align="center">
                  Are you sure you want to send the transaction to subscribe to the exam?
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
                Exam name:
                </Heading>
                <Heading tag="h5" margin="none">
                  {this.props.examName}
                </Heading>
              </ListItem>
              <ListItem
                justify="between"
                separator="none"
                pad={{ vertical: 'none', horizontal: 'small', between: 'medium' }}
                margin="none"
              >
                <Heading tag="h5" margin="none" strong>
                Date:
                </Heading>
                <Heading tag="h5" margin="none">
                  {this.props.examDate}
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
              onClick={this.onSubscribe}
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

ConfirmationExam.propTypes = {
  setLayer: PropTypes.func.isRequired,
  examName: PropTypes.string.isRequired,
  examDate: PropTypes.string.isRequired,
  examAddress: PropTypes.string.isRequired,
  subscribeToExam: PropTypes.func.isRequired,
};

export default ConfirmationExam;
