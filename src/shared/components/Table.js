import React from 'react'
import { Table } from 'semantic-ui-react';

const TableCustom = ({ tableHeaders, tableBody }) => (
    <Table compact celled>
        <Table.Header>
            <Table.Row>
                {tableHeaders.map((header, key) => <Table.HeaderCell key={key}>{header}</Table.HeaderCell>)}
            </Table.Row>
        </Table.Header>

        <Table.Body>
            {
                tableBody.map((body, key) => (
                    <Table.Row key={key}>
                    {
                        body.map((v, key) => (
                            <Table.Cell key={key}>{v}</Table.Cell>
                        ))
                    }                
                    </Table.Row>
                ))        
            }
        </Table.Body>
    </Table>
)
export default TableCustom