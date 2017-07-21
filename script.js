function changetext() {
    document.getElementById("demo").innerHTML = "Fun Facts";
    document.getElementById("facts").innerHTML = "February third is my birthday";
    document.getElementById("factone").innerHTML = "I have Celiacs disease which means that I am allergic to wheat gluten barley rye";
    document.getElementById("facttwo").innerHTML = "My name is pronounced LEE-ah, not LAY-ay but I respond to both";
    document.getElementById("factthree").innerHTML = "I won the Character Award for modified volleyball";
    document.getElementById("factfour").innerHTML = "I won the Bill Dalton Humanities Award at my eighth grade moving up ceremony";
    document.getElementById("factfive").innerHTML = "Expressing individuality in projects and assignments is important to me";
    document.getElementById("factsix").innerHTML = "I have never eaten at Taco Bell";
}
function changepage() {
    var x = document.getElementById('picture');
    if (x.style.display === 'none') {
        x.style.display = 'block';
      } else {
        x.style.display = 'none';
      }
}
function myFunction() {
        alert("Welcome!");
}
