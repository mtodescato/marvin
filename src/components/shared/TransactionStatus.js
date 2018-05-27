import React from 'react';
import { Box, Animate } from 'grommet';
import Checkmark from 'grommet/components/icons/base/Checkmark';
// import unwebLogo from '../../images/unipd.png';

const TransactionStatus = () => (
  <Animate
    enter={{ animation: 'slide-down', duration: 1000, delay: 0 }}
    keep
  >
    <Box
      colorIndex="ok"
      direction="row"
      pad={{ horizontal: 'medium', vertical: 'small' }}
    >
      <Checkmark colorIndex="light-1" />
      Transaction sent, if you want to complete the user creation you have to accept the
      transaction on yourMetamask bla bla bla TODO
    </Box>
  </Animate>
);

export default TransactionStatus;
