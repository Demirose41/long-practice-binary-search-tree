// Before starting, copy and paste your guided practice work from
// `binary-search-tree.js` into this file

// Do not change this
class TreeNode {
    constructor(val) {
      this.val = val;
      this.left = null;
      this.right = null;
    }
  }
  
  class BinarySearchTree {
  
    constructor() {
      this.root = null;
    }
  
    insert(val, currentNode=this.root) {
      if(this.root === null){
        this.root = new TreeNode(val)
      }
      while(currentNode != null){
        if(currentNode.val > val){
          if(currentNode.left === null){
            currentNode.left = new TreeNode(val)
            break
          }else{
            currentNode = currentNode.left;
            
          }
        }if(currentNode.val < val){
          if(currentNode.right === null){
            currentNode.right = new TreeNode(val)
            break
          }else{
            currentNode = currentNode.right;
          }
        }
      }
    }
  
    search(val) {
      let currentNode = this.root
  
      while(currentNode != null){
        if(currentNode.val === val ) return true
        if(currentNode.val > val){
          currentNode = currentNode.left
          continue
        } 
        if(currentNode.val < val){
          currentNode = currentNode.right
          continue
        } 
      }
      return false
    }
  
  
    preOrderTraversal(currentNode = this.root) {
      console.log(currentNode.val)
      if(currentNode.left) this.preOrderTraversal(currentNode.left)
      if(currentNode.right) this.preOrderTraversal(currentNode.right)
    }
  
  
    inOrderTraversal(currentNode = this.root) {
      if(currentNode.left) this.inOrderTraversal(currentNode.left)
      console.log(currentNode.val)
      if(currentNode.right) this.inOrderTraversal(currentNode.right)
    }
  
  
    postOrderTraversal(currentNode = this.root) {
      if(currentNode.left) this.postOrderTraversal(currentNode.left)
      if(currentNode.right) this.postOrderTraversal(currentNode.right)
      console.log(currentNode.val)
    }
  
      // Breadth First Traversal - Iterative
    breadthFirstTraversal() {
      
      let queue = []
      queue.push(this.root)
      while(queue.length > 0){
        let node = queue.shift();
        console.log(node.val);
        if(node.left) queue.push(node.left);
        if(node.right) queue.push(node.right);
      }
    }
  
    // Depth First Traversal - Iterative
    depthFirstTraversal() {
      let stack = []
      stack.push(this.root)
      while(stack.length > 0){
        let node = stack.pop()
        console.log(node.val)
  
        if(node.left)stack.push(node.left)
        if(node.right)stack.push(node.right)
      }
  }
  }
  
  module.exports = { BinarySearchTree, TreeNode };