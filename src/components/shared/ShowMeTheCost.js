import React from 'react';
import { Box, Heading, Image, Animate, Table, TableHeader, TableRow } from 'grommet';
import ethMetUnipd from '../../images/ethereum_metamask_unipd.png';

export const pricesEntries = [
  { operation: 'Deploy', price: '25€' },
  { operation: 'Create User', price: '0,38€ - 0,50€' },
  { operation: 'Delete User', price: '0,02€ - 0,05€' },
  { operation: 'Create Academic Year', price: '0,12€ - 0,18€' },
  { operation: 'Create Degree Course', price: '0,21€ - 0,26€' },
  { operation: 'Create Teaching', price: '0,21€ - 0,26€' },
  { operation: 'Degree Course Application', price: '0,02€ - 0,05€' },
  { operation: 'Create Exam', price: '0,37€ - 0,43€' },
  { operation: 'Exam Application', price: '0,02€ - 0,05€' },
  { operation: 'Publish Mark', price: '0,03€ - 0,06€' },
  { operation: 'Accept Mark', price: '0,04€ - 0,08€' },
  { operation: 'Reject Mark', price: '0,04€ - 0,08€' },
];

const ShowMeTheCost = () => (
  <Box className="PanelBox" direction="column" margin="small" separator="bottom" >
    <Box className="titleBox" align="center" alignSelf="center" colorIndex="brand" full="horizontal" >
      <Heading tag="h2" strong>
            Show Me The Cost
      </Heading>
    </Box>

    <Box className="infoBox" pad={{ horizontal: 'medium', vertical: 'small' }} >
      <Heading tag="h5" >
        This page shows you the list of the operations that Marvin can offer to their
        users with their relative gas used and cost.
      </Heading>
    </Box>

    <Box direction="row" align="center" alignSelf="center">
      <Image src={ethMetUnipd} alt="logo" size="medium" />
    </Box>

    <Box direction="row" align="center" alignSelf="center" colorIndex="light-2">
      <Animate enter={{ animation: 'fade', duration: 1000, delay: 0 }} keep >
        <Table responsive>
          <TableHeader labels={['Operation', 'Price']} />
          <tbody>
            {
              pricesEntries.map(element => (
                <TableRow key={element.operation}>
                  <td>{element.operation}</td>
                  <td>{element.price}</td>
                </TableRow>
              ))
            }
          </tbody>
        </Table>
      </Animate>
    </Box>
  </Box>
);

export default ShowMeTheCost;
