import React from 'react';

import { Section } from '../../styles/GlobalComponents';
import { highlights } from '../../constants/constants';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const Acomplishments = () => (
  <Section>
    <Boxes>
      {highlights.map((card, index) => (
        <Box key={index}>
          <BoxNum>{card.number}</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
  </Section>
);

export default Acomplishments;
