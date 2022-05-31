import React from 'react';
import guideImg1 from '../assets/images/guide1.gif';

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
          <ModalHeader color="green.600">使い方</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <p>ひひひ</p>
            <img src={guideImg1} alt="" />
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
