Vue.component('headerbar', {
    props: ['lang', 'name'],
    template: `
        <header> 
            <h1>
                {{ 
                    lang ? 'Ciesz się luksusowym pobytem'
                    : 'Enjoy A Luxurious Stay'
                }}
            </h1>
            <h2>{{ name }}</h2>
        </header>
    `,
    created() {
        window.addEventListener('scroll', () => {
            document.getElementsByTagName("header")[0].style.backgroundPosition = '50% calc( 80% + ' + ( window.pageYOffset/2 ) + 'px )';
        });
    }
});