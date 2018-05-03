import React from 'react';
import { Form, Button, Header, Heading, FormFields, Footer, FormField, TextInput, List, ListItem, Headline } from 'grommet';
import PropTypes from 'prop-types';
import '../../css/degreeRequest.css';

class DegreeRequest extends React.Component {
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
    this.handleChangeTitle = this.handleChangeTitle.bind(this);
    this.handleChangeRelator = this.handleChangeRelator.bind(this);
    this.handleValidation = this.handleValidation.bind(this);

    this.state = {
      title: 'undefined',
      relator: 'undefined',
      errors: {
        title: '',
        relator: '',
      },
    };
  }

  onSubmit(event) {
    const request = {
      title: this.state.title,
      relator: this.state.relator,
    };
    if (this.handleValidation()) {
      this.props.actions.createDegreeRequestRequest(request);
    } else {
      event.preventDefault();
    }
  }

  handleValidation() {
    const errors = {};
    let formIsValid = true;

    // Title
    if (this.state.title === 'undefined') {
      formIsValid = false;
      errors.title = 'Cannot be empty';
    } else if (!this.state.title.match(/^[a-zA-Z]+$/)) {
      formIsValid = false;
      errors.title = 'Only letters';
    }

    // Relator
    if (this.state.relator === 'undefined') {
      formIsValid = false;
      errors.relator = 'Select a relator';
    }

    this.setState({ errors });
    return formIsValid;
  }

  handleChangeTitle(e) {
    this.setState({ title: e.target.value });
  }

  handleChangeRelator(selected) {
    this.setState({ relator: document.getElementById(`prof_${selected}`).innerHTML });
  }

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
              <t />

              <FormField label="Seleziona il referente: ">
                <t />
                <div className="box">
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
                </div>
              </FormField>
              <span style={{ color: 'red' }}>{this.state.errors.relator}</span>

            </fieldset>
          </FormFields>
          <Footer pad={{ vertical: 'medium' }} >
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

DegreeRequest.propTypes = {
  relators: PropTypes.arrayOf.isRequired,
  requestAlreadyDone: PropTypes.bool.isRequired,
  actions: PropTypes.shape({
    createDegreeRequestRequest: PropTypes.func.isRequired,
  }).isRequired,
};


export default DegreeRequest;
