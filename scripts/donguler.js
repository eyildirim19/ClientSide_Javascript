

var mesaj = prompt("Hangi Mesajı göstermek istersiniz");
var count = prompt("Kaç adet gösterilsin");

for(var i=0; i <count; i++){
    console.log(i + " "+ mesaj);
}

console.log("****************************");

var j=0;
while(j<count){
    console.log(j + " " +mesaj);
    j++;
}

console.log("*****************************");

var k=0;
do{
    console.log(k+ " " + mesaj);
    k++;
}
while(k<count);
