Imageboard Part 1 Encounter

index.html
<!-- <!doctype html>
<html>
<head>
    <title></title>
</head>
<body>

    <div class = "main">
        <h1>Welcome, {{name}}</h1>
        <p>{{userInfo.favoriteFood}}</p>

        <ul v-if='cities.length > 0'>
            <li v-for='city in cities'>
                {{city.name}}, {{city.country}}
            </li>
        </ul>
        <p v-else> No cities!!!</p>


    </div>

    <script src="/js/vue.js"></script>
    <script src="/js/axios.min.js"></script>
    <script src="/js/script.js"></script>
</body>
</html> -->

script.js
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

index.js
// let cities = [
//     {
//         name: 'Berlin',
//         country: 'DE'
//     },
//     {
//         name: 'Sarajevo',
//         country: 'Bih'
//     },
//     {
//         name: 'Tokyo',
//         country: 'Jp'
//     },
//     {
//         name: 'Seoul',
//         country: 'Kr'
//     }
// ];
//
// app.get('/cities', function(req, res) {
//     res.json(cities);
// });
