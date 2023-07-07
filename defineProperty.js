/*

? Object.defineProperty() is used to access and change the property of an object.

The syntax for using Object.defineProperty() is:

! Object.defineProperty(obj, prop, descriptor)

The Object.defineProperty() method takes three arguments.
1. The first argument is the objectName.
2. The second argument is the name of the property.
3. The third argument is an object that describes the property.

*/

const student = function(firstname, lastname){
    var sclass = "VI"
    var rollno = 12

    this.firstname = firstname
    this.lastname = lastname

    // getting sclass the object properties
    Object.defineProperty(this, 'sclass', {
        get:function(){
            return sclass
        },

        set:function(value){
            sclass = value
        }
    });

    Object.defineProperty(this, 'rollno', {
        get:function(){
            return rollno
        },

        set:function(value){
            rollno = value
        }
    });

}

var student1 = new student("Samiul", "Hasan");
console.log(student1.sclass)
console.log(student1.rollno)

student1.sclass = "VII"
student1.rollno = 13

console.log(student1.sclass)
console.log(student1.rollno)