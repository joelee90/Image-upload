(function() {
    new Vue({
        el: '.main',
        data: {
            images : [],
            title: '',
            description: '',
            username: '',
            file: null,
            showmodal: false,
            imageId: location.hash.slice(1)
        }, //closing data
        mounted: function() {
            let self = this;
            axios.get('/images').then(function(resp) {
                self.images = resp.data;
            }).catch(function(err) {
                console.log('err in GET/images: ',err);
            });
            addEventListener("hashchange", function() {
                self.imageId = location.hash.slice(1);
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
            clicked: function(id) {
                this.showmodal = true;
                this.showmodal = id;
                // console.log('clicked');
                // console.log("this.showmodal ", this.showmodal);
            },
            closeModal: function() {
                this.imageId = null;
                location.hash = "";
                history.replaceState(null, null, " ");
            },
            moreButton: function() {
                console.log("morebutton!!!");
                // let self = this;
                let lastId = this.images[this.images.length-1].id;
                console.log("lastId", lastId);

                axios
                    .get("/more/" + lastId)
                    .then(res => {
                        console.log("data from axios.images", res);
                        this.images = this.images.concat(res.data.rows);
                    })
                    .catch(function(err) {
                        console.log('err in get/upload:',err);
                    });
            }
        }
    });
})();
