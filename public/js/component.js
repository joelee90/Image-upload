// // component js

// (function () {
Vue.component("modal", {
    template: "#modal-template",
    // data: function() {
    //     return;
    // },
    props: ["showModal"],
    mounted: function () {
        let self = this;
        console.log('mounted!');
        console.log("self.id", self.id);
        axios
            .get(`/getData/` + self.$e1.id)
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                console.log(err.message);
            });
    }
    // methods: {
    //     clicked: function() {
    //
    //     }
    // }
});
// });

// (function () {
//     Vue.component('love-component', {
//         // template: '<h2>I ♥️ components</h2>',
//         template: '#love-template',
//         data: function() {
//             return {
//                 something: 'vueeeeee'
//             };
//         },
//         props: ["whatever"],
//         mounted: function () {
//             console.log('mounted!');
//         },
//         methods: {
//             clicked: function() {
//                 this.something = this.whatever;
//             },
//             clicked2: function() {
//                 this.$emit('change', 'disco duck');
//             }
//         }
//     });
// })();
