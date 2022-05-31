import React, { FC } from 'react';
import { GuideModal } from '../components/GuideModal';
import { Box, Flex, Spacer, Image } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';
import logoImg from '../assets/images/logo.png';

export const Header: FC = () => {
  return (
    <Flex as="header" bgColor="white" align="center" p={4}>
      <Box>
        <NavLink to="/">
          <Image src={logoImg} w={220} alt="縦横比率維持してリサイズ" />
        </NavLink>
      </Box>
      <Spacer />
      <Box>
        <GuideModal />
      </Box>
    </Flex>
  );
};
