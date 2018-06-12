import React from 'react';
import { Box, Heading, Image, Animate, Table, TableHeader, TableRow } from 'grommet';
import ethMetUnipd from '../../images/ethereum_metamask_unipd.png';

export const pricesEntries = [
  { operation: 'Usettttrs', gas: '4892389', price: '33' },
  { operation: 'Uestttttters', gas: '4892389', price: '33' },
  { operation: 'Usettttttttttttters', gas: '4892389', price: '33' },
  { operation: 'Usyyyyyyyyyyeers', gas: '4892389', price: '33' },
  { operation: 'Ustyers', gas: '4892389', price: '33' },
  { operation: 'Use34ers', gas: '4892389', price: '33' },
  { operation: 'Users345', gas: '4892389', price: '33' },
  { operation: 'Usettrs', gas: '4892389', price: '33' },
  { operation: 'Use345rs', gas: '4892389', price: '33' },
  { operation: 'Useyyyyyyyrs', gas: '4892389', price: '33' },
  { operation: 'Use657rs', gas: '4892389', price: '33' },
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
              This page shows you the cost etc etc TODO.
      </Heading>
    </Box>

    <Box direction="row" align="center" alignSelf="center">
      <Image src={ethMetUnipd} alt="logo" size="medium" />
    </Box>

    <Animate enter={{ animation: 'fade', duration: 1000, delay: 0 }} keep >
      <Table responsive>
        <TableHeader labels={['Operation', 'Gas Used', 'Price']} />
        <tbody>
          {
            pricesEntries.map(element => (
              <TableRow key={element.operation}>
                <td>{element.operation}</td>
                <td>{element.gas}</td>
                <td>{element.price}€</td>
              </TableRow>
            ))
          }
        </tbody>
      </Table>
    </Animate>
  </Box>
);

export default ShowMeTheCost;
