export class ContatoService{
    contatos = [
    {
    id: '1',
    nome: 'Rodrigo',
    telefone: '9928989866',
    email: 'rodrigo@t.com'
    },
    {
    id: '2',
    nome: 'João',
    telefone: '9928989866',
    email: 'joao@t.com'
    },
    {
    id: '3',
    nome: 'Pedro',
    telefone: '9928989866',
    email: 'pedro@t.com'
    }
    ]
    removeContato (contato){
        let index = this.contatos.indexOf (contato);
        if (index > -1){
        this.contatos.splice(index, 1);
        }
    }

}