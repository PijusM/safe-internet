document.getElementById("display").style.display = "none";
let count = 0;
let result = 0;
const determineresult1 = () => {
    if(document.getElementById("a1").checked === true){count++}
};
const determineresult2 = () => {
    if(document.getElementById("b2").checked === true){count++}
};
const determineresult3 = () => {
    if(document.getElementById("c3").checked === true){count++}
};
const determineresult4 = () => {
    if(document.getElementById("b4").checked === true){count++}
};
const determineresult5 = () => {
    if(document.getElementById("c5").checked === true){count++}
};
const determineresult6 = () => {
    if(document.getElementById("a6").checked === true){count++}
};
const determineresult7 = () => {
    if(document.getElementById("c7").checked === true){count++}
};
const determineresult8 = () => {
    if(document.getElementById("b8").checked === true){count++}
};
const determineresult9 = () => {
    if(document.getElementById("b9").checked === true){count++}
};
const determineresult10 = () => {
    if(document.getElementById("a10").checked === true){count++}
};
const determineresult11 = () => {
    if(document.getElementById("c11").checked === true){count++}
};
const determineresult12 = () => {
    if(document.getElementById("d12").checked === true){count++}
};
const determineresult13 = () => {
    if(document.getElementById("b13").checked === true){count++}
};
const determineresult14 = () => {
    if(document.getElementById("a14").checked === true){count++}
};
const determineresult15 = () => {
    if(document.getElementById("d15").checked === true){count++}
};
const determineresult16 = () => {
    if(document.getElementById("c16").checked === true){count++}
};
const determineresult17 = () => {
    if(document.getElementById("a17").checked === true){count++}
};
const determineresult18 = () => {
    if(document.getElementById("b18").checked === true){count++}
};
const determineresult19 = () => {
    if(document.getElementById("a19").checked === true){count++}
};
const determineresult20 = () => {
    if(document.getElementById("c20").checked === true){count++}
};
const checkall = () =>{
    determineresult1(); determineresult2(); determineresult3(); determineresult4(); determineresult5(); determineresult6(); determineresult7(); determineresult8(); determineresult9(); determineresult10(); determineresult11(); determineresult12(); determineresult13(); determineresult14(); determineresult15(); determineresult16(); determineresult17(); determineresult18(); determineresult19(); determineresult20(); result = count; count = 0;
}
const displaypercentage = () =>{
    return result / 20 * 100;
}
const displayresult = () => {
    checkall();
    document.getElementById('main').style.display = 'none';
    document.getElementById('info').style.display = 'none';
    document.getElementById('display').style.display = 'block';   
    document.getElementById('correct').innerHTML = result;
    document.getElementById('percentage').innerHTML = displaypercentage() + "%";
}
const disableradio = () =>{
    $("input:radio").each(function() {
        this.checked = false;
 });
}