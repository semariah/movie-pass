function Ticket (movieName, Time, Age){
  this.movieName = movieName;
  this.Time = Time;
  this.Age = Age;
}






$(document).ready(function(){
  $("form#Movie").submit(function(event){
    event.preventDefault();
    //debugger;
    var question1 = $("select#movieSelection").val();
    var question2 = $("select#movieTime").val();
    var question3 = $("select#movieAge").val();
    var newTicket = new Ticket(question1, question2, question3);

    $("#showtime").text(question2);
    //$("result").show();
    //alert("yes");
    var moviePrice = 0;

    if (newTicket.Time === "11:00PM"){
      moviePrice += 15
      debugger;
    } else if (newTicket.Time === "7:00PM"){
      moviePrice += 10
    }

    if (newTicket.Age === "yes"){
      moviePrice -= 5
    }

    $("#showtimePrice").text(moviePrice);
    //$("result").show();

    if (newTicket.movieName === "BlackPanther"){
      $("#movieImageBlackPanther").show();
    } else if (newTicket.movieName === "MotherOfGeorge"){
      $("#movieImageMotherOfGeorge").show();
    } else if (newTicket.movieName === "HiddenFigures"){
      $("#movieImageHiddenFigures").show();
    }

  });
});
