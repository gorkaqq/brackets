module.exports = function check(str, bracketsConfig) {
  const stack = [];
  const openBrackets = [];
  const closeBrackets = {};
  const sameBrackets = [];

  bracketsConfig.forEach((config) => {
    const [open, close] = config;
    openBrackets.push(open);
    closeBrackets[close] = open;
    if (open === close) {
      sameBrackets.push(open);
    }
  });

  for (let i = 0; i < str.length; i += 1) {
    const currentSymbol = str[i];

    if (openBrackets.includes(currentSymbol)) {
      if (sameBrackets.includes(currentSymbol)) {
        const topElement = stack[stack.length - 1];

        if (stack.length && topElement === currentSymbol) {
          stack.pop();
        } else {
          stack.push(currentSymbol);
        }
      } else {
        stack.push(currentSymbol);
      }
    } else {
      if (stack.length === 0) {
        return false;
      }

      const topElement = stack[stack.length - 1];

      if (closeBrackets[currentSymbol] === topElement) {
        stack.pop();
      } else {
        return false;
      }
    }
  }

  return stack.length === 0;
};
