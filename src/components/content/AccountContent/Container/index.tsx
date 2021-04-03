import TGeneralContainer, { Container } from "components/common/Container";
import Title from "components/common/Title";
import React, { FC } from "react";

const AccountBlock: FC<AccountBlock> = ({
  children,
  title,
  showPlaceholder = false,
  ...props
}) => {
  return (
    <Container {...props}>
      <Title marginBottom={16}>{title}</Title>
      {children}
    </Container>
  );
};

type AccountBlock = {
  title: string;
  showPlaceholder?: boolean;
} & TGeneralContainer;

export default AccountBlock;
