import { shapeType, actionType } from '../types';

export const useShapeReducer = (calcFunc: any, calcRatio: any) => {
  const shapeReducer = (state: shapeType, action: actionType) => {
    switch (action.type) {
      case 'WIDTH':
        const objScaleWidth = calcFunc(state, action.width, action.type);

        if (action.scaleFlag) {
          objScaleWidth.height = calcRatio(state, objScaleWidth, action.type);
        }

        const calcObjWidth = {
          scale: objScaleWidth,
          scaleFlag: action.scaleFlag,
        };
        return calcObjWidth;
      case 'HEIGHT':
        const objScaleHeight = calcFunc(state, action.height, action.type);
        if (action.scaleFlag) {
          objScaleHeight.width = calcRatio(state, objScaleHeight, 'HEIGHT');
        }
        const calcObjHeight = {
          scale: objScaleHeight,
          scaleFlag: action.scaleFlag,
        };
        return calcObjHeight;

      case 'RESET':
        const objScaleReset = { width: '640', height: '480' };
        const calcObjReset = {
          scale: objScaleReset,
          scaleFlag: action.scaleFlag,
        };
        return calcObjReset;
    }
  };

  return { shapeReducer };
};
