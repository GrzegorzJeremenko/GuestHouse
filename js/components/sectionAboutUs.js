Vue.component('section-aboutus', {
    props: ['lang', 'name'],
    template: `
        <section id="aboutUs"> 
            <h1>
                {{
                    lang ? 'Witamy w '
                    : 'Welcome To '
                }}
                {{ name }}
            </h1>
            <h2>
                {{ 
                    lang ? 'Nasza Willa położona w samym sercu Zakopanego, Guesthouse został specjalnie zaprojektowany z myślą o podróżnikach. Gustownie urządzony, z niesamowicie dużymi pokojami dającymi podróżnikowi poczucie spokoju i ciszy, przestronności w połączeniu z widokiem rozległych gór z odgłosami ptasiej przyrody, która Cię obudzi.'
                    : 'Our Villa situated in the heart of Zakopane, guesthouse has been particularly designed with the traveller at heart. Tastefully decorated with unexpectedly large rooms gives the traveller a feeling of peace and tranquillity, spaciousness coupled with views of vast open bushlands with the sounds of birdlife to waken you.' 
                }}
            </h2>
        </section>
    `
});
