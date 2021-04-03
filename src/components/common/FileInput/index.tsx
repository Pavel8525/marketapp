import React, { FC, InputHTMLAttributes, useRef } from "react";
import { useFormContext } from "react-hook-form";
import Button, { ButtonProps } from "../Button";

const FileInput: FC<IFileInput> = ({
  children,
  maxLength,
  multiple,
  name,
  onload,
  className,
  ...props
}) => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const handleClick = () => {
    inputRef.current?.click();
  };
  const { register } = useFormContext();

  return (
    <>
      <Button onClick={handleClick} className={className}>
        {children}
      </Button>
      <input
        ref={(ref) => {
          inputRef.current = ref;
          register.call(null, ref);
        }}
        onChange={(e) => {
          const files = e.target.files;
          console.log(e.target.files);
          const reader = new FileReader();
          reader.onload = onload;
          if (files !== null) {
            reader.readAsDataURL(files[0]);
          }
        }}
        hidden
        type="file"
        accept="image/svg,image/png"
        maxLength={maxLength}
        multiple={multiple}
        name={name}
        {...props}
      />
    </>
  );
};

interface IFileInput
  extends Pick<ButtonProps, "className">,
    InputHTMLAttributes<HTMLInputElement>,
    Pick<FileReader, "onload"> {}

export default FileInput;
