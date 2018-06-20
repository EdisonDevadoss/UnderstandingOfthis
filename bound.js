
var module  = {
    x: 81,
    getX: function(){
        console.log(this.x)
        return this.x;

    }
}

module.getX()

var reteriveX = module.getX;
reteriveX();

var boundGetX = reteriveX.bind(module)
boundGetX()