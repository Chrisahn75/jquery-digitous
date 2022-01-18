// $(".btn").click(function () {
//     $("#square").animate({
//         width : "500px"
//     })
// });

document.querySelector(".btn").addEventListener("click", function() {
    document.querySelector("#square").style.animation({width: "500px"})
});
