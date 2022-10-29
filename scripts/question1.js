// Question 1
function createUser(firstName, lastName, age, isAdmin) {
    if (isAdmin === void 0) { isAdmin = false; }
    var user = {
        school: "Noroff",
        firstName: firstName,
        lastName: lastName,
        age: age,
        isAdmin: isAdmin
    };
    return user;
}
var newUser = createUser('Ola', 'Nordmann', 18);
var newAdmin = createUser('Kari', 'Nordmann', 36, true);
console.log(newUser);
console.log(newAdmin);
