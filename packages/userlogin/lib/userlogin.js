'use strict';

module.exports = userlogin;

function userlogin({name,age}) {
    this.name=name;
    this.age=age
}

userlogin.prototype.login=function(){
    return `${this.name}======${this.age}`
}
