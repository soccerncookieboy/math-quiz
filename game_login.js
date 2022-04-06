function next(){
   name1 = document.getElementById("1name").value
   name2 = document.getElementById("2name").value
   localStorage.setItem("player1",name1)
   localStorage.setItem("player2",name2)
   window.location = "game_page.html"
}