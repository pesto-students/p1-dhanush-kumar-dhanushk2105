var Person = function() {};
Person.prototype.initialize = function(name,age){
    this.name = name;
    this.age = age;
}

var Teacher = function() {};
Teacher.prototype = new Person();

Teacher.prototype.teach = function(subject)
{
    console.log(this.name + " is now teaching " + subject);
}

var t = new Teacher();
t.initialize("Dhanush", 23);
t.teach("Inheritance");