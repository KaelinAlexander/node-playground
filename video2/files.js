const fs = require('fs');

// reading files

fs.readFile('./docs/blog1.txt', (err, data) => {
    if (err) {
        console.log(error);
    }
    console.log(data.toString());
});

console.log('last line')

// writing files

fs.writeFile('./docs/blog1.txt', "Hello, world.", () => {
    console.log("File was written.")
});

fs.writeFile('./docs/blog2.txt', "Hello again!.", () => {
    console.log("File was written.")
});

// create or delete directories

if (!fs.existsSync('./assets')) {
    fs.mkdir('./assets', (err) => {
        if (err) {
            console.log(err)
        }
        console.log("Directory made.")
    })
} else {
    fs.rmdir('./assets', (err) => {
        if (err) {
            console.log(err)
        }
        console.log("Folder deleted.")
    })
}

// deleting files
if (fs.existsSync('./docs/deleteme.txt')) {
    fs.unlink('./docs/deleteme.txt', (err) => {
        if (err) {
            console.log(err)
        }
        console.log("File deleted.")
    })
}