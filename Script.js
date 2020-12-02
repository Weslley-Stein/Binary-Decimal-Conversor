//  DOMs
let tradeButton = document.getElementById("tradeButton");
let operationType = document.getElementById("Title");
let convertButton = document.getElementById("ConvertButton");
let inputNum = document.getElementById("BinaryInput");
let result = document.getElementById("ResultOutput");

let tradeButtonFunction = () => {
  if (tradeButton.value === "Binary for Decimal") {
    tradeButton.value = "Decimal for Binary";
    operationType.innerHTML = "Binary for Decimal";
    convertButton.name = "BinaryForDecimal";
    result.value = "";
    inputNum.value = "";
  } else {
    tradeButton.value = "Binary for Decimal";
    operationType.innerHTML = "Decimal for Binary";
    convertButton.name = "DecimalForBinary";
    result.value = "";
    inputNum.value = "";
  }
};

let convertDec2Bin = () => {
  let decNum = 0;
  decNum = inputNum.value;
  var resultBin = [];

  while (decNum >= 2) {
    resultBin.push(decNum % 2);
    decNum = Math.floor(decNum / 2);
  }

  resultBin.push(decNum);
  resultBin.reverse();
  result.value = resultBin.join("");
};

let convertBin2Dec = () => {
  let binNum = 0;
  binNum = inputNum.value;

  let binNumArray = Array(...binNum);

  let binResult = [];

  const reversedBinNumArray = Array(...binNumArray.reverse());

  reversedBinNumArray.forEach((digit, index) => {
    binResult.unshift(digit * 2 ** index);

    binResult.reduce((a, b) => {
      return (result.value = a + b);
    });
  });
};

let conversor = () => {
  if (convertButton.name == "DecimalForBinary") {
    convertDec2Bin();
  } else {
    convertBin2Dec();
  }
};
