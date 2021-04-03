import Header from "components/common/Header";
import React, { FC, useEffect, useMemo, useState } from "react";
import { RootState } from "types/general";
import { shopSelectors } from "selectors";
import { connect, ConnectedProps } from "react-redux";
import getShopLogo from "actions/shop/getShopLogo";
import { ShopByUserId } from "types/shop";

const AccountHeader: FC<AccountHeader> = ({
  selectedShop,
  getShopLogo,
  shops,
}) => {
  const [logo, setLogo] = useState("");

  const { address, name } = useMemo(() => {
    return shops.length !== 0
      ? (shops.find((s) => s.id === selectedShop) as ShopByUserId)
      : { address: "", name: "" };
  }, [selectedShop, shops]);

  useEffect(() => {
    if (selectedShop) {
      getShopLogo(selectedShop).then(({ payload }) =>
        setLogo(URL.createObjectURL(payload))
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedShop]);

  return <Header logo={logo} address={address} name={name} />;
};

const mstp = (state: RootState) => ({
  selectedShop: shopSelectors.getSelectedShop(state),
  shops: shopSelectors.getShops(state),
});

const connector = connect(mstp, { getShopLogo });

const EnhancedWithConnect = connector(AccountHeader);

type AccountHeader = ConnectedProps<typeof connector>;

export default EnhancedWithConnect;
