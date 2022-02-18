document.getElementById("display").style.display = "none";
let count = 0;
let result = 0;
const determineresult1 = () => {
    if(document.getElementById("a1").checked === true){count++}
};
const determineresult2 = () => {
    if(document.getElementById("a2").checked === true){count++}
};
const determineresult3 = () => {
    if(document.getElementById("b3").checked === true){count++}
};
const determineresult4 = () => {
    if(document.getElementById("c4").checked === true){count++}
};
const determineresult5 = () => {
    if(document.getElementById("a5").checked === true){count++}
};
const checkall = () =>{
    determineresult1(); determineresult2(); determineresult3(); determineresult4(); determineresult5(); result = count; console.log(result); count = 0;
}
const displaypercentage = () =>{
    return result / 5 * 100;
}
const displayresult = () => {
    checkall();
    document.getElementById('main').style.display = 'none';
    document.getElementById('info').style.display = 'none';
    document.getElementById('display').style.display = 'block';    document.getElementById('correct').innerHTML = result;
    document.getElementById('percentage').innerHTML = displaypercentage();
}

const disableradio = () =>{
    $("input:radio").each(function(i) {
        this.checked = false;
    });
}
