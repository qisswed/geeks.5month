import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCharacters } from "../redux/actions/CharacterActions";
import { Card, Spinner, Form, Button, Row, Col } from "react-bootstrap";

function CharacterList() {
    const dispatch = useDispatch();
    const { characters, loading, error } = useSelector((state) => state.characters);

    const [searchTerm, setSearchTerm] = useState("");
    const [statusFilter, setStatusFilter] = useState("");
    const [sortAsc, setSortAsc] = useState(true);

    useEffect(() => {
        dispatch(fetchCharacters());
    }, [dispatch]);

    const filteredCharacters = characters
        .filter((character) =>
            character.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
        .filter((character) =>
            statusFilter ? character.status === statusFilter : true
        )
        .sort((a, b) =>
            sortAsc ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name)
        );

    return (
        <div className="container mt-4">
            <h1 className="text-center mb-4">Rick and Morty Characters</h1>

            <Row className="mb-4">
                <Col>
                    <Form.Control
                        type="text"
                        placeholder="Search by name..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </Col>
                <Col>
                    <Form.Select
                        value={statusFilter}
                        onChange={(e) => setStatusFilter(e.target.value)}
                    >
                        <option value="">Filter by status</option>
                        <option value="Alive">Alive</option>
                        <option value="Dead">Dead</option>
                        <option value="unknown">Unknown</option>
                    </Form.Select>
                </Col>
                <Col>
                    <Button onClick={() => setSortAsc((prev) => !prev)}>
                        Sort {sortAsc ? "Descending" : "Ascending"}
                    </Button>
                </Col>
            </Row>

            {loading ? (
                <Spinner animation="border" />
            ) : error ? (
                <p>Error: {error}</p>
            ) : (
                <Row>
                    {filteredCharacters.map((character) => (
                        <Col key={character.id} sm={12} md={6} lg={4} className="mb-4">
                            <Card>
                                <Card.Img variant="top" src={character.image} />
                                <Card.Body>
                                    <Card.Title>{character.name}</Card.Title>
                                    <Card.Text>Status: {character.status}</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            )}
        </div>
    );
}

export default CharacterList;