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
enum Role { ADMIN = 5, READ_ONLY = 2, AUTHOR = 1 };

// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;

const person = {
    name: 'Filipe',
    age: 30,
    hobbies: ['Sports','Tecnology'],
    role: Role.ADMIN
};

// person.role.push('admin');
//person.role = [5, 'user'];
//person.role[1] = 10;

let favoriteActivities: string[];
favoriteActivities = ['Sports'];

console.log(person);

//From javascript
for (const hobby of person.hobbies){
    console.log(hobby.toUpperCase());
    //console.log(hobby.map()); !!! ERROR !!!
}

if(person.role === Role.AUTHOR){
    console.log('is author');
}