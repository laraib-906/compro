("use strict",
    () => {

        // load content on scroll
        window.addEventListener('scroll', reveal);

        function reveal() {
            let reveals = document.querySelectorAll('.reveal-loaded');

            for (let i = 0; i < reveals.length; i++) {
                let windowHeight = window.innerHeight;
                let revealTop = reveals[i].getBoundingClientRect().top;
                let revealPoint = 200;

                if (revealTop < windowHeight - revealPoint) {
                    reveals[i].classList.add('reveal-active');
                }
            }

        }


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

        // masonry gird filter and preview options
        mixitup(".filter-container");

    })();