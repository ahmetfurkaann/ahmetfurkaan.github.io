var icerigi_dogru = 0;
var tamamen_dogru = 0;
random_number = [];

var btn = document.getElementById('btn');
for(let i = 0; i<10; i++){
    let r = Math.floor(Math.random() * 10);
    if(random_number.indexOf(r) === -1 && random_number.length != 4) random_number.push(r);
    }


if(random_number.includes(0)){
    if(random_number.indexOf(0) == 0){
        console.log("Reverse işlemi uygulandı");
        random_number = random_number.reverse();
    }
}

let index = random_number.includes(0);

console.log(index);

function sifirla(){
    icerigi_dogru = 0;
    tamamen_dogru = 0;
};

var alan = document.getElementById('userInput');

alan.addEventListener("keyup", function(event) {
    if (event.keyCode === 13 || event.keyCode === 'Enter') {     
        islemYap();
        alan.value = "";
    }
});


function islemYap(){
    //bilgi.innerHTML = "";
    let input = document.getElementById('userInput').value;
    let input2 = document.getElementById('userInput');
    input_string = input.toString();
    random_number_string = random_number.toString();
    for(let i = 0; i<input.length; i++){

        if (random_number[i] == input[i] && random_number_string.search(input_string[i]) != -1){
            tamamen_dogru += 1;
        }
        else if(random_number[i] != input[i] && random_number_string.search(input_string[i]) != -1){
            icerigi_dogru += 1;
        };
        if(tamamen_dogru == 4){
            bilgi.innerHTML += `Tebrikler... Sayıyı doğru tahmin ettiniz <br>`;
            sifirla();
            input = "";
            return;
        };

    }
    bilgi.innerHTML += `${input}: `
    //bilgi.innerHTML += "--------------- <br>"
    bilgi.innerHTML += `${icerigi_dogru}- | `;
    bilgi.innerHTML += `${tamamen_dogru}+`;
    bilgi.innerHTML += "<br>"
    sifirla();
    alan.value = "";
}
