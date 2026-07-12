const pages = [
            "toilet.html",
            "cafe.html",
            "library.html",
            "access.html"
        ];

        const number = Math.floor(Math.random() * pages.length);

        location.href = pages[number];
        