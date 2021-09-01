import { Component } from "react";
import ProdutoForm from "./produto_form/ProdutoForm";
import ProdutoList from "./produto_list/ProdutoList";

class App extends Component {
  render(){
    return(
      <section>
        <ProdutoForm />
        <ProdutoList />
      </section>
    )
  }
}

export default App;
