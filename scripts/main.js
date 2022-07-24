("use strict",
    () => {
        // handle loader

        const loader = document.getElementById("preloader");
        window.addEventListener("load", () => {
            setTimeout(() => {
                loader.style.display = "none";
            }, 1000);
        });
    })();