import React from 'react';
import {
  Form,
  Button,
  Header,
  Heading,
  FormFields,
  Footer,
  FormField,
  TextInput,
} from 'grommet';

class DegreeRequest extends React.Component {
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
    this.handleChangeTitle = this.handleChangeTitle.bind(this);

    this.state = {
      title: 'undefined',
    };
  }

  onSubmit() {
    const request = {
      title: this.state.title,
    };
    // this.props.actions.createDegreeRequestRequest(request);
    alert(request.title);
  }

  handleChangeTitle(e) {
    this.setState({ title: e.target.value });
  }
  render() {
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
          </fieldset>
        </FormFields>
        <Footer pad={{ vertical: 'medium' }}>
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
}

export default DegreeRequest;
