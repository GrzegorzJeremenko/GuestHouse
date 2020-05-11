Vue.component('section-footer', {
    props: ['lang', 'name'],
    template: `
        <footer>
        <h1>{{ copyRight }}</h1>
        </footer>
    `,
    computed: {
        copyRight() {

            let parser = new DOMParser();
            let dom = parser.parseFromString('<!doctype html><body>&copy', 'text/html');

            let year = new Date().getFullYear();

            let right;

            if(this.lang) right = 'Wszelkie prawa zastrzeżone.';
            else right = 'All rights reserved.';

            return this.name + ' ' + dom.body.textContent + ' ' + year + ' ' + right;
        }
    }
});