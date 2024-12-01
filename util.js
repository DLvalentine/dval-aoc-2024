import * as fs from 'node:fs';

// File reading boilerplate - provide path to input file and a callback to process the data
const processProblemInput = (path, callback) => {
    try {
        const data = fs.readFileSync(path, 'utf8');
        callback(data);
    } catch (err) {
        console.error(err);
    }
};

export {
    processProblemInput
};