let screen=document.querySelector("#screen");
let buttons=document.querySelectorAll("button");
let history = document.querySelector('#his')
let value="";
for(let item of buttons){
    item.addEventListener('click',function(e){
        let bText=e.target.innerText;
        //console.log(bText);
        if(bText=='C'){
            value="";
            screen.value=value;
        }
        else if(bText=='='){
            screen.value=eval(value);
            //console.log(value);
            let list=document.createElement('li');
            list.innerHTML=`${value}= ${screen.value} `;
            history.appendChild(list);
        }
        else{
            value+=bText;
            screen.value=value;
        }
    })
}

let hb=document.querySelector('#hist');
hb.addEventListener('click',function(e){
    if (history.style.display === "none") {
        history.style.display = "block";
    } else {
        history.style.display = "none";
    }
})