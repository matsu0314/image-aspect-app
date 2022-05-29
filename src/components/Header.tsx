import React, { FC } from 'react';
import { Box, Flex, Spacer, Image, textDecoration } from '@chakra-ui/react';
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
        <NavLink
          to="/guide"
          style={({ isActive }) => {
            return {
              fontWeight: isActive ? 700 : 400,
              textDecoration: isActive ? 'none' : 'underline',
            };
          }}
        >
          使い方
        </NavLink>
      </Box>
    </Flex>
  );
};
