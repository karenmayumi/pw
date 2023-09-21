var navitem = document.querySelectorAll('nav ul li a');
        var sections = document.querySelectorAll('article');

        var quinzevh = window.pageYOffset * 0.01 * 20;
        window.addEventListener('resize', function() {
            quinzevh = window.pageYOffset * 0.01 * 20;
        });
        window.onscroll = function() {
            var scrollPos = (window.pageYOffset || document.documentElement.scrollTop) + quinzevh;

            sections.forEach(function(div, i) {
                if (div.offsetTop <= scrollPos && (div.offsetTop + div.offsetHeight)  > scrollPos) {
                    navitem.forEach(function(section) { section.classList.remove('active'); });
                    navitem[i].classList.add('active');
                }
            });
        };