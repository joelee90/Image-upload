Vue.component("modal", {
    template: "#modal-template",
    data: function() {
        return {
            comments: [],
            url: "",
            title: "",
            description: "",
            username: "",
            date: "",
            image_id: "",
            user_name: "",
            comment: "",
            created_at: ""
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
                self.username = resp.data[0].user_name;
                self.date = resp.data[0].created_at;

            })
            .catch(function(err) {
                console.log("err in GET/", err);
            });

        axios
            .get("/comment/" + self.showmodal)
            .then(function(resp) {
                self.comments = resp.data.rows;
            })
            .catch(function(err) {
                console.log("err in axios get/comment", err);
            });

    },
    methods: {
        clicked2: function() {
            this.$emit("clicked2");
            let self = this;
            // console.log('clicked2');
            axios
                .post("/comment/" + this.showmodal, {
                    image_id : this.image_id,
                    user_name : this.user_name,
                    comment : this.comment
                })
                .then(results => {
                    // console.log("results clicked2", results);
                    self.comments.unshift(results.data[0]);
                    self.comment = "";
                    self.user_name = "";
                })
                .catch(function(err) {
                    console.log("err in axios post/comment", err);
                });
        }
    }
});
