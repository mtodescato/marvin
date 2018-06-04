import React from 'react';
import PropTypes from 'prop-types';
import { Box, Table, TableHeader, Heading } from 'grommet';
import YearEntry from './YearEntry';

const ListYearsComponent = ({ size, years }) => (
  <Box className="PanelBox" direction="column" margin="small" separator="bottom" >
    <Box className="searchBox" size="medium" pad={{ horizontal: 'medium', vertical: 'small' }} >
      <Heading tag="h4" >
        Academic Years found: {size}
      </Heading>
    </Box>

    <Box
      className="tableBox"
      size="xlarge"
      colorIndex="light-2"
      separator="horizontal"
      pad="small"
      align="center"
      alignSelf="center"
    >
      <Table
        responsive
        selectable
      >
        <TableHeader labels={['#', 'Academic Year', 'Address']} />
        <tbody>
          {
            years.map((element, index) => (
              <YearEntry
                key={[element.address]}
                index={index}
                {...element}
              />
            ))
          }
        </tbody>
      </Table>
    </Box>
  </Box>
);

ListYearsComponent.propTypes = {
  years: PropTypes.arrayOf(PropTypes.shape({
    year: PropTypes.number.isRequired,
    address: PropTypes.string.isRequired,
  })).isRequired,
  size: PropTypes.number.isRequired,
};

export default ListYearsComponent;
