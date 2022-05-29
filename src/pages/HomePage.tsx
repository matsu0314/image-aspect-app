import React, { FC, useReducer, useState } from 'react';
import { Layout } from '../components/Layout';
import { Result } from '../components/Result';
import { ScaleInput } from '../components/ScaleInput';
import { useCalc } from '../hooks/useCalc';
import { useShapeReducer } from '../hooks/useShapeReducer';
import { shapeType } from '../types';

//初期値
const shapeInit: shapeType = {
  scale: {
    width: '640',
    height: '480',
  },
  scaleFlag: false,
};

export const HomePage: FC = () => {
  const { calcFunc, calcRatio } = useCalc();
  const { shapeReducer } = useShapeReducer(calcFunc, calcRatio);
  const [shape, dispatch] = useReducer(shapeReducer, shapeInit);
  const [ratioFlag, setRatioFlag] = useState(true);
  const [inputWidth, setInputWidth] = useState(shapeInit.scale.width);
  const [inputHeight, setInputHeight] = useState(shapeInit.scale.height);

  // カーソルがフォームから離れた時(width)
  const onBlurWidth = (e: React.FocusEvent<HTMLInputElement>) => {
    const target = e.target;
    if (shape!.scale.width === target.value) return;

    // shapeReducer()に送信
    dispatch({
      type: 'WIDTH',
      width: target.value,
      height: shape!.scale.height,
      scaleFlag: ratioFlag,
    });
    // 値として計算式を入力した時の結果（計算でない場合、元の値を返す）
    const resultValue = calcFunc(shape, target.value, 'WIDTH');
    // 比率維持がtrueだったらheightのフォーム値も更新
    if (ratioFlag) {
      setInputHeight(() => String(calcRatio(shape!, resultValue, 'WIDTH')));
    }
    // widthのフォーム値を更新
    setInputWidth(resultValue.width);
  };

  // カーソルがフォームから離れた時(height)
  const onBlurHeight = (e: React.FocusEvent<HTMLInputElement>) => {
    const target = e.target;
    if (shape!.scale.height === target.value) return;
    // shapeReducer()に送信
    dispatch({
      type: 'HEIGHT',
      width: shape!.scale.width,
      height: target.value,
      scaleFlag: ratioFlag,
    });
    // 値として計算式を入力した時の結果（計算でない場合、元の値を返す）
    const resultValue = calcFunc(shape, target.value, 'HEIGHT');
    // 比率維持がtrueだったらwidthのフォーム値も更新
    if (ratioFlag) {
      setInputWidth(() => String(calcRatio(shape!, resultValue, 'HEIGHT')));
    }
    // heightのフォーム値を更新
    setInputHeight(resultValue.height);
  };

  const onChangeWidth = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target;
    setInputWidth(target.value);
  };
  const onChangeHeight = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target;
    setInputHeight(target.value);
  };
  const onClickRatio = () => {
    setRatioFlag(!ratioFlag);
  };
  const onClickReset = () => {
    dispatch({
      type: 'RESET',
      width: shapeInit.scale.width,
      height: shapeInit.scale.height,
      scaleFlag: ratioFlag,
    });
    setInputWidth(shapeInit.scale.width);
    setInputHeight(shapeInit.scale.height);
  };

  return (
    <Layout>
      <ScaleInput
        inputWidth={inputWidth}
        inputHeight={inputHeight}
        onChangeWidth={onChangeWidth}
        onChangeHeight={onChangeHeight}
        onBlurWidth={onBlurWidth}
        onBlurHeight={onBlurHeight}
        onClickRatio={onClickRatio}
        onClickReset={onClickReset}
        ratioFlag={ratioFlag}
      />
      <Result width={shape!.scale.width} height={shape!.scale.height} />
    </Layout>
  );
};
