Vue.component('form-produtos', {
    props: ['produto'],
    methods: {
        cadastrar: function() {
            this.$emit('salvar', {produto: this.produto})
        }
    },
    template: `
    <div id="formulario">
        <label for="nome">Nome: </label>
        <input id="nome" v-model="produto.nome"> <br />
        <label for="preco">Preco: </label>
        <input type="number" id="preco" v-model="produto.preco"> <br />
        <button @click="cadastrar">Salvar</button> <br />
    </div>
    `
})