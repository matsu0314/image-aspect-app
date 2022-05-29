import React, { FC } from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Box, Grid, GridItem } from '@chakra-ui/react';

type layoutType = {
  children?: React.ReactNode;
};

export const Layout: FC<layoutType> = (props) => {
  return (
    <Grid templateRows="auto 1fr auto" h="100vh">
      <GridItem>
        <Header />
      </GridItem>
      <GridItem>
        <Box as="main">{props.children}</Box>
      </GridItem>
      <GridItem>
        <Footer />
      </GridItem>
    </Grid>
  );
};
