Vue.component('gallery-full-screen', {
    props: ['galleryimages', 'galleryselect', 'mobile'],
    template: `
        <transition name="fade">
            <div
                id="galleryFullScreen"
                v-show=" galleryselect != -1 "
            >
                <i
                    class="icon"
                    v-on:click=" prev() "
                >
                    &#xf104;
                </i>

                <img :src=" imgUrl() ">

                <i
                    class="icon"
                    v-on:click=" next() "
                >
                    &#xf105;
                </i>
            </div>
        </transition>
    `,
    data() {
        return {
            display: false,
        }
    },
    methods: {
        imgUrl() {
            if(this.galleryselect != -1) return './img/sectionGallery/' + this.galleryimages[this.galleryselect].id + '.png';
        },
        next() {
            this.$emit('next');
        },
        prev() {
            this.$emit('prev');
        },
        close() {
            this.$emit('close');
        }
    },
    created() {
        document.addEventListener("keydown", (event) => {
            let keys = { left: 37, right: 39, esc: 27};

            switch(event.keyCode) {
                case keys.left:
                    this.prev();
                break;
                case keys.right:
                    this.next();
                break;
                case keys.esc:
                    this.close();
                break; 
            }
        }),
        document.addEventListener("click", (event) => {
            if( event.target == document.getElementById('galleryFullScreen') ) this.close();
        });
        window.addEventListener('resize', () => { 
            if(this.mobile == true) this.close();
        })
    }
});
