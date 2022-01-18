// $(".btn").click(function () {
//     $("input[type =text]").prop("disabled",false);
// });

document.querySelector(".btn").addEventListener("click", function() {
    document.querySelector("input[type=text]").disabled = false;
});