let passwordBox = document.querySelector("#input input")

const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowercase = "abcdefghijklmnopqrstuvwxyz"
const number = "0123456789"
const spechar = "!@#$%^&*_+/|~"

const allChar = uppercase + lowercase + number + spechar;

const length = 12;




function createPassword(){
    let password =""
    password += uppercase[Math.floor(Math.random()*uppercase.length)]
    password += lowercase[Math.floor(Math.random()*lowercase.length)]
    password += number[Math.floor(Math.random()*number.length)]
    password += spechar[Math.floor(Math.random()*spechar.length)]
    while(length > password.length){
        password += allChar[Math.floor(Math.random()*allChar.length)]
    }
    passwordBox.value = password;

}

function copyPassword(){
    passwordBox.select();
    document.execCommand("copy");
    document.querySelector("#input span").style.visibility = "visible";
    setTimeout(() => {
        document.querySelector("#input span").style.visibility = "hidden";
    }, 1000);
}

