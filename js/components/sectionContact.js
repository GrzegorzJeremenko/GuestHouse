Vue.component('section-contact', {
    props: ['lang', 'mobile'],
    template: `
        <section id="contact">
            <div id="mapouter">
                <div 
                    id="gmap_canvas"
                    v-show="mobile === false"
                >
                    <iframe
                        id="gmap_canvas"
                        src="https://maps.google.com/maps?q=Jagiello%C5%84ska%2031%2C%2034-500%20Zakopane&t=&z=13&ie=UTF8&iwloc=&output=embed"
                        frameborder="0"
                        scrolling="no"
                        marginheight="0"
                        marginwidth="0"
                    />
                </div>
                <div id="info">
                    <h1>
                        {{
                            lang ? 'Kontakt'
                            : 'Contact'
                        }}
                    </h1>
                    <h2>
                        <b>
                            {{
                                lang ? 'Adres: '
                                : 'Address: '
                            }}
                        </b>
                        <a
                            href="https://goo.gl/maps/BK5mBhYtQVYrLkwy9"
                            target="_blank"
                        >
                            Jagiellońska 31, 34-500 Zakopane
                        </a>
                    </h2>
                    <h2>
                        <b>
                            {{
                                lang ? 'Telefon: '
                                : 'Phone: '
                            }}
                        </b>
                        <a 
                            href="tel:500100100"
                        >
                            +48 500 100 100
                        </a>
                    </h2>
                    <h2>
                        <b>E-mail: </b>
                        <a 
                            href="mailto:gh@guesthouse.pl"
                        >
                            gh@guesthouse.pl
                        </a>
                    </h2>
                </div>
            </div>
        </section>
    `,
    created() {
        window.addEventListener('scroll', () => {
            if( (document.getElementById('contact').offsetTop - ( window.innerHeight)) <= window.scrollY ) {
                document.getElementById('info').style.animation = "fadeIn .5s ease 0s 1";
                document.getElementById('info').style.opacity = "1";
            }
        });
    }
});