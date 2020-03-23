function sort(n) {
    for (let outer = 0; outer < n.length; outer++) {
      let outerElement = n[outer];
  
      for (let inner = outer + 1; inner < n.length; inner++) {
        let innerElement = n[inner];
  
        if(outerElement > innerElement) {
          // swap
          n[outer] = innerElement;
          n[inner] = outerElement;
          // update references
          outerElement = n[outer];
          innerElement = n[inner];
        }
      }
    }
    return n;
  }
  
  console.log(sort([1,2,3,4,5]));
  console.log(sort([5,4,3,2,1]));