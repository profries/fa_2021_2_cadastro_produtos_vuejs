const app = new Vue({
    el: "main",
    data: {
        novoProduto: {},
        listaProdutos: [],
    },
    methods: {
        inserirProduto: function() {
            APIinserirProduto(this.novoProduto, (produto) => {
                console.log(produto);
                this.refresh();
                this.novoProduto = {};
            });
        },    

        refresh: function () {
            APIlistarProdutos((data) => {
                this.listaProdutos = data
            });
        }
    },
    created: function() {
        console.log("Iniciando ...");
        this.refresh();
    }
})