$(".btn").click(function () {
    let res = $("input").val();
    $.ajax({
        url: "https://restcountries.com/v3.1/name/usa",
        success: function (data) {
            data.forEach((country) => {
                $("#country").html(`${country.name.common}`);
                $("#capital").html(`${country.capital}`);
            })
        }
    })
});