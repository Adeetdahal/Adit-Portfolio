import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Section, SectionDivider, SectionSubText, SectionTitle } from '../../styles/GlobalComponents';
import { ModalTitle } from './ContactStyles';
import CloseButton from 'react-bootstrap/CloseButton';
import { toast } from 'react-toastify';

const ContactMe = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [fullname, setFullname] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [errors, setErrors] = useState('');

    const handleValidation = () => {
        const tempErrors = {};
        let isValid = true;
        if (fullname.length <= 0) {
            tempErrors.fullname = true;
            isValid = false;
        }
        if (email.length <= 0) {
            tempErrors.email = true;
            isValid = false;
        }
        if (message.length <= 0) {
            tempErrors.message = true;
            isValid = false;
        }

        setErrors({ ...tempErrors });
        return isValid;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const isValidForm = handleValidation();
        if (isValidForm) {
            const res = await fetch('/api/sendgrid', {
                body: JSON.stringify({
                    fullname,
                    email,
                    message,
                }),
                headers: {
                    'Content-Type': 'application/json',
                },
                method: 'POST',
            });

            const { error } = await res.json();
            if (error) {
                toast.error('Oops! Something went wrong, please try again.');
                // Reset form fields;
                setFullname('');
                setEmail('');
                setMessage('');
            } else {
                toast.success('Thankyou! Your Message has been delivered.');
                // Reset form fields
                setFullname('');
                setEmail('');
                setMessage('');
            }
        }
    };

    return (
        <Section id='contact'>
            <SectionTitle>Contact</SectionTitle>
            <Button variant="primary" onClick={handleShow}>
                Launch demo modal
            </Button>

            <Modal show={show} onHide={handleClose} size="lg" centered style={{ color: 'black' }}>
                <Modal.Header>
                    <div style={{
                        display: 'flex',
                        justifyContent: "space-between",
                        alignItems: 'center',
                        width: '100%'
                    }} onClick={handleClose}>
                        <Modal.Title><ModalTitle>FeedBack</ModalTitle></Modal.Title>
                        <CloseButton variant="white" />
                    </div>
                </Modal.Header>
                <Modal.Body
                // style={{ backgroundColor: 'rgba(52, 0, 102, 0.1)', }}
                >
                    <Form 
                        onSubmit={handleSubmit}
                    >
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                type="text"
                                autoFocus
                                autoComplete='off'
                                value={fullname}
                                onChange={(e) => {
                                    setFullname(e.target.value);
                                }}
                                name="fullname"
                            />
                        </Form.Group>
                        {errors?.fullname && (
                            <p className="text-danger">Name cannot be empty.</p>
                        )}
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                type="email"
                                autoComplete='off'
                                name="email"
                                value={email}
                                onChange={(e) => {
                                    setEmail(e.target.value);
                                }}
                            />
                        </Form.Group>
                        {errors?.email && (
                            <p className="text-danger">Email cannot be empty.</p>
                        )}
                        <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlTextarea1"
                        >
                            <Form.Label>Message</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={3}
                                name="message"
                                value={message}
                                onChange={(e) => {
                                    setMessage(e.target.value);
                                }} />
                        </Form.Group>
                        {errors?.message && (
                            <p className="text-danger">Message body cannot be empty.</p>
                        )}
                        <Modal.Footer>
                            <Button variant="danger" size="lg" type='submit'>
                                Submit
                            </Button>
                        </Modal.Footer>
                    </Form>
                </Modal.Body>
            </Modal>
        </Section >
    )
}

export default ContactMe