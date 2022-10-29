// Question 1


interface User {
    school: string;
    firstName: string;
    lastName: string;
    age: number;
    isAdmin?: boolean;
}

function createUser(firstName: string, lastName: string, age: number, isAdmin: boolean = false): User {
    
    const user: User = {
        school: "Noroff",
        firstName: firstName,
        lastName: lastName,
        age: age,
        isAdmin: isAdmin
    }
    return user;
}


const newUser = createUser('Ola', 'Nordmann', 18);
const newAdmin = createUser('Kari', 'Nordmann', 36, true);
console.log(newUser);
console.log(newAdmin);



