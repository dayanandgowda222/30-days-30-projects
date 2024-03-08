let hrs = document.getElementById('hrs')
let mins = document.getElementById('mins')
let sec = document.getElementById('sec')
let mil = document.getElementById('mil')
        

        
        
        setInterval(()=>{
        let t = new Date();
        let h = t.getHours()
        let m = t.getMinutes();
        let s = t.getSeconds();
        let mili = t.getMilliseconds();
        hrs.innerHTML = h;
        mins.innerHTML = m;
        sec.innerHTML  = s;
        mil.innerHTML = mili;


        },1)


