$(".btn").click(function () {
    const text = $("input");

    if (text.val().length > 5) {
        text.addClass("is-valid");
    } else {
        text.addClass("is-invalid");
    }
});