const USER = {
    nome: "Rodrigo",
    email: "rodrigo.motollo@gmail.com",
    nascimento: "11-06-1987",
    role: "estudante",
    ativo: true,
    exibirInfos: function(){
        console.log(this.nome, this.email);
    }
}

const admin = {
    nome: "Yasmim",
    email: "portolani@gmail.com",
    nascimento: "15-06-1989",
    role: "admin",
    exibirInfos: function(){
        console.log(this.nome, this.email);
    }
}
const outContext = () => console.log(`${this.name}`);
outContext.call(USER);

Object.setPrototypeOf(admin, USER);


USER.exibirInfos();

const { nome, email } = USER;

console.log(nome);

