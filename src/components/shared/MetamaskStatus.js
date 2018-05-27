import React from 'react';
import { Image, Section, Button } from 'grommet';
import PropTypes from 'prop-types';
import loading from '../../images/loading.gif';
import notFound from '../../images/404.gif';

class MetamaskStatus extends React.Component {
  componentWillMount() {
    if (this.props.initializeValue) {
      this.props.tryAgainRequest(this.props.initializeValue);
    } else this.props.tryAgainRequest();
  }
  render() {
    switch (this.props.status) {
      case 'PENDING':
        return (
          <Section
            align="center"
          >
            <Image src={loading} size="medium" />
          </Section>
        );
      case 'ERRORED':
        return (
          <Section
            align="center"
          >
            <Image src={notFound} size="large" />
            <Button onClick={() => this.props.tryAgainRequest()} label="Try again" />
          </Section>
        );
      default:
        return (
          <Section
            align="center"
          >
            <Image src={notFound} size="large" />
            <Button onClick={() => this.props.tryAgainRequest()} label="Try again" />
          </Section>
        );
    }
  }
}

MetamaskStatus.propTypes = {
  initializeValue: PropTypes.string,
  tryAgainRequest: PropTypes.func.isRequired,
  status: PropTypes.string.isRequired,
};

MetamaskStatus.defaultProps = {
  initializeValue: '',
};


export default MetamaskStatus;
