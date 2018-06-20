// Explicit is call the function using prototype
var userName = {
    fullName: function(){
        console.log(this.firstName + " " + this.lastName)
        //return this.firstName + "" + this.lastName
    }
}

var  student  = {
    firstName: "Edison",
    lastName: "Devadoss"
}

userName.fullName.call(student)