let input = document.getElementById('inptbtn');
let buttons = document.querySelectorAll('.btn');

let data = "";
let arr = Array.from(buttons);
arr.forEach(button => {
    button.addEventListener('click', (e) =>{
        if(e.target.innerHTML == '='){
            data = eval(data);
            input.value = data;
        }

        else if(e.target.innerHTML == 'AC'){
            data = "";
            input.value = data;
        }
        else if(e.target.innerHTML == 'DEL'){
            data = data.substring(0, data.length-1);
            input.value = data;
        }
        else{
            data += e.target.innerHTML;
            input.value = data;
        }
        
    })

}
)
