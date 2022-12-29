import React, { useContext } from 'react'
import { Navbar, Nav, Container, Form } from 'react-bootstrap'
import { GlobalContext } from '../context/GlobalContext';

const Navigasi = () => {
    const { handleFunction } = useContext(GlobalContext)
    const {
        search
    } = (handleFunction)


    return (
        <>
            <Navbar bg="dark" variant='dark' expand="lg">
                <Container>
                    <Navbar.Brand>Tama Movie</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link href="#">Popular</Nav.Link>
                            <Nav.Link href="#action2">Upcoming</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                            <Form className="d-flex my={3}" style={{ width: '14rem', }}>
                                <Form.Control
                                    type="search"
                                    placeholder="Cari Film"
                                    aria-label="Search"
                                    onChange={({ target }) => search(target.value)}
                                />
                            </Form>
                </Container>
            </Navbar>
        </>
    )

}

export default Navigasi