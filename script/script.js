const carousel = document.getElementById('carouselSlides');
        const carouselInstance = new bootstrap.Carousel(carousel);
        setTimeout(function() {
            carouselInstance.cycle();
        }, 4000); 