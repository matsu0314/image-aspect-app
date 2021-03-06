import { shapeType, returnStateType, scaleKeyWord } from '../types';
import { useStringCalc } from './useStringCalc';

export const useCalc = () => {
  const { stringCalc } = useStringCalc();

  //　全角を半角に変換
  const replaceFullToHalf = (str: string) => {
    let hankaku = function (str: string) {
      return String.fromCharCode(str.charCodeAt(0) - 0xfee0);
    };
    str = str.replace(/[Ａ-Ｚａ-ｚ０-９＋＊／％]/g, hankaku);
    str = str.replace(/[-－﹣−‐⁃‑‒–—﹘―⎯⏤ーｰ─━]/g, '-');
    str = str.replace(/[ts　]/g, '');
    return str;
  };

  //　比率を維持してリサイズ
  const calcRatio = (
    shapeState: shapeType,
    objScale: returnStateType,
    type: scaleKeyWord
  ) => {
    let resultRatio = 0;
    let calcValue =
      type === 'WIDTH' ? shapeState.scale.width : shapeState.scale.height;

    if (type === 'WIDTH') {
      const ratioWidth = Number(objScale.width) / Number(calcValue);
      resultRatio = Math.floor(Number(objScale.height) * ratioWidth);
    } else if (type == 'HEIGHT') {
      const ratioHeight = Number(objScale.height) / Number(calcValue);
      resultRatio = Math.floor(Number(objScale.width) * ratioHeight);
    }
    return resultRatio;
  };
  //　%が入力された時の計算結果
  const calcPercent = (
    shapeState: shapeType,
    actionScale: string,
    type: scaleKeyWord
  ) => {
    // ％入力前の値（WIDTHかHEIGHT）
    let calcValue =
      type === 'WIDTH' ? shapeState.scale.width : shapeState.scale.height;
    // %を削除して数字だけ取得
    let percentNumber = actionScale.slice(0, -1);
    let formula = (Number(percentNumber) / 100) * Number(calcValue);
    return Math.floor(formula).toString();
  };

  // 値として計算を入力した時の計算結果
  const calcFunc = (
    shapeState: shapeType,
    actionScale: string,
    type: scaleKeyWord
  ) => {
    //　全角を半角に変換
    const calcNumber = replaceFullToHalf(actionScale);
    // 最終的に返却するオブジェクトの初期値
    let returnState: returnStateType = { width: '', height: '' };

    try {
      // 計算結果（初期値）
      let resultScale = '';
      // 値に%が含まれていたら
      if (calcNumber.indexOf('%') !== -1) {
        resultScale = calcPercent(shapeState, calcNumber, type);
        //それ以外
      } else {
        let formula = stringCalc(calcNumber);
        resultScale = String(formula);
      }

      if (type === 'WIDTH') {
        returnState = {
          width: resultScale,
          height: shapeState.scale.height,
        };
      } else if (type === 'HEIGHT') {
        returnState = {
          width: shapeState.scale.width,
          height: resultScale,
        };
      }
    } catch (error) {
      console.log(error);
      returnState = {
        width: shapeState.scale.width,
        height: shapeState.scale.height,
      };
    } finally {
      return returnState;
    }
  };

  return { calcRatio, calcFunc };
};
