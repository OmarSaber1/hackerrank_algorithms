/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (ri3ght===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

var maxDepth = function (root) {
  let maxDepth = 0;

  function recusionTree(head, level) {
    if (!head) return;

    maxDepth = Math.max(maxDepth, level);

    recusionTree(head.left, level + 1);
    recusionTree(head.right, level + 1);
  }

  recusionTree(root, 1);

  return maxDepth;
};

/*let maximumDepth = 0;
    
    function readAllNodes (t,level){
        
    if(!t) return 
        maximumDepth = Math.max(maximumDepth , level)
        
        readAllNodes(t.left , level+1)
        readAllNodes(t.right , level+1)
        
    
    }    
    
    readAllNodes(root,1);
    
    return maximumDepth;
    */
