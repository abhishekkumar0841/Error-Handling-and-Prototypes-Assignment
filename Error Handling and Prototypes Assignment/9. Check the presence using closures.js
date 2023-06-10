function numberChecker(arr){
    return (num) => {
        let isNum = false;
        for(let i = 0; i < arr.length; i++){
            if(arr[i] === num){
                isNum = true;
                break;
            }
        }
        return isNum;
    }
}

const myArr = [1, 2, 3, 4, 5];
const checkNum = numberChecker(myArr);
console.log(checkNum(4))
console.log(checkNum(8))
