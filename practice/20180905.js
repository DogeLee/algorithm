/*
题目描述:
把一个数组最开始的若干个元素搬到数组的末尾，我们称之为数组的旋转。 输入一个非减排序的数组的一个旋转，输出旋转数组的最小元素。 例如数组{3,4,5,1,2}为{1,2,3,4,5}的一个旋转，该数组的最小值为1。 NOTE：给出的所有元素都大于0，若数组大小为0，请返回0。
思路:
如果顺序查找，则复杂度为O(n)，利用二分法的思想查找，复杂度为O(nlogn)。
二分法：利用数组中间的值，缩小查找范围。
在本题中，将中间值与末位值比较有三种结果，然后根据结果不断改变high或者low的值，最终得到最小的数。
*/
function minNumberInRotateArray(rotateArray)
{
    // write code here
    let high = rotateArray.length - 1
    let low = 0
    while (low < high) {
        let mid = parseInt((high+low)/2)
        if (rotateArray[mid]>rotateArray[high]) low = mid + 1
        else if (rotateArray[mid]===rotateArray[high]) high--
        else high = mid
    }
    return rotateArray[low]
}
module.exports = {
    minNumberInRotateArray : minNumberInRotateArray
};