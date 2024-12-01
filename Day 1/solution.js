import * as util from '../util.js';

// Part 1 (succeeded)
const partOne = () => {
    util.processProblemInput('./answer_input.txt', (data) => {
        const leftCol = [];
        const rightCol = [];
    
        // Read data, split list up and convert text to numbers
        data.split('\n').forEach((row, idx) => {
            const cols = row.split(' ');
            if (cols.length) {
                leftCol[idx] = parseInt(cols[0], 10) || 0;
                rightCol[idx] = parseInt(cols[cols.length - 1].replace('\r', ''), 10) || 0;
            }
        });
    
        // Sort the lists so that we can pair smallest numbers
        leftCol.sort();
        rightCol.sort();
    
        // Input
        console.log('Input: ');
        console.table(leftCol);
        console.table(rightCol);
    
        // Iterate over left list, pair with an item on the right list, and subtract the difference to store in total distance
        let distanceTotal = 0;
        
        leftCol.forEach((num, idx) => {
            distanceTotal += Math.abs((num - rightCol[idx])); 
        });
    
        // Output
        console.log(`Total distance: ${distanceTotal}`)
    });
};

// Part 2 (succeeded)
const partTwo = () => {
    util.processProblemInput('./answer_input.txt', (data) => {
        const leftCol = [];
        const rightCol = [];
    
        // Read data, split list up and convert text to numbers
        data.split('\n').forEach((row, idx) => {
            const cols = row.split(' ');
            if (cols.length) {
                leftCol[idx] = parseInt(cols[0], 10) || 0;
                rightCol[idx] = parseInt(cols[cols.length - 1].replace('\r', ''), 10) || 0;
            }
        });
    
        // Sort the lists so that we can pair smallest numbers
        leftCol.sort();
        rightCol.sort();
    
        // Input
        console.log('Input: ');
        console.table(leftCol);
        console.table(rightCol);
    
        // Iterate over left list, count the times it appears in the right list, mult left list item by that and add to simScore
        let simScore = 0;
        
        leftCol.forEach((num, idx) => {
            let timesAppear = 0;
            rightCol.forEach((pair) => {
                timesAppear += pair === num ? 1 : 0;
            });
    
            simScore += Math.abs(num * timesAppear);
        });
    
        // Output
        console.log(`Similarity score: ${simScore}`)
    });
};

partOne();
partTwo();