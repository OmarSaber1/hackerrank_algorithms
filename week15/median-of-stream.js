class MedianOfAStream {

    constructor (){
     this.total = 0;
     this.last_length = 0;
    }
  
    insert_num(num) {
     // TODO: Write your code here
    this.last_length ++;
    this.total += num;  
    
     return -1;
    }
  
    find_median(self) {
      // TODO: Write your code here
  
      return this.total / this.last_length
    }
  };
  
  
  
  var medianOfAStream = new MedianOfAStream()
  medianOfAStream.insert_num(3)
  medianOfAStream.insert_num(1)
  console.log(`The median is: ${medianOfAStream.find_median()}`)
  medianOfAStream.insert_num(5)
  console.log(`The median is: ${medianOfAStream.find_median()}`)
  medianOfAStream.insert_num(4)
  console.log(`The median is: ${medianOfAStream.find_median()}`)
  