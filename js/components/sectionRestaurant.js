Vue.component('section-restaurant', {
    props: ['lang'],
    template: `
        <section id="restaurant"> 
            <h1>
                {{
                    lang ? 'Restauracja'
                    : 'Restaurant'
                }}
            </h1>
            <div id="inside">
                <img src="./img/sectionRestaurant/food.png">
                <div id="text">
                    <h1>
                        {{
                            lang ? 'Spektakularne potrawy'
                            : 'Spectacular dishes'
                        }}
                    </h1>

                    <h2>
                        <i>
                            {{
                                lang ? 'Śniadanie rozpoczyna się od 6:30 do 10:00, można je zjeść w jadalni lub na świeżym powietrzu w ogrodzie.'
                                : 'Breakfast starts at 06:30am until 10:00am, breakfast can be served in the dining room or alfresco on the garden patio.'
                            }}
                        </i>
                    </h2>
                    <h2>
                        <i>
                            {{
                                lang ? 'Zapraszamy także na kontynentalny bufet składający się ze świeżych owoców, jogurtu, soku, różnorodnych płatków zbożowych, pieczywa rzemieślniczego i serów. Możesz zjeść pyszne gorące śniadanie serwowane przez naszego szefa kuchni, Menu zmiania się codziennie.'
                                : 'Please join us for a continental buffet comprising of Fresh Fruits, Yoghurt, Selection of Juice, Variety of cereals, Artisanal Breads and smorgasbord of cheeses. You can enjoy a delicious hot breakfast served by our in house chef, Menu Changes Daily.'
                            }}
                        </i>
                    </h2>
                    <h2>
                        <i>
                            {{
                                lang ? 'Nasze kolacje są na życzenie, świeżo przygotowane przez szefa kuchni.'
                                : 'Our dinners are on request , Freshly prepared by the owner chef.'
                            }}
                        </i>
                    </h2>
                </div>
            </div>
        </section>
    `,
    created() {
        window.addEventListener('scroll', () => {
            if( (document.getElementById('restaurant').offsetTop - ( window.innerHeight / 2)) <= window.scrollY ) {
                document.querySelector('section#restaurant div#inside').style.animation = "fadeIn .5s ease 0s 1";
                document.querySelector('section#restaurant div#inside').style.opacity = "1";
            }
        });
    }
});
