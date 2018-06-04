import React from 'react';
import { Form, Button, Header, Heading, FormFields, Footer, FormField, TextInput, Headline } from 'grommet';
import PropTypes from 'prop-types';
import '../../css/degreeRequest.css';

class DegreeRequestComponent extends React.Component {
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
    this.handleChangeTitle = this.handleChangeTitle.bind(this);
    // this.handleChangeRelator = this.handleChangeRelator.bind(this);
    this.handleValidation = this.handleValidation.bind(this);

    this.state = {
      title: '',
      // relator: undefined,
      // date: '',
      errors: {
        title: '',
        relator: '',
        date: '',
      },
    };
  }


  onSubmit(e) {
    if (this.handleValidation()) {
      // this.props.createDegreeDemandRequest(this.props.address,...);
    } else {
      e.preventDefault();
    }
  }

  handleValidation() {
    const errors = {};
    let formIsValid = true;

    // Title
    if (this.state.title === '') {
      formIsValid = false;
      errors.title = 'Cannot be empty';
    } else if (!this.state.title.match(/^[a-zA-Z]+$/)) {
      formIsValid = false;
      errors.title = 'Only letters';
    }

    this.setState({ errors });
    return formIsValid;
  }

  handleChangeTitle(e) {
    this.setState({ title: e.target.value });
  }

  /* handleChangeRelator(selected) {
    this.setState({ relator: document.getElementById(`prof_${selected}`).innerHTML });
  }
  */
  /*
 <List selectable onSelect={this.handleChangeRelator}>
                    {this.props.relators.map((value, index) => (
                      <ListItem
                        justify="between"
                        separator="top"
                      >
                        <span id={`prof_${index}`} >
                          {value.professore}
                        </span>
                        <span className="secondary">
                          {value.ruolo}
                        </span>
                      </ListItem>
                ))}
                  </List>
 */

  render() {
    if (this.props.requestAlreadyDone === false) {
      return (
        <Form>
          <Header>
            <Heading>
            Domanda di Laurea
            </Heading>
          </Header>
          <FormFields>
            <fieldset>
              <FormField label="Titolo: ">
                <TextInput
                  id="title"
                  name="Title"
                  placeHolder="Titolo tesi"
                  onDOMChange={this.handleChangeTitle}
                />

              </FormField>
              <span style={{ color: 'red' }}>{this.state.errors.title}</span>

              <FormField label="Seleziona il referente: ">
                <t />
                <div className="box" />
              </FormField>


            </fieldset>
          </FormFields>

          <Footer justify="center" align="center" pad={{ horizontal: 'none' }} direction="row" >
            <Button
              label="Crea"
              type="submit"
              primary
              onClick={this.onSubmit}
            />
          </Footer>
        </Form>
      );
    }
    return (
      <Headline size="small">
        Richiesta già effettuata
      </Headline>
    );
  }
}

DegreeRequestComponent.propTypes = {
  // relators: PropTypes.arrayOf.isRequired,
  requestAlreadyDone: PropTypes.bool.isRequired,
  // createDegreeDemandRequest: PropTypes.func.isRequired,
};


export default DegreeRequestComponent;
