function quiz() {
    alert("Welcome to the Warrior Cat Quiz!");
    alert("This quiz is for you to test your knowledge on Warrior Cat series.");
    alert("It will contain questions from multiple arcs, not just the first or second, or so on.");
    alert("Good luck! May StarClan guide you!");

    var score = 0;

    var q1 = prompt("Who killed Tigerclaw/star?");
    q1 = q1.toLowerCase();
    console.log(q1); 
    if (q1 == "scourge") {
        score++;
        alert("Correct!");
    } else {
        alert("Incorrect! Better luck next time, my furry friend!");
    }



    var q2 = prompt("What was Firestar’s kittypet name?");
    q2 = q2.toLowerCase();
    if (q2 == "rusty") {
        score++;
        alert("Correct!");
    } else {
        alert("Incorrect! Better luck next time, my furry friend!");
    }



    var q3 = prompt("Who attacked Firestar when he first came to ThunderClan?");
    q3 = q3.toLowerCase();
    if (q3 == "longtail") {
        score++;
        alert("Correct!");
    } else {
        alert("Incorrect! Better luck next time, my furry friend!");
    }
    
    
    var q4 = prompt("Which cat was vying for deputyship with Brambleclaw?");
    q4 = q4.toLowerCase();
    if (q4 =="brackenfur") {
        score++;
        alert("Correct!");
    } else {
        alert("Incorrect! Better luck next time, my furry friend!");
    }
    
    
    var q5 = prompt("Who was Firestar’s first love?");
    q5 = q5.toLowerCase();
    if (q5 =="spottedleaf") {
        score++;
        alert("Correct!");
    } else {
        alert("Incorrect! Better luck next time, my furry friend!");
    }
    
    var q6 = prompt("Who saved Graystripe when he fell into the icy river?");
    q6 = q6.toLowerCase();
    if (q6 =="silverstream") {
        score++;
        alert("Correct!");
    } else {
        alert("Incorrect! Better luck next time, my furry friend!");
    }
    
     var q7 = prompt("What is Scourge’s clan called?");
    q7 = q7.toLowerCase();
    if (q7 =="bloodclan") {
        score++;
        alert("Correct!");
    } else {
        alert("Incorrect! Better luck next time, my furry friend!");
    }
    
     var q8 = prompt("What cat did Leafpaw meet while trapped in the Twolegs’ cage?");
    q8 = q8.toLowerCase();
    if (q8 =="cody") {
        score++;
        alert("Correct!");
    } else {
        alert("Incorrect! Better luck next time, my furry friend!");
    }
    
    var q9 = prompt(" In the fifth book, the Dangerous Path, which animals were loose?");
    q9 = q9.toLowerCase();
    if (q9 =="dogs") {
        score++;
        alert("Correct!");
    } else {
        alert("Incorrect! Better luck next time, my furry friend!");
    }
    
     var q10 = prompt("True or false? Ravenpaw is afraid of his mentor.");
    q10 = q10.toLowerCase();
    if (q10 =="true") {
        score++;
        alert("Correct!");
    } else {
        alert("Incorrect! Better luck next time, my furry friend!");
    }
    
    var q11 = prompt("BONUS: Who is Firestar’s father?");
    q11 = q11.toLowerCase();
    if (q11 =="jake") {
        score++;
        alert("Correct!");
    } else {
        alert("Incorrect! Better luck next time, my furry friend!");
    }




    alert("You got " + score + " out of 11 questions correct! Great job my brave warrior!");
}
