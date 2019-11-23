import { AngularFireDatabase } from "angularfire2/database";
import { Injectable } from "@angular/core";

@Injectable()
export class ContatoService {
    constructor(private db: AngularFireDatabase) {
        console.log("teste"+db);
    }

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

    removeContato(contato) {
        this.db.object("/dplistadecontatos/" + contato.$key).remove()
            .then(
                x => console.log("contato deleted successfully")
            ).
            catch(error => {
                console.log("Could not delete contato");
                alert("Could not delete contato")
            });
    }
    addContato(contato) {
        //this.contato.push(contato);
        this.db.list("/dplistadecontatos").push({
            nome: contato.nome,
            telefone: contato.telefone,
            email: contato.email
        });
    }

    fetchContatos() {
        return this.db.list("/dplistadecontatos");
    }

    editContato(contato) {
        this.db.object("/dplistadecontatos/" + contato.$key).update({
            nome: contato.nome,
            telefone: contato.telefone,
            email: contato.email
        });
    }

}