import React, { FC, useEffect, useState } from 'react';
import { GuideModal } from '../components/GuideModal';
import { Box, Flex, Spacer, Image, Text } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';
import logoImg from '../assets/images/logo.png';

export const Header: FC = () => {
  const [isInitial, setIsInitial] = useState(false);
  useEffect(() => {
    if (navigator.userAgent.match(/(iPhone|iPad|iPod|Android)/i)) {
      setIsInitial(true);
    }
  });
  return (
    <>
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
      {isInitial && (
        <Text color="red.600" size="xs" bgColor="red.100" p={3}>
          このアプリはPCで操作することを想定しています。PCでご確認ください。
        </Text>
      )}
    </>
  );
};
