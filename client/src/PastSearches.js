import React, { useEffect, useState } from "react";
import {Label, Table } from 'semantic-ui-react'

export default function PastSearches() {
    const [searches, setSearches] = useState([])
    useEffect(() => {
        fetch('/api/v1/search').then(res => res.json())
            .then(data => {
                setSearches(data)
            })
    }, [])
    return (
        <div>
            <h1>Database of Results</h1>
            <Table inverted>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Date</Table.HeaderCell>
                        <Table.HeaderCell>Location A</Table.HeaderCell>
                        <Table.HeaderCell>Cases A</Table.HeaderCell>
                        <Table.HeaderCell>Location B</Table.HeaderCell>
                        <Table.HeaderCell>Cases B</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {searches.map(search => {
                        return (
                            <Table.Row>
                                <Table.Cell>
                                    <Label ribbon>{search.date}</Label>
                                </Table.Cell>
                                <Table.Cell>{search.locationA}</Table.Cell>
                                <Table.Cell>{search.caselocationA}</Table.Cell>
                                <Table.Cell>{search.locationB}</Table.Cell>
                                <Table.Cell>{search.caselocationB}</Table.Cell>
                            </Table.Row>
                        )
                    })}
                </Table.Body>
            </Table>
        </div>
    );
}
