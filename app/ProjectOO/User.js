export default class User {
    #nome
    constructor(nome, email, nascimento, role, ativo = true) {
        this.#nome = nome
        this.email = email
        this.nascimento = nascimento
        this.role = role || 'estudante'
        this.ativo = ativo
    }

    exibirInfos() {
        return `${this.nome}, ${this.email}`
    }
}


//const novoUser = new User('Rodrigo', 'motollo@motollo.com');
//console.log(novoUser);
//console.log(novoUser.exibirInfos())