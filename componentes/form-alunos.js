Vue.component('form-alunos', {
    props: ['aluno'],
    methods: {
        cadastrar: function() {
            this.$emit('salvar', {aluno: this.aluno})
        }
    },
    template: `
    <div id="formulario">
        <label for="matricula">Matricula: </label>
        <input id="matricula" v-model="aluno.matricula"> <br />
        <label for="nome">Nome: </label>
        <input id="nome" v-model="aluno.nome"> <br />
        <label for="telefone">Telefone: </label>
        <input id="telefone" v-model="aluno.telefone"> <br />
        <button @click="cadastrar">Salvar</button> <br />
    </div>
    `
})