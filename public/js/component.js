// component js

(function () {
    Vue.component('love-component', {
        // template: '<h2>I ♥️ components</h2>',
        template: '#love-template',
        data: function() {
            return {
                something: 'vueeeeee'
            };
        },
        props: ["whatever"],
        mounted: function () {
            console.log('mounted!');
        },
        methods: {
            clicked: function() {
                this.something = this.whatever;
            },
            clicked2: function() {
                this.$emit('change', 'disco duck');
            }
        }
    });
})();
