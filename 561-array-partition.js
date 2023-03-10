/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let output = [];
  let length = nums.length;

  for (let i = 0; i < length; i++) {
    for (let j = i + 1; j < length; j++) {
      if (nums[i] + nums[j] === target) return (output = [i, j]);
    }
  }

  return output;
};

// Input: nums = [1,4,3,2]
// Output: 4

// Input: nums = [6,2,6,5,1,2]
// Output: 9

// arrayPairSum(nums)
