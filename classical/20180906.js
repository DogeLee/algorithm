/*
题目：
输入
输入数据首先包含一个整数n(1<=n<=100)，表示测试实例的个数，然后是n行数据，每行包含一个整数m，（1<=m<=40), 表示楼梯的级数。
输出
对于每个测试实例，请输出不同走法的数量。
思路：
这是一个动态规划问题，需要把问题拆分为子问题，利用递归的思想得到答案。
*/
const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
let lineCount = 0
rl.on('line',function(line){
	if (lineCount === 0) {
		lineCount++
	} else {
		let n = parseInt(line)
		getResult(n)
		// console.log(foo(n))
	}
})
//////////////////////////////正向循环的写法/////////////////////////////////
function getResult(n) {
	let resultArr = new Array(n)
	resultArr[1] = 1
	for (let i = 2; i <= n; i++) {
		if (i - 2 < 1) {
			resultArr[i] = resultArr[i-1]
		} else {
			resultArr[i] = resultArr[i-1] + resultArr[i-2]
		}
	}
	console.log(resultArr[n])
}
///////////////////////////////另一种递归的写法///////////////////////////////////
function foo(n) {
	if (n===1) {
		return 1
	} else if (n===2) {
		return 1
	} else {
		return foo(n-1) + foo(n-2)
	}
}