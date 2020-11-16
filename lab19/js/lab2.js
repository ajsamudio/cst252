/**
 * Author:    AJ Samudio
 * Created:   10.21.2020
 *
 * (c) Copyright by AJ S.
 **/
 endpoint="https://www.boredapi.com/api/activity/"

 // add event listener
 $('button').click(function(){
  // alert("pressed");
  $.ajax({
      // The URL for the request
    url: endpoint,
    // Whether this is a POST or GET request
    type: "GET",
    // The type of data we expect back
    dataType : "json",
  })
  // If the request succeeds
  .done(function( data ) {
      // alert("Success!");
      var quote = data.activity;
      $("#output").append("<p>" + quote)
  })
  // If the request fails
  .fail(function( xhr, status, errorThrown ) {
      console.log(errorThrown + " Status:" + status );
  })
 })
