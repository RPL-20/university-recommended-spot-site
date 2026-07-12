var pages = [
    "toilet.html",
    "cafeteria.html",
    "library.html",
    "access.html"
];

var number = Math.floor(Math.random() * pages.length);

//「抽選中...」の文字が一瞬で消えないよう、3秒待ってから遷移する
setTimeout(function () {
    location.href = pages[number];
}, 3000);
