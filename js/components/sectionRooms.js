Vue.component('section-rooms', {
    props: ['lang'],
    template: `
        <section id="rooms">
            <h1>
                {{
                    lang ? 'Nasze pokoje'
                    : 'Our rooms'
                }}
            </h1>
            <div id="inside">
                <div 
                    class="room"
                    v-for="room in rooms"
                    :key="room.id"
                >
                    <img :src=" imgUrl( room ) ">

                    <h1>{{ roomName( room ) }}</h1>

                    <h2>
                        <i class="icon">&#xe800;</i>
                        {{ roomGuest( room ) }}
                    </h2>
                    <h2>
                        <i class="icon">&#xf1cb;</i>
                        {{ roomArea( room ) }}
                        &sup2;
                    </h2>
                    <h2>
                        <i class="icon">&#xf2cd;</i>
                        {{ roomBath( room ) }}
                    </h2>
                    
                    <h3>
                        <i>{{ roomDesc( room ) }}</i>
                    </h3>
                </div>
            </div>
        </section>
    `,
    data() {
        return {
            rooms: [
                {
                    id: 0,
                    namePl: 'Apartament dwuosobowy',
                    nameEn: 'Classic Double Suite',
                    descPl: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus non ipsum mauris. Morbi lacinia venenatis arcu, scelerisque tempor nulla placerat in. Nunc in aliquam erat, at egestas purus. Nullam placerat nunc eu odio rhoncus ultricies. Vivamus sodales vel ex eget porta. Curabitur et lectus eu arcu vulputate malesuada placerat vitae. ',
                    descEn: 'ENrem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus non ipsum mauris. Morbi lacinia venenatis arcu, scelerisque tempor nulla placerat in. Nunc in aliquam erat, at egestas purus. Nullam placerat nunc eu odio rhoncus ultricies. Vivamus sodales vel ex eget porta. Curabitur et lectus eu arcu vulputate malesuada placerat vitae. ',
                    area: 14,
                    guest: 2,
                    bath: true
                },
                {
                    id: 1,
                    namePl: 'Trzyosobowy apartament',
                    nameEn: 'Classic Triple Suite',
                    descPl: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus non ipsum mauris. Morbi lacinia venenatis arcu, scelerisque tempor nulla placerat in. Nunc in aliquam erat, at egestas purus. Nullam placerat nunc eu odio rhoncus ultricies. Vivamus sodales vel ex eget porta. Curabitur et lectus eu arcu vulputate malesuada placerat vitae. ',
                    descEn: 'ENrem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus non ipsum mauris. Morbi lacinia venenatis arcu, scelerisque tempor nulla placerat in. Nunc in aliquam erat, at egestas purus. Nullam placerat nunc eu odio rhoncus ultricies. Vivamus sodales vel ex eget porta. Curabitur et lectus eu arcu vulputate malesuada placerat vitae. ',
                    area: 49,
                    guest: 3,
                    bath: false
                },
                {
                    id: 2,
                    namePl: 'Apartament rodzinny',
                    nameEn: 'Family Suite',
                    descPl: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus non ipsum mauris. Morbi lacinia venenatis arcu, scelerisque tempor nulla placerat in. Nunc in aliquam erat, at egestas purus. Nullam placerat nunc eu odio rhoncus ultricies. Vivamus sodales vel ex eget porta. Curabitur et lectus eu arcu vulputate malesuada placerat vitae. ',
                    descEn: 'ENrem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus non ipsum mauris. Morbi lacinia venenatis arcu, scelerisque tempor nulla placerat in. Nunc in aliquam erat, at egestas purus. Nullam placerat nunc eu odio rhoncus ultricies. Vivamus sodales vel ex eget porta. Curabitur et lectus eu arcu vulputate malesuada placerat vitae. ',
                    area: 54,
                    guest: 4,
                    bath: true
                }
            ]
        }
    },
    methods: {
        imgUrl(room) {
            return './img/sectionRooms/' + room.id + '.png';
        },
        roomName(room) {
            if(this.lang) return room.namePl;
            else return room.nameEn;
        },
        roomDesc(room) {
            if(this.lang) return room.descPl;
            else return room.descEn;
        },
        roomGuest(room) {
            if(this.lang) return room.guest + ' osobowy';
            else return room.guest + ' guests';
        },
        roomArea(room) {
            return room.area + 'm';
        },
        roomBath(room) {
            if(this.lang) {
                if(room.bath) return 'z łazienką';
                else return 'bez łazienki';
            }
            else {
                if(room.bath) return 'with bathroom';
                else return 'no bathroom';
            }
        }
    },
    created() {
        window.addEventListener('scroll', () => {
            if( (document.getElementById('rooms').offsetTop - ( window.innerHeight / 2)) <= window.scrollY ) {
                for(let i = 0; i < document.getElementsByClassName('room').length; i++) {
                    document.getElementsByClassName('room')[i].style.animation = "fadeIn .5s ease 0s 1";
                    document.getElementsByClassName('room')[i].style.opacity = "1";
                }
            }
        });
    }
});
