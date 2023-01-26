module.exports = function check(str, bracketsConfig) {
  let stack = [];

  let config = bracketsConfig.length;

  for (let i = 0; i < str.length; i++) {
    let currentSymbol = str[i];
    if (currentSymbol == '|' || currentSymbol == '7' || currentSymbol == '8') {
      if (stack[stack.length - 1] == currentSymbol) {
        stack.pop();
      } else {
        stack.push(currentSymbol);
      }
    } else {
      for (let j = 0; j < config; j++) {
        if (bracketsConfig[j][0] === currentSymbol) {
          stack.push(currentSymbol);
        } else if (bracketsConfig[j][1] === currentSymbol) {
          if (
            stack.length !== 0 &&
            bracketsConfig[j][0] === stack[stack.length - 1]
          ) {
            stack.pop();
          } else {
            return false;
          }
        }
      }
    }
  }
  return stack.length === 0;
};
