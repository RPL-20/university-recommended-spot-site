window.addEventListener('load', function () {
    var pages = [
        "toilet.html",
        "cafeteria.html",
        "library.html",
        "access.html"
    ];
    var roulette = document.querySelector('#roulette');
    var button = document.querySelector('#roulette-button');

    button.addEventListener('click', function () {
        var number = Math.floor(Math.random() * pages.length);
        roulette.textContent = '抽選中...';

        setTimeout(function () {
            location.href = pages[number];
        }, 1000);
    });
});
