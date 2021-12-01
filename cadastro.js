const app = new Vue({
    el: "main",
    data: {
        novoProduto: {},
        listaProdutos: [],
    },
    methods: {
        inserirProduto: function() {
            axios
                .post('http://localhost:3000/api/produtos', this.novoProduto)
                .then(response => {
                    this.refresh();
                    this.novoProduto = {};
                });
        },    

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