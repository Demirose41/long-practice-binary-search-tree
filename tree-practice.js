const { BinarySearchTree, TreeNode } = require('./binary-search-tree.js');
// Before starting, copy and paste your guided practice work into the copy
// of `binary-search-tree.js` in this folder

// Practice problems on binary trees

function findMinBST (rootNode) {
  let node = rootNode;
  let min = node.val
  while(node != null){
    if(node.left === null) min = node.val
    node = node.left
  }
  return min

}

function findMaxBST (rootNode) {
  let node = rootNode
  let max = rootNode.val;
  while(node){
    if(node.right === null) max = node.val
    node = node.right
  }
  return max
}

function findMinBT (rootNode) {
  if(rootNode === null) return Infinity
  if(rootNode.left === null && rootNode.right === null) return rootNode.val
  let min = rootNode.val
  
  const leftMin = findMinBT(rootNode.left)
  const rightMin = findMinBT(rootNode.right)
  
  min = min < leftMin ? min : leftMin
  min = min < rightMin ? min : rightMin
  return min
  
}

function findMaxBT (rootNode) {
  if(rootNode === null) return null
  if(rootNode.left === null && rootNode.right === null) return rootNode.val
  let max = rootNode.val

  const leftMax = findMaxBT(rootNode.left)
  const rightMax = findMaxBT(rootNode.right)

  max = max > leftMax ? max : leftMax
  max = max > rightMax ? max : rightMax
  return max
}

function getHeight (rootNode, count = 0) {
  if(rootNode === null) return -1
  if(rootNode.left === null && rootNode.right === null) return count;
  count++;

  let height = count
  const leftHeight = getHeight(rootNode.left, count)
  const rightHeight = getHeight(rootNode.right, count)

  height = height > leftHeight ? height : leftHeight
  height = height > rightHeight ? height : rightHeight
  return height
}

function balancedTree (rootNode) {
  if(rootNode.left === null && rootNode.right == null) return true
  if(rootNode.left === null) return _isBalanced(rootNode.right)
  if(rootNode.right === null) return _isBalanced(rootNode.left)
  return balancedTree(rootNode.left) && balancedTree(rootNode.right) 


}

function _isBalanced(rootNode){
  let leftHeight = 0
  if(rootNode.left){
    if(rootNode.right === null) return false
    leftHeight = getHeight(rootNode.left)
  }
  let rightHeight = 0
  if(rootNode.right){
    if(rootNode.left === null) return false
    rightHeight = getHeight(rootNode.right)
  }


  return Math.abs(leftHeight - rightHeight) < 1
}

function countNodes (rootNode) {
  if(rootNode === null ) return 0
  if(rootNode.left === null && rootNode.right === null) return 1

  const leftCount = countNodes(rootNode.left)
  const rightCount = countNodes(rootNode.right)

  return leftCount + rightCount + 1 ;
}

function getParentNode (rootNode, target) {
  if(rootNode === null) return undefined
  if(rootNode.val === target) return null;
  
  let queue = [];
  queue.push(rootNode);

  while(queue.length > 0){
    let node = queue.shift();
    // if(node.left.val === target || node.right.val === target) return node


    if(node.left) {
      if(node.left.val === target) return node
      queue.push(node.left);
    }

    if(node.right) {
      if(node.right.val === target) return node
      queue.push(node.right);
    }
  }
  
  

  
}

function inOrderPredecessor (rootNode, target) {
  // Your code here
}

function deleteNodeBST(rootNode, target) {
  // Do a traversal to find the node. Keep track of the parent

  // Undefined if the target cannot be found

  // Set target based on parent

  // Case 0: Zero children and no parent:
  //   return null

  // Case 1: Zero children:
  //   Set the parent that points to it to null

  // Case 2: Two children:
  //  Set the value to its in-order predecessor, then delete the predecessor
  //  Replace target node with the left most child on its right side, 
  //  or the right most child on its left side.
  //  Then delete the child that it was replaced with.

  // Case 3: One child:
  //   Make the parent point to the child

}

module.exports = {
    findMinBST,
    findMaxBST,
    findMinBT,
    findMaxBT,
    getHeight,
    countNodes,
    balancedTree,
    getParentNode,
    inOrderPredecessor,
    deleteNodeBST
}