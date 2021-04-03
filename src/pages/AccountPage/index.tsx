import React, { FC, useEffect } from "react";
import { connect, ConnectedProps } from "react-redux";
import AccountLayout from "components/layouts/AccountLayout";
import AccountContent from "components/content/AccountContent";
import AccountHeader from "components/content/AccountContent/AccountHeader";
import Footer from "components/common/Footer";
import { RootState } from "types/general";
import initAccountPage from "actions/initAccountPage";

/**
 * @description Страница личного кабинета
 */
const AccountPage: FC<AccountPage> = ({ initAccountPage }) => {
  useEffect(() => {
    initAccountPage();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <AccountLayout
      header={<AccountHeader />}
      content={<AccountContent />}
      footer={<Footer />}
    />
  );
};

const mstp = (state: RootState) => ({});

const connector = connect(mstp, { initAccountPage });

const EnhancedWithConnect = connector(AccountPage);

type AccountPage = ConnectedProps<typeof connector>;

export default EnhancedWithConnect;
