const fs = require('fs');

class File {

    /**
     * Create a file
     * @param {any} dir 
     * @param {String} content 
     */

    create(dir, content) {
        fs.writeFile(dir, content, (err) => {
            if(err) {
                return err
            }
        })
    }

}