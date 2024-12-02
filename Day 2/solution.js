import * as util from '../util.js';

// Part 1 (succeeded)
const partOne = () => {
    util.processProblemInput('./answer_input.txt', (data) => {
        let numSafeReports = 0;

        // Iterate over each report, and analyze each level.
        // Levels are safe if every level is either increasing or decreasing 
        // AND
        // Any two adjacent levels differ between 1 and 3
        data.split('\n').forEach((report) => {
            // track whether this report is safe or not by keeping track of the passed levels
            let levelsPassed = 0;

            // Pull out the levels as numbers
            const levels = report.split(' ').map(level => parseInt(level, 10));
            
            // There's better ways to handle this, but this is a decent start - maybe I'll simplify later.
            // iterate over our "levels as numbers" and ensure we're always increasing or decreasing, and the difference on either side of the current level is within our tolerance
            levels.forEach((level, idx) => {
                if(idx === 0) {
                    // Special case: first number only has right number to compare to, only check if the right number is within tolerance
                    const rightDiff = Math.abs(level - levels[idx + 1]);
                    if(!(rightDiff >= 1 && rightDiff <= 3))
                        return;
                } else if(idx !== 0 && idx !== levels.length - 1) {
                    // Most common case: middle numbers. Ensure we're either increasing or decreasing, and number of left AND right are within tolerance
                    const left = levels[idx - 1];
                    const right = levels[idx + 1] || levels[idx];

                    if(!((left > level && right < level) || (left < level && right > level)))
                        return;

                    const leftDiff = Math.abs(left - level);
                    const rightDiff = Math.abs(level - right);

                    if(!((leftDiff >= 1 && leftDiff <= 3) && (rightDiff >= 1 && rightDiff <= 3)))
                        return;
                } else if (idx === levels.length - 1) {
                    // Special case: final number only has left number to compare to, only check if the left number is within tolerance
                    const leftDiff = Math.abs(levels[idx - 1] - level);
                    if(!(leftDiff >= 1 && leftDiff <= 3))
                        return;
                }
                levelsPassed += 1;
            }); // level iter
            if(levelsPassed === levels.length)
                numSafeReports += 1;
        }); // report iter

        // Input
        console.log('Input: ');
        console.table(data);
    
        // Output
        console.log(`Safe Reports: ${numSafeReports}`);
    });
};

partOne();