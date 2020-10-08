"use strict";
// const person: {
//     name: string,
//     age: number,
//     hobbies: string[],
//     role: [number, string] //use a tuple for have exactly this type into this column
// } = {
//     name: 'Filipe',
//     age: 30,
//     hobbies: ['Sports','Tecnology'],
//     role: [2, 'author']
// };
//if we set the first value the other increment automatically
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 5] = "ADMIN";
    Role[Role["READ_ONLY"] = 2] = "READ_ONLY";
    Role[Role["AUTHOR"] = 1] = "AUTHOR";
})(Role || (Role = {}));
;
// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;
var person = {
    name: 'Filipe',
    age: 30,
    hobbies: ['Sports', 'Tecnology'],
    role: Role.ADMIN
};
// person.role.push('admin');
//person.role = [5, 'user'];
//person.role[1] = 10;
var favoriteActivities;
favoriteActivities = ['Sports'];
console.log(person);
//From javascript
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
    //console.log(hobby.map()); !!! ERROR !!!
}
if (person.role === Role.AUTHOR) {
    console.log('is author');
}
