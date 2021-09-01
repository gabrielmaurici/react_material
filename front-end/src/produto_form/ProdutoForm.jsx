import { Component } from "react";
import { Button, TextField, Select,FormControl, MenuItem, InputLabel, Container, Box} from '@material-ui/core';

class ProdutoForm extends Component {
    render(){
        return(
            <Container maxWidth="sm">
                <form >
                    <TextField fullWidth id="nome" label="Nome" />
                    <TextField fullWidth id="valor" label="Valor" />
                    
                    <FormControl fullWidth>
                        <InputLabel id="inp-categoria">Categoria</InputLabel>
                        <Select
                            autoWidth
                            labelWidth="10"
                            labelId="lb-categoria"
                            id="id-categoria"
                        >
                            <MenuItem value="">
                                <em>Selecione uma Categoria</em>
                            </MenuItem>
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </FormControl>
                    <Box m={2} /> 
                    <Button variant="contained" color="primary" >Salvar</Button>
                </form>
            </Container>
        )
    }
}

export default ProdutoForm;