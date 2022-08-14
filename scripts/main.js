("use strict",
    () => {
        $(function() {
            let url = window.location.href;
            $(".nav-item a").each(function() {
                if (url == this.href) {
                    $(this).closest("li").addClass("active");
                    $(this).closest("li").parent().parent().addClass("active");
                }
            });
        });

        // load content on scroll
        window.addEventListener("scroll", reveal);

        function reveal() {
            let reveals = document.querySelectorAll(".reveal-loaded");

            for (let i = 0; i < reveals.length; i++) {
                let windowHeight = window.innerHeight;
                let revealTop = reveals[i].getBoundingClientRect().top;
                let revealPoint = 200;

                if (revealTop < windowHeight - revealPoint) {
                    reveals[i].classList.add("reveal-active");
                }
            }
        }

        function checkIncludeActiceClass(string) {
            let classList = $(string).attr("class");
            let classArr = classList.split(/\s+/);
            return classArr.includes("active");
        }

        // handle change service click
        $("#services_development").on("click", () => {
            if (checkIncludeActiceClass("#services_development")) {
                return;
            }
            $("#services_development").addClass("active");

            if (checkIncludeActiceClass("#services_designing")) {
                $("#services_designing").removeClass("active");
            }
            if (checkIncludeActiceClass("#services_writting")) {
                $("#services_writting").removeClass("active");
            }
            if (checkIncludeActiceClass("#services_marketing")) {
                $("#services_marketing").removeClass("active");
            }
        });
        $("#services_designing").on("click", () => {
            if (checkIncludeActiceClass("#services_designing")) {
                return;
            }
            $("#services_designing").addClass("active");

            if (checkIncludeActiceClass("#services_development")) {
                $("#services_development").removeClass("active");
            }
            if (checkIncludeActiceClass("#services_writting")) {
                $("#services_writting").removeClass("active");
            }
            if (checkIncludeActiceClass("#services_marketing")) {
                $("#services_marketing").removeClass("active");
            }
        });
        $("#services_writting").on("click", () => {
            if (checkIncludeActiceClass("#services_writting")) {
                return;
            }
            $("#services_writting").addClass("active");

            if (checkIncludeActiceClass("#services_designing")) {
                $("#services_designing").removeClass("active");
            }
            if (checkIncludeActiceClass("#services_development")) {
                $("#services_development").removeClass("active");
            }
            if (checkIncludeActiceClass("#services_marketing")) {
                $("#services_marketing").removeClass("active");
            }
        });
        $("#services_marketing").on("click", () => {
            if (checkIncludeActiceClass("#services_marketing")) {
                return;
            }
            $("#services_marketing").addClass("active");

            if (checkIncludeActiceClass("#services_designing")) {
                $("#services_designing").removeClass("active");
            }
            if (checkIncludeActiceClass("#services_writting")) {
                $("#services_writting").removeClass("active");
            }
            if (checkIncludeActiceClass("#services_development")) {
                $("#services_development").removeClass("active");
            }
        });

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
            scrollServices();
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

        function scrollServices() {
            const serviceContainer = document.getElementById('services_header_fixed');
            const top = serviceContainer.getBoundingClientRect().top;
            if(top <= 66) {
                serviceContainer.classList.add("sticky_services_nav");
            }

            const serviceSection = document.getElementById('service_nav_Sections');
            const sectionTop = serviceSection.getBoundingClientRect().top;
            const serviceSection1container = document.getElementById('services_development_key');
            if (sectionTop <= 66) {
                serviceSection1container.classList.add('p-t-6-r-e-m');
            } else {
                serviceSection1container.classList.remove('p-t-6-r-e-m');
                serviceContainer.classList.remove('sticky_services_nav');
            }
            
        }

        // masonry gird filter and preview options
        mixitup(".filter-container");

    })();