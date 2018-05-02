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

    this.state = {
      title: 'undefined',
      relator: 'undefined',
    };
  }

  onSubmit() {
    const request = {
      title: this.state.title,
      relator: this.state.relator,
    };
    this.props.actions.createDegreeRequestRequest(request);
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
