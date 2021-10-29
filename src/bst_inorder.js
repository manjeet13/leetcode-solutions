// IN-ORDER traversal of a binary search tree

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
// var outArr = [];
var inorderTraversal = function(root) {
    if(!root) return [];
    // if(root.right) {
    //     inorderTraversal(root.right)
    // }
    // outArr.unshift(root.val);
    // if(root.left) {
    //     inorderTraversal(root.left)
    // }
    // let newArr = outArr;
    // outArr = []
    return [...inorderTraversal(root.left), root.val, ...inorderTraversal(root.right)];
};