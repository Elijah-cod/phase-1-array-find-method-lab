// code your solution here
function superbowlWin(arr) {
    const win = arr.find(item => item.result === 'W'); // Find the first 'W' result
    return win ? win.year : undefined; // Return the year or undefined if no 'W' is found
}
