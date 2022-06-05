import React from 'react';
import { Layout } from '../components/Layout';

import { Box, Text, Flex, Image } from '@chakra-ui/react';

import notfoundImg from '../assets/images/notfound.png';

export const NotFoundPage = () => {
  return (
    <Layout>
      <Flex justify="center" align="center" h="calc(100% - 76px)" mt={4} mb={4}>
        <Flex justify="center" align="center">
          <Box h={200}>
            <Image src={notfoundImg} w={220} alt="NOT FOUND" />
            <Text>ページが見つかりませんでした。</Text>
          </Box>
        </Flex>
      </Flex>
    </Layout>
  );
};
