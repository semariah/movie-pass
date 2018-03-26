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
    $("result").show();
    //alert("yes");
    moviePrice = 0;
    if(newTicket.Time === "7:00PM"){
      moviePrice += 15
    } else if (newTicket.Time === "12:00PM") {
      moviePrice += 10
    }
    if (newTicket.Age === "Yes"){
      moviePrice -= 5
    }
    $("#showtimePrice").text(moviePrice);

    if (newTicket.movieName === "blackPanther") {
      $("#movieImageBlackPanther").show();
    } else if (newTicket.movieName === "MotherOfGeorge") {
      $("#movieImageMotherOfGeorge").show();
    } else if (newTicket.movieName === "HiddenFigures") {
      $("#movieImageHiddenFigures").show();
    }

  });
});
