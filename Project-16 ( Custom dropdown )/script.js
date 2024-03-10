let selectText = document.getElementById('selectText')
        let textupdate = document.getElementsByClassName('textupdate')
        let options = document.querySelector('.options')
        let down = document.getElementById('down')

        selectText.onclick = function(){
            options.classList.toggle('hide')
            down.classList.toggle('rotate')
        }

        for(option of textupdate){
            option.onclick = function(){
                selectText.innerHTML = this.textContent;
                options.classList.toggle('hide')
                down.classList.toggle('rotate')
            }
        }