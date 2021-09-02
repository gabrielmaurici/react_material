class ProdutoRepository {
    #listaProdutos;
    #inscritos;

    constructor (){
        this.#listaProdutos = [];
        this.#inscritos = [];
    }

    inscrever (func){
        let insc = [...this.#inscritos, func]
        this.#inscritos = insc;
    }
    desinscrever (func){
        let index = this.#inscritos.findIndex(func);
        this.#inscritos.splice(index, 1);
    }
    notificar (){
        this.#inscritos.forEach(insc => {
            insc(this.#listaProdutos);
        })
    }
    create (prod){
        let produto = [...this.#listaProdutos, prod];
        this.#listaProdutos = produto;
        this.notificar();
    }
    list (){
        return this.#listaProdutos;
    }
}

export default ProdutoRepository;