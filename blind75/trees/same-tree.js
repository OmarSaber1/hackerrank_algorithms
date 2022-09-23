var isSameTree = function (p, q) {
  function readAllNodes(t1, t2) {
    if (!t1 && !t2) return true;

    if ((t1 && !t2) || (t2 && !t1) || t1.val !== t2.val) return false;

    return readAllNodes(t1.left, t2.left) && readAllNodes(t1.right, t2.right);
  }

  return readAllNodes(p, q);
};

/* let isMatched = true ;
    
    function getTreeNodes(p,q){
    if(p?.val !== q?.val) {isMatched = false
       return}

     if(!p || !q) return
    
    getTreeNodes(p.right,q.right)
    getTreeNodes(p.left,q.left)
    }
  
    getTreeNodes(p,q);
    
    return isMatched
    */
