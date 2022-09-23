/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (head) {
  if (!head) return [];

  const queue = [head];
  const res = [];

  while (queue.length > 0) {
    const n = queue.length;
    const temp = [];
    for (var i = 0; i < n; i++) {
      const node = queue.shift();
      temp.push(node.val);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    res.push(temp);
  }
  return res;
};

/*const queue = [];
    const results = []
    
    if(!head) return []
    
    queue.push(head);
    
    while(queue.length > 0){
          let nodeCount = queue.length;
          
         let temp =[]
         
         for(var i = 0 ; i < nodeCount ; i++){
             
         
              let removedNode = queue.shift()
              temp.push(removedNode.val)
              if(removedNode.left){
                  queue.push(removedNode.left)
              }
                if(removedNode.right){
                  queue.push(removedNode.right)
              }
              
         }
          
        results.push(temp)
          
    }
    
    return results*/
