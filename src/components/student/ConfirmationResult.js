import React from 'react';
import PropTypes from 'prop-types';
import { Box, Layer, Header, Heading, Paragraph, Footer, Button, List, ListItem } from 'grommet';

class ConfirmationResult extends React.Component {
  constructor(props) {
    super(props);

    this.onConfirm = this.onConfirm.bind(this);
    this.onReject = this.onReject.bind(this);
  }

  onConfirm() {
    this.props.accept(this.props.examAddress);
    this.props.setStatus(true);
    this.props.setLayer();
  }

  onReject() {
    this.props.reject(this.props.examAddress);
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
            colorIndex="light-2"
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
              Are you sure you want to send the transaction to manage this esam mark?
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
                Date:
                </Heading>
                <Heading tag="h5" margin="none">
                  {this.props.examDate}
                </Heading>
              </ListItem>
              <ListItem
                justify="between"
                separator="bottom"
                pad={{ vertical: 'none', horizontal: 'small', between: 'medium' }}
                margin="none"
              >
                <Heading tag="h5" margin="none" strong>
                Course name:
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
                Vote:
                </Heading>
                <Heading tag="h5" margin="none">
                  {this.props.examMark}
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
              label="Accept"
              type="submit"
              primary
              onClick={this.onConfirm}
            />
            <Button
              label="Reject"
              type="submit"
              primary
              onClick={this.onReject}
            />
          </Footer>
        </Box>
      </Layer>
    );
  }
}

ConfirmationResult.propTypes = {
  setLayer: PropTypes.func.isRequired,
  examName: PropTypes.string.isRequired,
  examDate: PropTypes.string.isRequired,
  examMark: PropTypes.number.isRequired,
  examAddress: PropTypes.string.isRequired,
  accept: PropTypes.func.isRequired,
  reject: PropTypes.func.isRequired,
  setStatus: PropTypes.func.isRequired,
};

export default ConfirmationResult;
