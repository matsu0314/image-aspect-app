export type scaleKeyWord = 'WIDTH' | 'HEIGHT' | 'RESET';

export type shapeType = {
  scale: {
    width: string;
    height: string;
  };
  scaleFlag: boolean;
};
export type actionType = {
  type: scaleKeyWord;
  width: string;
  height: string;
  scaleFlag: boolean;
};
export type returnStateType = {
  width: string;
  height: string;
};
