import { Component } from "react";
import { Button, TextField, Select,FormControl, MenuItem, InputLabel, Container} from '@material-ui/core';

class ProdutoForm extends Component {
    render(){
        return(
            <Container maxWidth="sm">
                <form >
                    <TextField fullWidth id="nome" label="nome" />
                    <TextField fullWidth id="nome" label="nome" />
                    
                    <FormControl fullWidth>
                        <InputLabel id="demo-controlled-open-select-label">Age</InputLabel>
                        <Select
                            labelWidth="10"
                            autoWidth
                            labelId="demo-controlled-open-select-label"
                            id="demo-controlled-open-select"
 
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </FormControl>
                    <Button></Button>
                </form>
            </Container>
        )
    }
}

export default ProdutoForm;