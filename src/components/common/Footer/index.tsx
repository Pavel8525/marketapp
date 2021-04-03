import React from 'react';
import useStyles from './styles';
import footerLogo from 'img/footer-logo.svg';
import { Container } from '../Container';

const Footer = () => {
    const styles = useStyles();
    return (
        <Container className={styles.footer}>
            <img src={footerLogo} alt="" />
            <span className={styles.text}>– сервис обратной связи</span>
        </Container>
    )
}

export default Footer;