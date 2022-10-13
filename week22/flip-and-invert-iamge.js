/**
 * @param {number[][]} image
 * @return {number[][]}
 */
var flipAndInvertImage = function(image) {
    
    for(var key of image){
        key.reverse()
    }
    
    for(var i = 0 ; i<image.length ;i++){
         for(var j = 0 ; j<image[0].length ;j++){
        image[i][j] = image[i][j] == 0 ? 1 : 0
    }
    }
    
    return image
};