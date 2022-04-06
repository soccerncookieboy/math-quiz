player1_name = localStorage.getItem("player1");
player2_name = localStorage.getItem("player2");
player1_score = 0;
player2_score = 0;
document.getElementById("player1name").innerHTML = player1_name + " : ";
document.getElementById("player2name").innerHTML = player2_name + " : ";
document.getElementById("player1score").innerHTML = player1_score;
document.getElementById("player2score").innerHTML = player2_score;

function send(){
    get_number = document.getElementById("word").value;
    get2number = document.getElementById("number2").value;
    answer = get_number*get2number
    console.log(get_number + get2number)

    question_word = "<h4 id='word_display'> Q. "+get_number+"x"+get2number+"</h4>";
    input_box ="<br>Answer : <input type='text' id='input_check_box'>";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    row = question_word + input_box + check_button;
    document.getElementById("output").innerHTML = row
    document.getElementById("word").value = "";
}
answer_turn = "player1"
question_turn = "player2"
function check(){
    ans = document.getElementById("input_check_box").value
    console.log(answer)
    if(ans == answer){
        if(answer_turn == "player1") {
            player1_score = player1_score +1
            document.getElementById("player1score").innerHTML = player1_score
        } else {
            player2_score = player2_score +1
            document.getElementById("player2score").innerHTML = player2_score
        }
    }
    if (question_turn == "player1") {
        question_turn = "player2"
        document.getElementById("questionperson").innerHTML = "Question Turn -"+ player2_name
    } else {
        question_turn = "player1"
        document.getElementById("questionperson").innerHTML = "Question Turn -"+ player1_name
    }
    if (answer_turn == "player1") {
        answer_turn = "player2"
        document.getElementById("answerperson").innerHTML = "Answer Turn -"+ player2_name
    } else {
        answer_turn = "player1"
        document.getElementById("answerperson").innerHTML = "Answer Turn -"+ player1_name
    }
    document.getElementById("output").innerHTML = ""
}