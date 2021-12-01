const URI = "http://localhost:3000/api/produtos";

function APIlistarProdutos(ok, error) {
    axios
        .get(URI)
        .then(response => ok(response.data))
        .catch(err => error(err));
}

function APIinserirProduto(produto, ok, error) {
    axios
        .post(URI, produto)
        .then(response => ok(response.data))
        .catch(err => error(err));
}