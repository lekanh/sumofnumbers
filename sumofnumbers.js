const testNum = [1, 2, 3, 4];

function sumFor(nums) {
  let sum = 0;
  for (const num of nums) {
    sum += num;
  }
  return sum;
}

console.log(sumFor(testNum));

function sumWhile(nums) {
  let sum = 0;
  let i = 0;
  while(i < nums.length){
    sum += nums[i];
    i++;
  }
  return sum;
}

console.log(sumWhile(testNum));

function sumRecursion(nums) {
  if (nums.length === 0){
    return 0;
  } else {
    return nums[0] + sumRecursion(nums.slice(1, nums.length));
  }
}

console.log(sumRecursion(testNum));

function sumTheSimpleWay(nums) {
  return _.reduce(nums, function (memo, num) {return memo + num; }, 0);
}
console.log(sumTheSimpleWay(testNum));
