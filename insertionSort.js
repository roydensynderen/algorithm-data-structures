const insertionSort = nums => {
    for (let i = 1; i < nums.length; i++) {
        for (let x = 0; x < i; x++) {
            snapshot(nums)
            if (nums[i] < nums[x]) {
                const spliced = nums.splice(i, 1)
                nums.splice(x, 0, spliced[0])
            }
        }
    }
}