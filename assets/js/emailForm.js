// console.log("is loaded");

var emailForm = $(document).ready(function() {
    
    $('#contact-submit').click("on", function(event) {
        event.preventDefault();

        var myData = {
            inputName: $('#yourName').val(),
            inputEmail: $('#exampleFormControlInput1').val(),
            inputContent: $('#exampleFormControlTextarea1').val(),
            };    
            
            console.log(myData);

            $.post("/api/sendEmail", myData)
            .then(function(data){
             console.log(data);
            });
    });
});