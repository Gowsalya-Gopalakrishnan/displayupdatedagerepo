
let age,age1;

function displayAge(age){
    return function changeAge(age1){
        console.log(`DisplayAge is : ${age}\nChangeAge is : ${age1}`);
    }
}
const res = displayAge(32);
res(76);