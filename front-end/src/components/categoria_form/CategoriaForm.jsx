import { Button, TextField, Container, Box} from '@material-ui/core';
import Categoria from '../../models/Categoria';

function CategoriaForm ( {create} ) {
    return (
        <Container maxWidth="md">
            <h2>Cadastro Categoria</h2>
            <form onSubmit={(e) => {
                e.stopPropagation();
                e.preventDefault();

                let categoria = new Categoria(e.target.id.value, e.target.nome.value);
                create(categoria);
            }}>
                <TextField fullWidth id="id" label="ID" />
                <TextField fullWidth id="nome" label="Nome" />

                <Box m={2} />
                <Button type="submit" variant="contained" color="primary" >Salvar</Button>
                <Box m={2} />
            </form>
        </Container>
    )
}

export default CategoriaForm;