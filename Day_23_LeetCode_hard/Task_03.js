//Solve the "Trapping Rain Water" problem on LeetCode
function trap(height) {
    if (height.length === 0) return 0;

    let left = 0;
    let right = height.length - 1;
    let leftMax = 0;
    let rightMax = 0;
    let waterTrapped = 0;

    while (left <= right) {
        if (height[left] <= height[right]) {
            if (height[left] >= leftMax) {
                leftMax = height[left];
            } else {
                waterTrapped += leftMax - height[left];
            }
            left++;
        } else {
            if (height[right] >= rightMax) {
                rightMax = height[right];
            } else {
                waterTrapped += rightMax - height[right];
            }
            right--;
        }
    }

    return waterTrapped;
}

function logTrappedWater(height) {
    console.log(`Elevation map: [${height}]`);
    console.log(`Trapped water: ${trap(height)} units`);
}

// Test case 1
const height1 = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
logTrappedWater(height1);  // Expected output: 6 units

// Test case 2
const height2 = [4, 2, 0, 3, 1, 2, 5];
logTrappedWater(height2);  // Expected output: 9 units
