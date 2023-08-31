import React, { useRef, useState, useEffect } from 'react';
import { Container, Grid, Paper, TextField, Button, Modal, Typography, Box, IconButton } from '@mui/material';
import { SendRounded, CloseRounded } from '@mui/icons-material';
import emailjs from '@emailjs/browser';


const EmailerForm = () => {

    const [width, setWidth] = useState(window.innerWidth);

    function handleWindowSizeChange() {
        setWidth(window.innerWidth);
    }
    useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        }
    }, []);

    function isMobile() {
        return (width <= 900)
    }

    const [openModal, setOpenModal] = useState(false);
    const performOpenModal = () => setOpenModal(true);
    const performCloseModal = () => setOpenModal(false);
    const [nameValue, setNameValue] = useState("");
    const onNameInput = (e) => setNameValue(e.target.value);
    const [emailValue, setEmailValue] = useState("");
    const onEmailInput = (e) => setEmailValue(e.target.value);
    const [messageValue, setMessageValue] = useState("Let's connect sometime. Here's what I'm thinking...");
    const onMessageInput = (e) => setMessageValue(e.target.value);

    const handleSendEmail = () => {
        setNameValue("");
        setEmailValue("");
        setMessageValue("");
        performOpenModal();
    };

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(process.env.REACT_APP_EMAILJS_SERVICE_KEY, process.env.REACT_APP_EMAILJS_TEMPLATE_KEY, form.current, process.env.REACT_APP_EMAILJS_PUBLIC_KEY)
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        
        handleSendEmail()
    };

    return (
        <Container className='gridTextContainer'>   
            {/*https://dashboard.emailjs.com/*/}
            <form ref={form} onSubmit={sendEmail}>
                <Paper elevation={12} sx={{paddingBottom:'1rem'}}>
                    <Grid container spacing={2}>   
                        <Grid item xs={12} sm={12} md={6}>
                            <Container className='gridTextContainer'>
                                <TextField
                                id="from_name"
                                label="Your Name"
                                type="search"
                                variant="filled"
                                name='from_name'
                                sx={{width:'100%'}}
                                value={nameValue}
                                onInput={onNameInput}
                                required
                                />
                            </Container>
                        </Grid>
                        <Grid item xs={12} sm={12} md={6}>
                            <Container className='gridTextContainer'>
                                <TextField
                                id="from_email"
                                label="Your Email"
                                type="search"
                                variant="filled"
                                name='from_email'
                                sx={{width:'100%'}}
                                value={emailValue}
                                onInput={onEmailInput}
                                required
                                />
                            </Container>
                        </Grid>
                        <Grid item xs={12}>
                            <Container className='gridTextContainer'>
                                <TextField
                                id="message"
                                name="message"
                                label="Message"
                                multiline
                                rows={4}
                                variant="filled"
                                sx={{width:'100%'}}
                                value={messageValue}
                                onInput={onMessageInput}
                                required
                                />
                            </Container>
                        </Grid>
                        <Grid item xs={12}>
                            <Container className='gridTextContainer'>
                                <Button 
                                variant="outlined" 
                                endIcon={<SendRounded/>}
                                type='submit'
                                value='Send'
                                >
                                Send
                                </Button>
                            </Container>
                        </Grid>     
                    </Grid>
                </Paper>
            </form>
            <Modal
            open={openModal}
            onClose={performCloseModal}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            >
                
                <Box style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: isMobile() ? '90vw':'40vw',
                    //height: '30vh',
                    background: '#111212',
                    border: '1px solid #000',
                    boxShadow: 24,
                    //p: 4,
                    //alignItems: 'center'
                }}>
                        <Box sx={{textAlign:'right'}}>
                            <IconButton  onClick={performCloseModal}>
                                <CloseRounded/>
                            </IconButton>
                        </Box>
                        <Box sx={{textAlign:'center', paddingLeft: '2rem', paddingRight:'2rem', paddingBottom:'2rem'}}>
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                            Thanks for reaching out,
                        </Typography>
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                            I'll be sure to get back to you as soon as I can.
                        </Typography>
                        </Box>
                </Box>
                
            </Modal>
        </Container>
    );
};

export default EmailerForm