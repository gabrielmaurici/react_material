import { Fragment, useState } from "react";
import CategoriaForm from "./components/categoria_form/CategoriaForm";
import CategoriaList from "./components/categoria_list/CategoriaList"
import ProdutoForm from "./components/produto_form/ProdutoForm";
import ProdutoList from "./components/produto_list/ProdutoList";
import CategoriaRepository from "./repository/CategoriaRepository";
import ProdutoRepository from "./repository/ProdutoRepository";

function App() {
  let [repo] = useState(new ProdutoRepository());
  let [repoCat] = useState(new CategoriaRepository());

  return (
    <Fragment>
      <ProdutoForm create= {repo.create.bind(repo)} repoCat= {repoCat} />
      <ProdutoList repo= {repo} />

      <CategoriaForm create= {repoCat.create.bind(repoCat)} />
      <CategoriaList repoCat= {repoCat} />
    </Fragment>
  );
}


export default App;
