import React from 'react';
import PropTypes from 'prop-types';
import { Section, Box, Label, Heading, Tiles, Tile, Paragraph, Image } from 'grommet';
import FormNextLinkIcon from 'grommet/components/icons/base/FormNextLink';
import ethMetUnipd from '../../images/ethereum_metamask_unipd.png';

const HomeComponent = props => (
  <Box
    className="PanelBox"
    direction="column"
    margin="small"
  >
    <Box
      className="PanelHeader"
      direction="row"
      justify="start"
      align="center"
      separator="horizontal"
    >
      <FormNextLinkIcon />
      <Label>
        Admin home
      </Label>
    </Box>

    <Box
      className="PanelInfo"
      direction="column"
      justify="center"
      align="center"
      separator="bottom"
    >
      <Section>
        Welcome to your private area admin.
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
  user: PropTypes.arrayOf.isRequired,
};


export default HomeComponent;
