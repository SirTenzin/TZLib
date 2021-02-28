class TString extends String {
    
    /**
     * Custom String Class
     * @param {any} value 
     */
    
     constructor(value) {
        super(value)
        this.value = value.toString()
    }

    /**
     * Reverses string
     * @function Reverse
     */
    reverse() {
        return new TString(this.value.split("").reverse().join(""))
    }

    /**
     * Capitalises string
     * @function captalise
     */

    captalise() {
        let str;
        let d = false;
        this.value.split("").forEach(o => {
            if(!isNaN(o)) {
                str += o;
            } else {
                if(!d) {
                    str += o.toUpperCase();
                    d = true;
                } else {
                    str += o;
                }
            }
        })
    }
}

String.prototype.toTString = function() {
    return new TString(this.valueOf())
}

module.exports = TString;