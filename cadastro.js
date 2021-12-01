const app = new Vue({
    el: "main",
    data: {
        listaProdutos: [],
    },
    methods: {
        refresh: function () {
            axios
                .get('http://localhost:3000/api/produtos')
                .then(response => {
                    this.listaProdutos = response.data;
                    console.log("Response: ",response);
                })
        }
    },
    created: function() {
        console.log("Iniciando ...");
        this.refresh();
    }
})