(function(){

  $(function(){

    let answer;
    let pointValue;
    let counter = 0;

    function getQuestion(){
      //alert("hey, JS is working!");
      $.get("http://jservice.io/api/random", function(data){
        $("#question").html(data[0].question)
        $("#category").html(data[0].category.title)
        $("#point-value").html(data[0].value)
        answer = data[0].answer
        pointValue = data[0].value
        $("#answer").val("")
        console.log(answer)
      })
    }

    getQuestion();



  //let guessButton = document.querySelector("#button");
  //let counter= document.querySelector("#counter");
  //let userAnswer= document.querySelector("#answer");

  $("#button").click(function(){
    //console.log("Guess Button is clicked!")
      let userAnswer = $("#answer").val(); //use .val when you want the value form an input field. If you wanted a particular value, you would put it between the parenthesis of .val()
      if (userAnswer.toLowerCase() == answer.toLowerCase()) { //.toLowerCase makes both answers lower case so that the answer is case agnostic.
        alert("Correct! You just added " + pointValue + " points to your score.");
        counter += pointValue; //another way of doing parseInt.
        $("#counter").html(counter)
      } else {
        alert("Incorrect! The right answer is " + answer + ".")
      }
        getQuestion();

    })
  })

})()
