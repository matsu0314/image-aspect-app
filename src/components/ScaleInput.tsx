import React, { FC } from 'react';
import { RatioBtn } from './RatioBtn';
import { ResetBtn } from './ResetBtn';
import {
  Input,
  InputGroup,
  InputLeftElement,
  Flex,
  Spacer,
  Box,
} from '@chakra-ui/react';

type scaleInputType = {
  inputWidth: string;
  inputHeight: string;
  onChangeWidth: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeHeight: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlurWidth: (e: React.FocusEvent<HTMLInputElement>) => void;
  onBlurHeight: (e: React.FocusEvent<HTMLInputElement>) => void;
  onClickRatio: () => void;
  onClickReset: () => void;
  ratioFlag: boolean;
};

export const ScaleInput: FC<scaleInputType> = (props) => {
  const {
    inputWidth,
    onChangeWidth,
    onBlurWidth,
    inputHeight,
    onChangeHeight,
    onBlurHeight,
    onClickRatio,
    onClickReset,
    ratioFlag,
  } = props;
  return (
    <>
      <Flex justify="center" align="center" pl={4} pr={4} pt={6}>
        <Box>
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              color="gray.300"
              fontSize="1em"
              children="W"
            />
            <Input
              htmlSize={8}
              width="auto"
              bgColor="white"
              value={inputWidth}
              onChange={onChangeWidth}
              onBlur={onBlurWidth}
            />
          </InputGroup>
        </Box>
        <Box>
          <RatioBtn
            onClickRatio={onClickRatio}
            ratioFlag={ratioFlag}
          ></RatioBtn>
        </Box>
        <Box>
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              color="gray.300"
              fontSize="1em"
              children="H"
            />
            <Input
              htmlSize={8}
              width="auto"
              bgColor="white"
              value={inputHeight}
              onChange={onChangeHeight}
              onBlur={onBlurHeight}
            />
          </InputGroup>
        </Box>
      </Flex>
      <Flex justify="center" align="center">
        <ResetBtn onClickReset={onClickReset}></ResetBtn>
      </Flex>
    </>
  );
};
