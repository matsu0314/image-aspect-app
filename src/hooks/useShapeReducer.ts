import { shapeType, actionType } from '../types';

export const useShapeReducer = (calcFunc: any, calcRatio: any) => {
  const shapeReducer = (state: shapeType, action: actionType) => {
    switch (action.type) {
      case 'WIDTH':
        // 値として計算式を入力した時の結果（計算でない場合、元の値を返す）
        const objScaleWidth = calcFunc(state, action.width, action.type);

        //　縦横比にチェックが付いていたら
        if (action.scaleFlag) {
          objScaleWidth.height = calcRatio(state, objScaleWidth, action.type);
        }
        const calcObjWidth = {
          scale: objScaleWidth,
          scaleFlag: action.scaleFlag,
        };
        return calcObjWidth;
      case 'HEIGHT':
        // 値として計算式を入力した時の結果（計算でない場合、元の値を返す）
        const objScaleHeight = calcFunc(state, action.height, action.type);

        //　縦横比にチェックが付いていたら
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
