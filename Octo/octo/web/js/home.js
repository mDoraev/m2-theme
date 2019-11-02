require([
            'jquery',
            'owl_carousel'
        ], function ($) {
    jQuery(document).ready(function () {

        $(".js-home-slider").owlCarousel(
            {
                margin: 0,
                autoHeight: true,
                autoplay: true,
                responsive: {
                    0: {
                        items: 1
                    }
                }
            }
        );

                $(".js-home-brands").owlCarousel(
            {
                margin: 30,
                autoHeight: true,
                nav: true,
                responsive: {
                    0: {
                        items: 2
                    },
                    500: {
                        items: 3
                    },
                    1300: {
                        items: 4
                    }
                }
            }
        );

            $(".blog__sidebar-recent .items").owlCarousel(
            {
                margin: 25,
                autoHeight: true,
                nav: true,
                responsive: {
                    0: {
                        items: 1
                    },
                    600: {
                        items: 2
                    }
                    
                }
            }
        );

                $(".product-items.widget-product-grid").owlCarousel(
            {
                margin: 30,
                autoHeight: false,
                nav: true,
                responsive: {
                    0: {
                        items: 1
                    },
                    500: {
                        items: 2
                    },
                    1100: {
                        items: 3
                    },
                    1300: {
                        items: 4
                    }
                }
            }
        );
          

    });
});
