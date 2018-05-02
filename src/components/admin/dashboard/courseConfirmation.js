import React from 'react';
import PropTypes from 'prop-types';
import {
  Layer,
  Box,
  Section,
  Header,
  Heading,
  Paragraph,
  Footer,
  Button,
} from 'grommet';

class CourseConfirmationLayer extends React.Component {
  render() {
    return (
      <Layer closer={true}
          align = 'center'
          onClose={this.props._setLayer}>
        <Box classname = 'LayerBox'
              direction = 'column'
              justify = 'center'
              align = 'center'
              separator = 'bottom'>
          <Header>
            <Heading align ='center'
                    tag = 'h2'>
              Conferma invio transazione
            </Heading>
          </Header>
          <Heading align ='center'
                    tag = 'h4'>
                  Confermi di voler inviare la transazione per la creazione del Corso di Laurea in {this.courseName} ?
                  </Heading>
            <Footer justify='between'
                  pad={{ vertical: "small" }}>
              <Box direction='row'
                  align='center'
                  pad={{"between": "medium"}}>
                <Button label='Confirm'
                      type='submit'
                      primary={true}/>
                <Button label='Cancel'
                      type='reset'
                      primary={true}/> 
              </Box>
            </Footer>
        </Box>
      </Layer>
    );
  }
};

export default CourseConfirmationLayer;