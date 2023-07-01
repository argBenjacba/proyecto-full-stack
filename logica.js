function msg() {



    var x, y, user, pass,user1, pass1 
    x = document.getElementById("user","user1").value; 
    y = document.getElementById("pass","pass1").value;
    user = "pepe123"
    pass = "messi"
    user1 = "alejo"
    pass1 = "alejito"


    console.log(x) 
    console.log(y)

    if (x === user,user1 && y === pass,pass1) {
    alert("el usuario y/o la contraseña es corecto")
    window.location.href = "index.html "
       
} else  {
    alert("el usuario y/o la contraseña es incorecta")

}
}
