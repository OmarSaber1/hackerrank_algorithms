/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
       
    return s.split("").sort().join("") ===  t.split("").sort().join("")
};






















/* if (t.length !== s.length) return false;

    return s.split("").sort().join("") == t.split("").sort().join("")*/