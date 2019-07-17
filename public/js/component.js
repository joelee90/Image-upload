// // component js

// (function () {
Vue.component("modal", {
    template: "#modal-template",
    data: function() {
        return {
            url: "",
            title: "",
            description: "",
            username: "",
            date: ""
        };
    },
    props: ["showmodal"],
    mounted: function () {
        let self = this;
        console.log('mounted!');
        console.log("self.showmodal", self.showmodal);

        axios
            .get('/getData/' + self.showmodal)
            .then(function(resp) {
                self.url = resp.data[0].url;
                self.title = resp.data[0].title;
                self.description = resp.data[0].description;
                self.username = resp.data[0].username;
                self.date = resp.data[0].created_at;
            })
            .catch(function(err) {
                console.log("err in GET/", err);
            });
    }
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
