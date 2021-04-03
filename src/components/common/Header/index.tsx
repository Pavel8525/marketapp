import React, { FC } from "react";
import useStyles from "./styles";
import { Container } from "../Container";
import { CompanyInfo } from "./CompanyInfo";

const Header: FC<Header> = ({ name, address, logo }) => {
  const styles = useStyles({logo});

  return (
    <Container className={styles.container}>
      <div className={styles.companyWrapper}>
         <img className={styles.companyLogo} src={logo} alt="Logo" />
        <CompanyInfo name={name} address={address} />
      </div>
    </Container>
  );
};

type Header = {
  name: string;
  address: string;
  logo: string;
};

export default Header;
