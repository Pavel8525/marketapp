import React, { FC, useRef } from "react";
import IconButton from "components/common/IconButton";
import cameraIcon from "img/buttons/ic_camera.svg";
import { useFormContext } from "react-hook-form";

const CameraInput: FC<ICameraInput> = ({
  onload,
  cameraEnabled,
  className,
}) => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const { register } = useFormContext();
  const handleClick = () => {
    inputRef.current?.click();
  };
  return (
    <>
      <IconButton
        className={className}
        iconProps={{ width: 20, height: 18 }}
        icon={`${cameraIcon}#camera`}
        disabled={!cameraEnabled}
        onClick={handleClick}
      />
      <input
        name={"photos"}
        onChange={(e) => {
          const files = e.target.files;
          console.log(e.target.files);

          if (files !== null && files.length > 0) {
            if (files.length > 3) {
              for (let i = 0; i <= e.currentTarget.maxLength - 1; i++) {
                const reader = new FileReader();
                reader.onload = onload;
                reader.readAsDataURL(files[i]);
              }
            } else {
              for (let i = 0; i < files.length; i++) {
                const reader = new FileReader();
                reader.onload = onload;
                reader.readAsDataURL(files[i]);
              }
            }
          }
        }}
        ref={(ref) => {
          inputRef.current = ref;
          register.call(null, ref);
        }}
        type="file"
        accept="image/svg,image/png"
        maxLength={3}
        size={3}
        multiple
        hidden
      />
    </>
  );
};

interface ICameraInput extends Pick<FileReader, "onload"> {
  cameraEnabled: boolean;
  className?: string;
}

export default CameraInput;
