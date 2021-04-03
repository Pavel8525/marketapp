import React, { FC, useEffect, useState } from "react";
import { connect, ConnectedProps } from "react-redux";
import getPollByUrl from "actions/poll/getPollByUrl";
import getShopLogo from "actions/shop/getShopLogo";
import { QuizLayout } from "components/layouts/QuizLayout";
import Header from "components/common/Header";
import Footer from "components/common/Footer";
import QuizContent from "components/content/QuizContent";
import { RouteComponentProps } from "react-router-dom";
import { RootState } from "types/general";
import { ReturnedPoll } from "types/models";
import { pollSelectors } from "selectors";

/**
 * @description Страница опроса
 */
const QuizPage: FC<QuizPage> = ({ match, getShopLogo, getPollByUrl, poll }) => {
  const [logo, setLogo] = useState("");

  useEffect(() => {
    getPollByUrl(match.params.pollUrl).then(({ payload }) => {
      const { shopId } = payload as ReturnedPoll;
      getShopLogo(shopId).then(({ payload }) => {
        setLogo(URL.createObjectURL(payload));
      });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const {
    shop: { name, address },
  } = poll;

  return (
    <QuizLayout
      header={<Header logo={logo} name={name} address={address} />}
      content={<QuizContent />}
      footer={<Footer />}
    />
  );
};

const mstp = (state: RootState) => ({
  poll: pollSelectors.getPoll(state),
});

const connector = connect(mstp, { getPollByUrl, getShopLogo });

const EnhancedWithConnect = connector(QuizPage);

type QuizPage = RouteComponentProps<{ pollUrl: string }> &
  ConnectedProps<typeof connector>;

export default EnhancedWithConnect;
