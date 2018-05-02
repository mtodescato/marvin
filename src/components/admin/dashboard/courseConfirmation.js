import React from 'react';
import PropTypes from 'prop-types';
import { Layer, Box, Header, Heading, Footer, Button } from 'grommet';

class CourseConfirmationLayer extends React.Component {
  render() {
    return (
      <Layer
        closer
        align="center"
        onClose={this.props.setLayer}
      >
        <Box
          classname="LayerBox"
          direction="column"
          justify="center"
          align="center"
          separator="bottom"
        >
          <Header>
            <Heading
              align="center"
              tag="h2"
            >
              Conferma invio transazione
            </Heading>
          </Header>
          <Heading
            align="center"
            tag="h4"
          >
                  Confermi di voler inviare la transazione per la creazione del
                  Corso di Laurea in {this.courseName} ?
          </Heading>
          <Footer
            justify="between"
            pad={{ vertical: 'small' }}
          >
            <Box
              direction="row"
              align="center"
              pad={{ between: 'medium' }}
            >
              <Button
                label="Confirm"
                type="submit"
                primary
              />
              <Button
                label="Cancel"
                type="reset"
                primary
              />
            </Box>
          </Footer>
        </Box>
      </Layer>
    );
  }
}

CourseConfirmationLayer.propTypes = {
  setLayer: PropTypes.func.isRequired,
};

export default CourseConfirmationLayer;
