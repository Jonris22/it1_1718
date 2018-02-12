var pakkerE = document.querySelector('.pakker');

pakkerE.innerHTML += '<span class="star">*</span>' + '<br>';

for(var y=1; y<=17; y=y+1){

    for(var x=0; x<y+1; x=x+1){
        if((x*y)%2===0){
            pakkerE.innerHTML += '<span class="green"> + </span>';
        }
        else{
            pakkerE.innerHTML += '<span class="red"> + </span>';
        }
    }

    pakkerE.innerHTML += '<br>';
}

pakkerE.innerHTML += '<span class="green"> + + + + + + + + + + + + + + + + + </span>' + '<br>';
pakkerE.innerHTML += '<span class="green"> + + + + + + + + + + + + + + + + </span>' + '<br>';

pakkerE.innerHTML += '<span class="brown"> |___| </span>' + '<br>';
pakkerE.innerHTML += '<span class="brown"> |___| </span>' + '<br>';
pakkerE.innerHTML += '<span class="brown"> |___| </span>' + '<br>';
pakkerE.innerHTML += '<span class="brown"> |___| </span>' + '<br>';

pakkerE.innerHTML += '<br>';
