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

function ProdutoList ( {repo} ){
    
    let [lista, setList] = useState(repo.list());
    repo.inscrever(setList);

    return (
        <Container maxWidth="md">
            <TableContainer component={Paper}>
                <Table aria-label="tabela-produtos">
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell align="right">Nome</TableCell>
                            <TableCell align="right">Categoria</TableCell>
                            <TableCell align="right">Valor</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {lista.map((p, i) =>
                            <TableRow key={i}>
                                <TableCell component="th" scope="row">{p.Id}</TableCell>
                                <TableCell align="right">{p.Nome}</TableCell>
                                <TableCell align="right">{p.Categoria}</TableCell>
                                <TableCell align="right">{p.Valor}</TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    )
}


export default ProdutoList;