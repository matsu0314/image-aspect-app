import React, { FC } from 'react';
import { Button, Box } from '@chakra-ui/react';
import { LockIcon, UnlockIcon } from '@chakra-ui/icons';

type resetBtnType = {
  onClickReset: () => void;
};

export const ResetBtn: FC<resetBtnType> = (props) => {
  const { onClickReset } = props;
  return (
    <Box pl="2">
      <Button
        colorScheme="gray"
        variant="ghost"
        _focus={{ boxShadow: 'none' }}
        size="xs"
        value="reset"
        onClick={onClickReset}
      >
        reset
      </Button>
    </Box>
  );
};
