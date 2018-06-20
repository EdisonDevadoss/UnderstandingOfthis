// implicit is direct function 
function Edison(){
    console.log(this)
}
//Edison()


// or attach it to an object and call it
const name = {};
name.user = Edison;

name.user()