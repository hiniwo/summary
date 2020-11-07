//背景内容：使用getPrototypeOf这个方法来实现

function myInstanceOf (left , right){
    if(typeof left !== 'Object' || left === null) return false;
    let proto = objcet.getPrototypeOf(left);
    while (true){
        if(proto == null ) return false;
        if(proto == right.prototype) return true;
        proto = Object.getPrototypeOf(proto)
    }
}