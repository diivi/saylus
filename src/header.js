$("#mobile-menu").click(function () {
    $(".icon").toggleClass("close");
    var x = document.getElementsByClassName("overlay")[0];
    if ($(".icon").hasClass("close")) {
        x.style.display = "block";
        $("body").addClass("modal-open");
    } else {
        x.style.display = "none";
        $("body").removeClass("modal-open");
    }
});

window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    if (
        window.innerWidth > 815 &&
        (document.body.scrollTop > 80 ||
            document.documentElement.scrollTop > 80)
    ) {
        document.getElementById("navbar").style.padding = "30px 50px";
        document.getElementById("logo").style.fontSize = "32px";
    } else if (
        window.innerWidth > 815 &&
        (document.body.scrollTop < 80 ||
            document.documentElement.scrollTop < 80)
    ) {
        document.getElementById("navbar").style.padding = "60px 50px";
        document.getElementById("logo").style.fontSize = "38px";
    } else if (
        window.innerWidth < 815 &&
        (document.body.scrollTop > 80 ||
            document.documentElement.scrollTop > 80)
    ) {
        document.getElementById("navbar").style.padding = "30px 40px";
        document.getElementById("logo").style.fontSize = "28px";
    } else if (
        window.innerWidth < 815 &&
        (document.body.scrollTop < 80 ||
            document.documentElement.scrollTop < 80)
    ) {
        document.getElementById("navbar").style.padding = "30px 40px";
        document.getElementById("logo").style.fontSize = "32px";
    }
}
function dePdf(){
    window.location.href="./res/bhai.pdf";
}