function checkQuiz(){

    let score = 0;

    const answers = document.querySelectorAll("input[type='radio']:checked");

    answers.forEach(answer=>{
        score += Number(answer.value);
    });

    const total = 30;

    let message = "";

    if(score === total){
        message = "🎉 Perfect! " + score + "/" + total;
    }
    else if(score >= 20){
        message = "👍 Good Job! " + score + "/" + total;
    }
    else{
        message = "📚 Keep Practicing! " + score + "/" + total;
    }

    document.getElementById("result").innerHTML = message;
}