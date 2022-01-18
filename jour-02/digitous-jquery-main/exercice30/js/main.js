$(".form-control").keyup(function () {
    const text = $("input");

    if (text.val().length > 5) {
        text.attr("class", "form-control is-valid mb-3");
    } else {
        text.attr("class", "form-control is-invalid mb-3");
    }
});