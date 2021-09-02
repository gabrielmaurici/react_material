import { Button, TextField, Select,FormControl, MenuItem, InputLabel, Container, Box} from '@material-ui/core';
import { useState } from 'react';
import Produto from "../../models/Produto";

function ProdutoForm ( {create, repoCat} ){

    let [listaCat, setList] = useState(repoCat.list()); 
    repoCat.inscrever(setList);

    return (
        <Container maxWidth="md">
            <h2>Cadastro Produto</h2>
            <form onSubmit= {(e) => {
                e.stopPropagation();
                e.preventDefault();
                
                let produto = new Produto(
                    e.target[0].value, 
                    e.target[1].value, 
                    e.target[2].value, 
                    e.target[3].value
                );
                create(produto);
            }}>
                <TextField fullWidth
                    id="id"
                    label="ID"
                />
                <TextField fullWidth
                    id="nome"
                    label="Nome"
                />
                <FormControl fullWidth>
                    <InputLabel id="inp-categoria">Categoria</InputLabel>
                    <Select
                        autoWidth
                        labelId="lb-categoria"
                        id="categoria"
                    >
                        <MenuItem >
                            <em>Selecione uma Categoria</em>
                        </MenuItem>
                        {listaCat.map((cat, i) =>
                            <MenuItem key={i} value={cat.Nome} >{cat.Nome}</MenuItem>
                        )}
                    </Select>
                    <TextField fullWidth
                        id="valor"
                        label="Valor"
                    />
                </FormControl>
                <Box m={2} />
                <Button type="submit" variant="contained" color="primary" >Salvar</Button>
                <Box m={2} />
            </form>
        </Container>
    )
}

export default ProdutoForm;