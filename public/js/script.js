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
                // console.log("self.images", self.images);
            }).catch(function(err) {
                console.log('err in GET/images: ',err);
            });
        } //close mounted
    });
})();
