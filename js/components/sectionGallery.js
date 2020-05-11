Vue.component('section-gallery', {
    props: ['lang', 'mobile'],
    template: `
        <section id="gallery">
            <h1>
                {{
                    lang ? 'Galeria'
                    : 'Photo gallery'
                }}
            </h1>
            <div id="inside">
                <img
                    v-for="image in images"
                    :src=" imgUrl( image ) "
                    v-on:click=" openFullScreen( image.id ) "
                    :key="image.id"
                >
            </div>
        </section>
    `,
    data() {
        return {
            images: [
                {
                    id: 0
                },
                {
                    id: 1
                },
                {
                    id: 2
                },
                {
                    id: 3
                },
                {
                    id: 4
                },
            ]
        }
    },
    methods: {
        imgUrl( image ) {
            return './img/sectionGallery/' + image.id + '.png';
        },
        openFullScreen( id ) {
            if(this.mobile == false) this.$emit('open', this.images, id);
        }
    },
    created() {
        window.addEventListener('scroll', () => {
            if( (document.getElementById('gallery').offsetTop - ( window.innerHeight / 2)) <= window.scrollY ) {
                document.querySelector('section#gallery div#inside').style.animation = "fadeIn .5s ease 0s 1";
                document.querySelector('section#gallery div#inside').style.opacity = "1";
            }
        });
    }
});
