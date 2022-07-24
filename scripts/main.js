("use strict",
    () => {
        // handle loader

        const loader = document.getElementById("preloader");
        window.addEventListener("load", () => {
            loader.style.display = "none";
            // setTimeout(() => {
            // }, 300);
        });

        //top scroll handler

        const scrollBtn = document.getElementById("top-button");

        window.onscroll = function() {
            scrollFunction();
        };

        function scrollFunction() {
            if (
                document.body.scrollTop > 20 ||
                document.documentElement.scrollTop > 20
            ) {
                scrollBtn.style.display = "block";
            } else {
                scrollBtn.style.display = "none";
            }
        }

        scrollBtn.addEventListener("click", () => {
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
        });
    })();