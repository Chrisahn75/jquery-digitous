$(".btn").click(function () {
    $.ajax({
        url: "https://restcountries.com/v3.1/name/france",
        success: function (data) {
            data.forEach((country) => {
                $("#country").html(`${country.name.common}`);
                $("#capital").html(`${country.capital}`);
            })
        }
    })
});