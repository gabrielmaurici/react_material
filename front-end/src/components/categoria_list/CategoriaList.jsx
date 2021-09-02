import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Container } from "@material-ui/core";
import { useState } from 'react';

function CategoriaList ( {repoCat} ){

    let [lista, setLista] = useState(repoCat.list());
    repoCat.inscrever(setLista);

    return (
        <Container maxWidth="md">
            <TableContainer component={Paper}>
                <Table aria-label="tabela-categorias">
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell align="center">Categoria</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {lista.map((p, i) =>
                            <TableRow key={i}>
                                <TableCell component="th" scope="row">{p.Id}</TableCell>
                                <TableCell align="center">{p.Nome}</TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    )
}

export default CategoriaList;