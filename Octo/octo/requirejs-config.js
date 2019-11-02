var config = {
    paths: {
        'owl_carousel': 'owl.carousel/owl.carousel.min',
    },
    shim: {
        'owl.carousel/owl.carousel.min': {
            deps: ['jquery']
        },
        'owl_carousel': {
            deps: ['jquery']
        }
    }

};
