import { Component } from "react";
import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { Container } from "@material-ui/core";

class ProdutoList extends Component {
    
    render(){
        return(
            <Container maxWidth="md">
                <TableContainer>
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
                            <TableRow >
                                <TableCell component="th" scope="row">1</TableCell>
                                <TableCell align="right">Teclado</TableCell>
                                <TableCell align="right">Eletrônicos</TableCell>
                                <TableCell align="right">530,00</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </Container>
        )
    }
}

export default ProdutoList;