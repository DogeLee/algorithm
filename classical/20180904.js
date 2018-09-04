/*
题目描述:
输入某二叉树的前序遍历和中序遍历的结果，请重建出该二叉树。假设输入的前序遍历和中序遍历的结果中都不含重复的数字。例如输入前序遍历序列{1,2,4,7,3,5,6,8}和中序遍历序列{4,7,2,1,5,3,8,6}，则重建二叉树并返回。
解决思路：
中序遍历的结果一定是: 左边集合，root，右边集合
前序遍历的结果第一项一定是root
由此，可以根据得到的root将中序遍历的结果分成左右两个部分，利用递归的思想，继续拆分和找到子树的根节点
*/
function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
}
function reConstructBinaryTree(pre, vin)
{
    // write code here
    let getTree = function (pre, vin, root) {
        let rootIndex = vin.indexOf(root.val)
        let leftVin = vin.slice(0, rootIndex)
        let rightVin = vin.slice(rootIndex+1)
        let leftPre = []
        let rightPre = []
        for (let i = 1; i < pre.length; i++) {
            if (leftVin.indexOf(pre[i]) > -1) leftPre.push(pre[i])
            else rightPre.push(pre[i])
        }
        if (leftPre.length > 0) {
            let left = new TreeNode(leftPre[0])
            root.left = left
            getTree(leftPre,leftVin,left)
        }
        if (rightPre.length > 0) {
            let right = new TreeNode(rightPre[0])
            root.right = right
            getTree(rightPre,rightVin,right)
        }
    }
    let root = new TreeNode(pre[0])
    getTree(pre, vin, root)
    return root
}
module.exports = {
    reConstructBinaryTree : reConstructBinaryTree
};