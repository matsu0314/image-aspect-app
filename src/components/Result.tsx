import React, { FC } from 'react';
import { Flex } from '@chakra-ui/react';

type resultType = {
  width: string;
  height: string;
};

export const Result: FC<resultType> = (props) => {
  const { width, height } = props;
  return (
    <Flex justify="center" align="center" h="calc(100% - 76px)" mt={4} mb={4}>
      <Flex justify="center" align="center">
        <div
          style={{
            width: `${width}px`,
            height: `${height}px`,
          }}
          className="result-shape"
        ></div>
      </Flex>
    </Flex>
  );
};
