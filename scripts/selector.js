
function SetEt(){
    // html dökümanındaki id'ye göre element seçer
    var result = document.getElementById("title");
    //console.log(result);
    result.innerText ="Merhaba Ben Javascript ";
    result.style.color = "red"; // stil veriyoruz
}

function Giris(){
    var userName = document.getElementById("UserName").value;
    alert("Hoşgelidn " + userName);
}

function ClassName(){

    var classList = document.getElementsByClassName("text");
    for(var i=0;i<classList.length;i++){
        classList[i].innerHTML =i+1;
    }
    
}