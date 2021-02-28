const fs = require('fs');

class File {

    /**
     * Create a file
     * @param {any} dir Directory write to
     * @param {String} content Content to write
     */

    create(dir, content) {
        fs.writeFile(dir, content, (err) => {
            if(err) {
                return err
            }
        })
    }

    /**
     * Append to a file
     * @param {any} dir 
     * @param {String} content Content to append
     */

    append(dir, content) {
        if(!this.exists(dir)) {
            return new Error("ENOENT: No Entry")
        } else {
            fs.readFile('dir', () => {
                
            })
        }
    }   

    /**
     * Create a file
     * @param {any} dir 
     * @param {String} content 
     */

    exists(dir, content) {
        return fs.existsSync(dir)
    }
}