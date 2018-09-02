/*
题目描述:
在一个二维数组中（每个一维数组的长度相同），每一行都按照从左到右递增的顺序排序，每一列都按照从上到下递增的顺序排序。请完成一个函数，输入这样的一个二维数组和一个整数，判断数组中是否含有该整数。
思路:
对于左下角的点来说，上小右大，因此根据判断大小不断变换指针的位置，最终找到结果。
*/
function Find(target, array)
{
    // write code here
    let m = array.length
    let n = array[0].length
    let location = [m-1,0]
    while (location[0]>=0 && location[1]<n) {
        let val = array[location[0]][location[1]]
        if (val === target) return true
        if (val > target) location[0]--
        else location[1]++
    }
    return false
}
module.exports = {
    Find : Find
};