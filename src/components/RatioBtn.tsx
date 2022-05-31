import React, { FC } from 'react';
import { IconButton } from '@chakra-ui/react';
import { LockIcon, UnlockIcon } from '@chakra-ui/icons';

type ratioBtnType = {
  onClickRatio: () => void;
  ratioFlag: boolean;
};

export const RatioBtn: FC<ratioBtnType> = (props) => {
  const { onClickRatio, ratioFlag } = props;
  return (
    <>
      {ratioFlag ? (
        <IconButton
          onClick={onClickRatio}
          aria-label="Lock"
          bg="transparent"
          style={{ outline: 'none' }}
          _hover={{ background: 'transparent' }}
          _active={{ background: 'transparent' }}
          _focus={{ boxShadow: 'none' }}
          icon={<LockIcon />}
        />
      ) : (
        <IconButton
          onClick={onClickRatio}
          aria-label="Unlock"
          bg="transparent"
          _hover={{ background: 'transparent' }}
          _active={{ background: 'transparent' }}
          _focus={{ boxShadow: 'none' }}
          icon={<UnlockIcon />}
        />
      )}
    </>
  );
};
