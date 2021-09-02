class CategoriaRepository {
    #listaCategoria;
    #inscritos;

    constructor (){
        this.#listaCategoria = [];
        this.#inscritos = [];
    }

    inscrever (func){
        let insc = [...this.#inscritos, func];
        this.#inscritos = insc;
    }
    desinscrever (func){
        let index = this.#inscritos.findIndex(func);
        this.#inscritos.splice(index, 1);
    }
    notificar (){
        this.#inscritos.forEach(insc => {
            insc(this.#listaCategoria);
        })
    }
    create (model){
        let categoria = [...this.#listaCategoria, model];
        this.#listaCategoria = categoria;
        this.notificar();
        console.log(this.#listaCategoria);
    }
    list (){
        return this.#listaCategoria;
    }
}

export default CategoriaRepository;