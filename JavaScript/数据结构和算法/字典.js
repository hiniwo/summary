// 字典 键值对存储的数据类型
// es6中就是map
// map 方法总结：set get has delete clear

var lengthOfLongestSubstring = function(s) {
    let l= 0;
    let res = 0;
    const map = new Map();
    for(let r = 0 ; r < s.length ; r ++) {

        if(map.has(s[r]) && map.get(s[r]) >= l) {
            l = map.get(s[r]) + 1;
        }
        res = Math.max(res , r - l + 1);
        map.set(s[r] , r)
    }
    console.log(map)
    return res

};

console.log(lengthOfLongestSubstring('abddcabdd'))
