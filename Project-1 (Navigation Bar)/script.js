let mobile_btn = document.querySelector("#icons")
let class_add = document.querySelector("header")
const togleNavBar = () =>{
    class_add.classList.toggle("active")
}
mobile_btn.addEventListener("click",() => togleNavBar())
