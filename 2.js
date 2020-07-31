$(document).scroll(function () {
    const navbar = $("nav.is-fixed-top");
    navbar.toggleClass('scrolled', $(this).scrollTop() > navbar.height());
    if (navbar.hasClass('scrolled')) {
        $("#nav-logo").attr('src', 'https://i.postimg.cc/kX4y7z8T/favicon-32.png');
    } else {
        $("#nav-logo").attr('src', 'https://i.postimg.cc/7hXXKyz2/dark-bg-whatzeweb.png');
    }
});