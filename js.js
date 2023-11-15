var num = document.getElementById("numb");
var butao = document.getElementById("button");
var span = document.querySelectorAll("span")[0];


butao.addEventListener("click",()=>{
    if(num.value % 2 == 0){
        span.innerHTML = '<p class="span">Par</p>';
    }else if(num.value % 2 == 1){
        span.innerHTML = '<p class="span-a">Inpar</p>';
    }else{
        console.log("erro");
    }
    console.log(num.value);
});
