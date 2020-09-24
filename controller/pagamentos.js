
module.exports = function(app){

    app.get('/pagamentos', function(req, res){
        res.send('Teste ok!')
    });

    app.post('/pagamentos/pagamento',function(req, res){

        req.assert('forma_de_pagamento', 'Forma de pagamento deve ser obrigatório!').notEmpty()
        req.assert('valor', 'Valor é obrigatório e deve ser numérico.').notEmpty().isFloat()

        var erros = req.validationErrors()

        if(erros) {
            console.log('Erro de validacao encontrados')
            res.status(400).send(erros)
            return
        }

        var pagamento = req.body
        console.log('Processando a requisicao de um novo pagamento')

        pagamento.status = 'CRIADO'
        pagamento.data = new Date()

        var connection = app.persistencia.connectionFactory()
        var pagamentoDao = new app.persistencia.PagamentoDao(connection)

        pagamentoDao.salva(pagamento, function(erro, resultado){
            console.log('Pagamento criado')
            if (erro) {
                res.status(400).send(erro)
                return
            }
            res.json(pagamento)
        });
    })

}
