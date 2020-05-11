Vue.config.devtools = false;

new Vue({
    el: 'div#app',
    data: {
        name: 'GuestHouse',
        lang: true,
        mobile: false,
        screenWidth: 1200,
        galleryimages: [],
        galleryselect: -1
    },
    created() {
        window.addEventListener('resize', this.mobileCheck);

        this.mobileCheck();
    },
    destroyed() {
        window.removeEventListener('resize', this.mobileCheck);
    },
    methods: {
      mobileCheck() {
          this.screenWidth = window.innerWidth;

          if(window.innerWidth < 1280) this.mobile = true;
          else this.mobile = false;
      },
      changeLang( lang ) {
        if(lang == 'mobile') this.lang = !this.lang;
        else {
          if(lang == 'pl') this.lang = true;
          else this.lang = false;
        }
      },
      galleryOpen(galleryimages, galleryselect) {
        this.galleryimages = galleryimages;
        this.galleryselect = galleryselect;
      },
      galleryNext() {
        if( (this.galleryimages.length-1) > this.galleryselect ) this.galleryselect++;
        else if( (this.galleryimages.length-1) == this.galleryselect) this.galleryselect = 0;
      },
      galleryPrev() {
        if( this.galleryselect > 0) this.galleryselect--;
        else if( this.galleryselect === 0 ) this.galleryselect = (this.galleryimages.length-1);
      },
      galleryClose() {
        this.galleryselect = -1;
      }
    }
});