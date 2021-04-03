import React, { FC } from "react";
import InputWithLabel, { InputWithLabelProps } from "../../InputWithLabel";

const DescriptionField: FC<IDescriptionField> = (props) => {
  return <InputWithLabel label={"Описание"} {...props} />;
};

interface IDescriptionField extends Omit<InputWithLabelProps, "label"> {}

export default DescriptionField;
