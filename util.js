import * as fs from 'node:fs';


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