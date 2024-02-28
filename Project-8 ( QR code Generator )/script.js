let img = document.getElementById("img")
let qrText = document.getElementById("qrText")
let btn = document.getElementById("btn")
 let imgbox = document.getElementById("imgbox")

function generateQr(){
    if((qrText.value).length > 0){
    img.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+qrText.value;
    img.classList.add("show_Qr")
   }
    
    else{
        img.classList.remove("show_Qr")
        qrText.classList.add("error")
        setTimeout(()=>{
            qrText.classList.remove("error")
        },1000)
    }
}
