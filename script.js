function threeSum(arr, target) {
// write your code here
	//sorting in ascending order
	arr.sort((a, b) => a-b) ; 
	let result = Infinity ;
	for(let i=0 ; i<arr.length-1 ; i++) {
		let left = i+1 ;
	    let right = arr.length-1 ;
		while(left<right){
			var sum = arr[i] + arr[left] + arr[right] ;
			if(Math.abs(target - sum) < Math.abs(target - result)) {
				result = sum ;
			}
			if(sum < target) {
				left++
			}
			else if(sum > target) {
				right-- ;
			}
			else {
				return result ;
			}
			
		}
	}
	return result ;
  
}

module.exports = threeSum;
