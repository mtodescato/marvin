import React from 'react';
import PropTypes from 'prop-types';
import { Section, Box, Heading, Tiles, Tile, Paragraph, Image } from 'grommet';
import ethMetUnipd from '../../images/ethereum_metamask_unipd.png';

const HomeComponent = props => (
  <Box
    className="PanelBox"
    direction="column"
    margin="small"
  >
    <Box
      className="PanelInfo"
      direction="column"
      justify="center"
      align="center"
      separator="bottom"
    >
      <Section>
        Welcome to your private area {props.message}.
      </Section>

      <Box direction="row" align="center">
        <Image src={ethMetUnipd} alt="logo" size="medium" />
      </Box>

      <Tiles
        fill
        colorIndex="light-2"
      >
        <Tile
          separator="top"
          align="start"
          pad={{ horizontal: 'small' }}
        >
          <Heading
            tag="h4"
            strong
            margin="none"
          >
        User ID:
          </Heading>
          <Box pad="small">
            <Paragraph margin="none">
              {props.user.matricola}
            </Paragraph>
          </Box>
        </Tile>
        <Tile
          separator="top"
          align="start"
        >
          <Heading
            tag="h4"
            strong
            margin="none"
          >
          Name:
          </Heading>
          <Box pad="small">
            <Paragraph margin="none">
              {props.user.name}
            </Paragraph>
          </Box>
        </Tile>
        <Tile
          separator="top"
          align="start"
          colorIndex="light-2"
        >
          <Heading
            tag="h4"
            strong
            margin="none"
          >
          Surname:
          </Heading>
          <Box pad="small">
            <Paragraph margin="none">
              {props.user.surname}
            </Paragraph>
          </Box>
        </Tile>
        <Tile
          separator="top"
          align="start"
          colorIndex="light-2"
        >
          <Heading
            tag="h4"
            strong
            margin="none"
          >
          Address:
          </Heading>
          <Box pad="small">
            <Paragraph margin="none">
              {props.user.address}
            </Paragraph>
          </Box>
        </Tile>
      </Tiles>
    </Box>
  </Box>
);

HomeComponent.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    surname: PropTypes.string.isRequired,
    matricola: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
  }).isRequired,
  message: PropTypes.string.isRequired,
};


export default HomeComponent;
