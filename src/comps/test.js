var is globally scoped or function scopped
function read(){
    var x = 5;
    }
    undefined
    console.log(x)
> Uncaught ReferenceError: x is not defined
        at <anonymous>:1:13
   
   
  
    var y = 5;
    function write(){
    console.log(y);
    }
    write();
> 5