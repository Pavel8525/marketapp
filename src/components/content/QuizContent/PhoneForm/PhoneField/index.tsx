import React, {
  FC,
  forwardRef,
  HTMLAttributes,
  InputHTMLAttributes,
  RefAttributes,
  useState,
} from "react";
import useStyles from "./styles";
import clsx from "clsx";
import formatPhoneNumber from "utils/formatPhoneNumber";
import TextInput, { TextInputProps } from "components/common/TextInput";

const PhoneField: FC<TPhoneField> = forwardRef<HTMLInputElement, TPhoneField>(
  ({ inputProps, className, ...props }, ref) => {
    const styles = useStyles();
    const [phone, setPhone] = useState<string>("");

    const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (phone.length >= 13) {
        setPhone(e.target.value.slice(0, 13));
        return;
      }
      setPhone(e.target.value);
    };

    const handlePhoneKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.keyCode !== 8) {
        const formatedPhone = formatPhoneNumber(phone);
        setPhone(formatedPhone);
      }
    };

    return (
      <div className={clsx(styles.container, className)} {...props}>
        <input type="button" className={styles.btn} value="+7" />
        <TextInput
          pattern={"^[0-9]{3}-[0-9]{3}-[0-9]{2}-[0-9]{2}$"}
          type="tel"
          placeholder={"965 - 550 - 50 - 50"}
          onChange={handlePhoneChange}
          onKeyUp={handlePhoneKeyUp}
          value={phone}
          noBorders
          ref={ref}
          {...inputProps}
        />
      </div>
    );
  }
);

type TTextInput = RefAttributes<HTMLInputElement> & InputHTMLAttributes<{}>;

type TPhoneField = {
  inputProps?: TextInputProps;
} & HTMLAttributes<HTMLDivElement> &
  TTextInput;

export default PhoneField;
