(function() {
    new Vue({
        el: '.main',
        data: {
            images : [],
            title: '',
            description: '',
            username: '',
            file: null,

            showSecondLoveComponent: false,
            favoriteThing: 'Peanut Butter'

        }, //closing data
        mounted: function() {
            let self = this;
            axios.get('/images').then(function(resp) {
                self.images = resp.data;
                // console.log("self.images", self.images);
            }).catch(function(err) {
                console.log('err in GET/images: ',err);
            });
        }, //close mounted

        methods: {
            handleClick: function() {
                // e.preventDefault();
                // console.log('this!:', this);
                var formData = new FormData();

                formData.append('title', this.title);
                formData.append('description', this.description);
                formData.append('username', this.username);
                formData.append('file', this.file);

                let self = this;
                axios.post('/upload', formData)
                    .then(function(resp) {
                        console.log("resp:", resp);
                        self.images.unshift(resp.data);
                        // console.log('resp in POST/upload:',resp);
                    })
                    .catch(function(err) {
                        console.log('err in POST/upload:',err);
                    });
            },
            handleChange: function(e) {
                this.file = e.target.files[0];
                // console.log("this.file", this.file);
                //file which I decide to upload
            },
            clicked: function() {
                this.showSecondLoveComponent = true;
            },
            change: function(newFaveThing) {
                this.favoriteThing = newFaveThing;
            }

        }
    });

    new Vue({
        el: '#main',
        data: {
            greetee: ''
        }
    });

})();
