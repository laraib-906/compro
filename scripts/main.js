("use strict",
    () => {

        $(function() {
            let url = window.location.href;
            $(".nav-item a").each(function() {
                if (url == (this.href)) {
                    $(this).closest("li").addClass("active");
                    $(this).closest("li").parent().parent().addClass("active");
                }
            });
        });

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

        function checkIncludeActiceClass(string) {
            let classList = $(string).attr("class");
            let classArr = classList.split(/\s+/);
            return classArr.includes('active')
        }

        // handle change service click
        $('#services_development').click(() => {
            if (checkIncludeActiceClass("#services_development")) {
                return;
            }
            $('#services_development').addClass('active');

            if (checkIncludeActiceClass('#services_designing')) {
                $('#services_designing').removeClass('active');
            }
            if (checkIncludeActiceClass('#services_writting')) {
                $('#services_writting').removeClass('active');
            }
            if (checkIncludeActiceClass('#services_marketing')) {
                $('#services_marketing').removeClass('active');
            }
        })
        $('#services_designing').click(() => {
            if (checkIncludeActiceClass("#services_designing")) {
                return;
            }
            $('#services_designing').addClass('active');

            if (checkIncludeActiceClass('#services_development')) {
                $('#services_development').removeClass('active');
            }
            if (checkIncludeActiceClass('#services_writting')) {
                $('#services_writting').removeClass('active');
            }
            if (checkIncludeActiceClass('#services_marketing')) {
                $('#services_marketing').removeClass('active');
            }
        })
        $('#services_writting').click(() => {
            if (checkIncludeActiceClass("#services_writting")) {
                return;
            }
            $('#services_writting').addClass('active');

            if (checkIncludeActiceClass('#services_designing')) {
                $('#services_designing').removeClass('active');
            }
            if (checkIncludeActiceClass('#services_development')) {
                $('#services_development').removeClass('active')
            }
            if (checkIncludeActiceClass('#services_marketing')) {
                $('#services_marketing').removeClass('active');
            }
        })
        $('#services_marketing').click(() => {
            if (checkIncludeActiceClass("#services_marketing")) {
                return;
            }
            $('#services_marketing').addClass('active');

            if (checkIncludeActiceClass('#services_designing')) {
                $('#services_designing').removeClass('active');
            }
            if (checkIncludeActiceClass('#services_writting')) {
                $('#services_writting').removeClass('active');
            }
            if (checkIncludeActiceClass('#services_development')) {
                $('#services_development').removeClass('active');
            }
        })

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