import React, { FC } from "react";
import InputWithLabel, { InputWithLabelProps } from "../../InputWithLabel";

const AddressField: FC<IAddressField> = (props) => {
  return <InputWithLabel label={"Адрес"} {...props} />;
};

interface IAddressField extends Omit<InputWithLabelProps, "label"> {}

export default AddressField;
