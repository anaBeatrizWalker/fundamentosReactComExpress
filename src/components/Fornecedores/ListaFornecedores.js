import api_express from '../../config/api_express'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ListGroup, Button, Col, Row } from 'react-bootstrap'

export default function ListaFornecedores(){

    const [fornecedores, setFornecedores] = useState([])

    useEffect(()=>{
        api_express.get('/fornecedores').then(resp => {
            setFornecedores(resp.data.fornecedores)
        })
    }, [])

    return (
        <div style={{marginTop: '20px'}}>

            <h1>Lista dos fornecedores</h1>

            <Link className='btn btn-primary' to="/fornecedores/novo">Adicionar fornecedor</Link>

            {fornecedores.map(fornecedor => { 
                return (
                    <ListGroup style={{marginTop: '20px', width: '50%'}}>
                        <ListGroup.Item key={fornecedor.id}>
                            <Link to={`/fornecedores/${fornecedor.id}`}>{fornecedor.nome}</Link>
                            <div className="d-flex justify-content-end">
                                <Button href={`/fornecedores/${fornecedor.id}/editar`} variant="warning" className="p-2 bd-highlight">Editar</Button>
                                <Button href={`/fornecedores/${fornecedor.id}/deletar`} variant="danger" className="p-2 bd-highlight">Deletar</Button>
                            </div>
                        </ListGroup.Item>
                    </ListGroup>
                )
            })}         
        </div>
    )
}