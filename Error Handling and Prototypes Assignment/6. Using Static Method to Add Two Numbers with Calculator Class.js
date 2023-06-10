class Calculator{
    constructor(num1, num2){
        this.num1 = num1;
        this.num2 = num2;
    }

    static add(n1, n2){
        return n1 + n2;
    }
}

const calc = Calculator.add(5, 10);
console.log(calc)