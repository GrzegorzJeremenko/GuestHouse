Vue.component('navbar', {
    props: ['lang', 'mobile'],
    template: `
        <nav>
            <div id="inside">
                <img v-on:click="scroll('home')" src="./img/logo.png">
                <transition name="fade">
                    <section
                        id="menu"
                        v-show="(mobile === false) || (mobile === true && burger === true)"
                    >
                        <button
                            v-for="item in items"
                            v-on:click="scroll( item.sectionName )"
                            :key="item.sectionName"
                        >
                            {{ name( item ) }}
                        </button>
                        <div v-show="mobile === false" id="lang">
                            <button 
                                v-on:click="changeLang('pl')"
                            >
                                PL
                            </button>
                            <button 
                                v-on:click="changeLang('en')"
                            >
                                EN
                            </button>
                        </div>
                    </section>
                </transition>
                <div v-show="mobile === true" id="mobile">
                    <button 
                        v-on:click="changeLang('mobile')"
                    >
                        {{
                            lang == false ? 'PL'
                            : 'EN'
                        }}
                    </button>

                    <i 
                    class="icon"
                    v-on:click="burgerChange()"
                    >
                        {{ burgerIcon() }}
                    </i>
                </div>
            </div>
        </nav>
    `,
    data() {
        return {
            items: [
                {
                    valuePl: 'Strona główna',
                    valueEn: 'Home',
                    sectionName: 'home'
                },
                {
                    valuePl: 'O nas',
                    valueEn: 'About us',
                    sectionName: 'aboutUs'
                },
                {
                    valuePl: 'Pokoje',
                    valueEn: 'Rooms',
                    sectionName: 'rooms'
                },
                {
                    valuePl: 'Restauracja',
                    valueEn: 'Restaurant',
                    sectionName: 'restaurant'
                },
                {
                    valuePl: 'Galeria',
                    valueEn: 'Photo gallery',
                    sectionName: 'gallery'
                },
                {
                    valuePl: 'Kontakt',
                    valueEn: 'Contact Us',
                    sectionName: 'contact'
                }
            ],
            burger: false,
            lastScroll: 0,
        }
    },
    methods: {
        name(item) {
            if(this.lang) return item.valuePl;
            else return item.valueEn;
        },
        scroll(sectionName) {
            this.burger = false;

            window.scroll({
                top: 
                    sectionName == 'home' ? '0'
                    : document.getElementById(sectionName).offsetTop - ( window.innerHeight / 6),
                left: 0,
                behavior: 'smooth'
            }); 
        },
        burgerChange() {
            this.burger = !this.burger;
            document.getElementsByTagName("nav")[0].style.height = '80px';
        },
        changeLang( lang ) {
            this.$emit('change-lang', lang);
        },
        burgerIcon() {
            let icon;

            if(this.burger) icon = '&#xe801';
            else icon = '&#xf0c9';

            let parser = new DOMParser();
            let dom = parser.parseFromString('<!doctype html><body>' + icon, 'text/html');

            return dom.body.textContent;
        }
    },
    created() {
        window.addEventListener('scroll', () => {
            if(this.mobile === false) {
                if( this.lastScroll < window.scrollY ) document.getElementsByTagName("nav")[0].style.height = '60px';
                else document.getElementsByTagName("nav")[0].style.height = '80px';
            } else document.getElementsByTagName("nav")[0].style.height = '80px';

            this.lastScroll = window.scrollY;
        });
    }
});