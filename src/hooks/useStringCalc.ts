type OparateType = {
  add: '+';
  sub: '-';
  div: '/';
  mlt: '*';
  priorityGroup?: any;
};

export const useStringCalc = () => {
  const stringCalc = (inputCalc: string) => {
    // 計算式でない場合、値をそのまま返す
    if (inputCalc.match(/[\+\-\/\*]/) == null) return inputCalc;

    // 演算子はオブジェクトで管理
    let OpSymbol: OparateType = {
      add: '+',
      sub: '-',
      div: '/',
      mlt: '*',
    };

    // 優先する計算を分ける（＊/が優先）
    OpSymbol.priorityGroup = [
      [[OpSymbol.mlt], [OpSymbol.div]],
      [[OpSymbol.add], [OpSymbol.sub]],
    ];

    // 計算に不要な文字列を削除
    inputCalc = inputCalc.replace(/[^0-9%^*\/()\-+.]/g, '');

    let output: number = 0;
    for (let i = 0, n = OpSymbol.priorityGroup.length; i < n; i++) {
      // 文字列から計算式を取り出す。例：１＋２　（先に*/を計算）
      let re = new RegExp(
        '(\\d+\\.?\\d*)([\\' +
          OpSymbol.priorityGroup[i].join('\\') +
          '])(\\d+\\.?\\d*)'
      );
      // lastIndexを初期化（最初から検索）
      re.lastIndex = 0;

      // 優先順で計算する
      while (re.test(inputCalc)) {
        let opNum: RegExpMatchArray | null = inputCalc.match(re);
        // 文字列の数字と演算子を分割する
        output = _calculate(opNum![1], opNum![2], opNum![3], OpSymbol);
        if (isNaN(output) || !isFinite(output)) return String(output);
        inputCalc = inputCalc.replace(re, String(output));
      }
    }
    return String(output);
  };
  return { stringCalc };
};

// 文字列を計算して返す
const _calculate = (
  a: string,
  op: string,
  b: string,
  OpSymbol: OparateType
) => {
  let aNum = Number(a) * 1;
  let bNum = Number(b) * 1;

  // 計算結果の初期値
  let result: number = 0;

  switch (op) {
    case OpSymbol.add:
      result = aNum + bNum;
      break;
    case OpSymbol.sub:
      result = aNum - bNum;
      break;
    case OpSymbol.div:
      result = aNum / bNum;
      break;
    case OpSymbol.mlt:
      result = aNum * bNum;
      break;
    default:
      result = 0;
  }
  return result;
};
