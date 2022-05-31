import React, { FC } from 'react';
import { Center, Flex } from '@chakra-ui/react';
export const Footer: FC = () => {
  return (
    <footer
      style={{
        position: 'relative',
        bottom: 0,
        left: 0,
        right: 0,
        height: '50px',
        marginTop: '20px',
      }}
    >
      <Flex bg="gray.700" color="gray.50" p={4} align="center">
        <Center fontSize={12} w="100%" h="100%">
          <span>©2022 縦横比を保持してリサイズ for donguri</span>
        </Center>
      </Flex>
    </footer>
  );
};
