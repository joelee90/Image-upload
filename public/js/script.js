(function() {
    new Vue({
        el: '.main',
        data: {
            images : []
        }, //closing data
        mounted: function() {
            let self = this;
            axios.get('/images').then(function(resp) {
                self.images = resp.data;
                console.log("self.images", self.images);
            }).catch(function(err) {
                console.log('err in GET/images: ',err);
            });
        } //close mounted
    });

})();

// (function() {
//     new Vue({
//         el: '.main',
//         data: {
//             name: 'Joe',
//             userInfo: {
//                 favoriteFood: 'pizza',
//                 nationality: 'korea',
//                 color: 'blue'
//             },
//             cities: [] //closing cities
//         }, //closing data
//         mounted: function() {
//             // console.log('this:', this);
//             // this.name = 'Bobby';
//             let self = this;
//             axios.get('/cities').then(function(resp) {
//                 console.log('resp', resp.data);
//                 self.cities = resp.data;
//                 console.log('this:', self);
//             }).catch(function(err) {
//                 console.log('err in GET/cities: ',err);
//             });
//         } //close mounted
//     });
//
// })();

//whatever in data, becomes this
//properties of 'data' become properties of 'this'
//this.name = 'Bobby';
//this looses its meaning in nested scopes, always refer to
//vue$3, not 'window'

// cities: [
//     {
//         name: 'berlin',
//         country: 'de'
//     },
//     {
//         name: 'sarajevo',
//         country: 'bih'
//     },
//     {
//         name: 'tokyo',
//         country: 'jp'
//     },
//     {
//         name: 'seould',
//         country: 'kr'
//     }
// ]
