$(".btn").click(function () {
    $.ajax({
        url: "https://restcountries.com/v3.1/name/france",
        success: function (data) {

        console.log(data[0].name);
        console.log(data[0].capital)
        }
        
    })

});