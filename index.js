function printParenthesis(str, n) { 
    if(n > 0) {
        _printParenthesis(str, 0, n, 0, 0);
    } 
}  

function _printParenthesis(str, pos, n, open, close) { 
    if(close == n) {
        console.log(str);
    }
    else { 
        let strArr = str.split("");
        if(open > close) {
            strArr[pos] = ')';
            _printParenthesis(strArr.join(""), pos + 1, n, open, close + 1); 
        } 
          
        if(open < n) {
            strArr[pos] = '(';
            _printParenthesis(strArr.join(""), pos + 1, n, open + 1, close); 
        } 
    } 
} 
 
let n = 3; // เปลี่ยนเลขตรงนี้
let str = new Array(2 * n + 1).join(" ");
printParenthesis(str, n);
