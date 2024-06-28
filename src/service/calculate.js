// Hàm tính toán biểu thức trong ngoặc đơn trước, sau đó là nhân/chia và cuối cùng là cộng/trừ
export function evaluateExpression (expression) {
    const compute = (tokens) => {
        const operators = {
            '+': (a, b) => a + b,
            '-': (a, b) => a - b,
            '*': (a, b) => a * b,
            '/': (a, b) => a / b,
        };

        const precedence = {
            '+': 1,
            '-': 1,
            '*': 2,
            '/': 2,
        };

        let outputQueue = [];
        let operatorStack = [];

        const applyOperator = () => {
            const operator = operatorStack.pop();
            const b = outputQueue.pop();
            const a = outputQueue.pop();
            outputQueue.push(operators[operator](a, b));
        };

        for (let token of tokens) {
            if (!isNaN(token)) {
                outputQueue.push(parseFloat(token));
            } else if (token in operators) {
                while (
                    operatorStack.length &&
                    precedence[operatorStack[operatorStack.length - 1]] >= precedence[token]
                ) {
                    applyOperator();
                }
                operatorStack.push(token);
            } else if (token === '(') {
                operatorStack.push(token);
            } else if (token === ')') {
                while (operatorStack[operatorStack.length - 1] !== '(') {
                    applyOperator();
                }
                operatorStack.pop();
            }
        }

        while (operatorStack.length) {
            applyOperator();
        }

        return outputQueue[0];
    };

    const tokenize = (expr) => {
        const regex = /\d+(\.\d+)?|[()+\-*/]/g;
        return expr.match(regex);
    };

    const tokens = tokenize(expression);
    return compute(tokens);
};