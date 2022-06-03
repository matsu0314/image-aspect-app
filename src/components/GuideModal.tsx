import React from 'react';
import guideImg1 from '../assets/images/guide1.gif';
import guideImg2 from '../assets/images/guide2.png';

import { LockIcon } from '@chakra-ui/icons';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  ListItem,
  UnorderedList,
  Text,
} from '@chakra-ui/react';

export const GuideModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button
        onClick={onOpen}
        bg="BlackAlpha.200"
        style={{ outline: 'none' }}
        _hover={{ background: 'transparent' }}
        _active={{ background: 'transparent' }}
        _focus={{ boxShadow: 'none' }}
      >
        使い方
      </Button>
      <Modal isCentered onClose={onClose} isOpen={isOpen} size={'xl'}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader color="white" bgColor={'blue.500'}>
            オブジェクトの縦横比を保持してリサイズします
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <UnorderedList mt={3}>
              <ListItem mb={4}>
                <Text mb={2}>
                  入力した値でオブジェクトの比率が計算されます。
                  <br />
                  計算式を入力すれば計算結果が反映されます。
                </Text>
                <img src={guideImg1} alt="ガイド１" />
                <br />
                パーセント記号（％）を入力すれば値の割合が反映されます。
                <img src={guideImg2} alt="ガイド２" />
              </ListItem>
              <ListItem>
                <Text mb={2}>
                  縦横比保持を解除するには
                  <LockIcon />
                  をクリックします。
                </Text>
              </ListItem>
            </UnorderedList>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="gray" mr={3} onClick={onClose}>
              閉じる
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
