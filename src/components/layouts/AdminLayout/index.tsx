import React, { FC } from "react";
import { Container } from "components/common/Container";
import useStyles from "./styles";

const AdminLayout: FC<AdminLayout> = ({ content }) => {
    const styles = useStyles();
  return <Container className={styles.container}>{content}</Container>;
};

interface AdminLayout {
  content: JSX.Element;
}

export default AdminLayout;
