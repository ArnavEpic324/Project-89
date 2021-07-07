

//Function Login
function login()
{

   var name = document.getElementById("name1").value;
   var name2 = document.getElementById("name2").value;

    // Displaying E-mail And Password Given by User In The Console amd Saving It Into Local Storage.
    console.log(name);
    console.log(name2);
    localStorage.setItem("Player 1", name);
    localStorage.setItem("player 2", name2);

    // Going To Webpage.html;
   allow();

}


// Function Allow Used Before 
function allow()
{
    window.location = "webpage.html"
}