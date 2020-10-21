(() => {
    //Closes the sidebar menu
    document.querySelector(".menu-toggle").addEventListener("click", e => {  
        e.preventDefault();
        document.querySelector("#sidebar-wrapper").classList.toggle("active");
        document.querySelector(".menu-toggle > .fa-bars, .menu-toggle > .fa-times").classList.toggle("fa-bars fa-times");
        this.classList.toggle("active");
    });
    //Cool scroll 
    document.querySelector('a.js-scroll-trigger[href*="#"]:not([href="#"])').addEventListener("click", () => {
        if(location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            const target = this.hash;
            target.length ? target : document.querySelector('[name=' + this.hash.slice(1) + ']')
            if(target.length) {
                document.body.scrollTo({
                    top:0,
                    left:0,
                    behavior: 'smooth'
                });               
                return false;
            }
        } 
    });
    
    document.querySelector('#sidebar-wrapper .js-scroll-trigger').addEventListener("click",() => {
        document.querySelector("#sidebar-wrapper").classList.remove("active");
        document.querySelector(".menu-toggle").classList.remove("active");
        document.querySelector(".menu-toggle > .fa-bars, .menu-toggle > .fa-times").classList.toggle("fa-bars fa-times");
    });
    // Back to top button     
    document.addEventListener("scroll", () => {
        const scrollDistance = window.pageYOffset
        if (scrollDistance > 100) {
            document.querySelector('.scroll-to-top').style.display="block";
        }
        else {
            document.querySelector('.scroll-to-top').style.display="none";
        }
    });

})()
