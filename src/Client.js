class Cliente {
    constructor(nome, email) {
        this.nome = nome;
        this.email = email;
    }
    hello() {
        return `Olá ${this.nome} tudo bem?`
    }
    send() {
        return `Enviando email para ${this.email}...`
    }
}

export default (new Cliente('lucas', 'lucas@gmail.com'));