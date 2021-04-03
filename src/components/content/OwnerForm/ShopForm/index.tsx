import Button from "components/common/Button";
import Collapse from "components/common/Collapse";
import FileInput from "components/common/FileInput";
import React, { useCallback, useState } from "react";
import { useFieldArray, useFormContext } from "react-hook-form";
import AddressField from "./Address";
import DescriptionField from "./Description";
import NameField from "./Name";
import Polls from "./Polls";
import useStyles from "./styles";


/**
 * @description Форма заведения
 */
const ShopForm = () => {
  const { register, control } = useFormContext();

  const { fields, append, remove } = useFieldArray({
    control,
    name: "shops",
  });

  const [openedCollapse, setOpenedCollapse] = useState<number | null>(null);

  const [files, setFiles] = useState<{ [keys: string]: string }>({});

  const onLoadFile = (inputName: string) => (e: ProgressEvent<FileReader>) => {
    const file = e.target?.result;
    setFiles((files) => ({ ...files, [inputName]: file as string }));
  };

  const requiredReg = register({ required: true });

  const styles = useStyles();

  const createFieldName = useCallback(
    (baseName: string) => (fieldName: string): string =>
      `${baseName}.${fieldName}`,
    []
  );

  const isOpen = useCallback(
    (index: number): boolean => index === openedCollapse,
    [openedCollapse]
  );

  const handleOpen = (index: number) => () => {
    isOpen(index) ? setOpenedCollapse(null) : setOpenedCollapse(index);
  };

  return (
    <div className={styles.shopsWrapper}>
      {fields.map((field, index) => {
        const baseName = `shops[${index}]`;
        const createName = createFieldName(baseName);
        const fileLogo = files[createName("logo")];
        return (
          <Collapse
            className={styles.collapseMargin}
            isOpen={isOpen(index)}
            handleOpen={handleOpen(index)}
            label={
              <div className={styles.collapseLabel}>
                <NameField name={createName("name")} />
                <FileInput
                  onload={onLoadFile(createName("logo"))}
                  name={createName("logo")}
                >
                  Добавить лого
                </FileInput>
                {fileLogo && <img src={fileLogo} />}
              </div>
            }
            key={field.id}
          >
            <div className={styles.collapseContentWrapper}>
              <div>
                <AddressField
                  inputProps={{
                    name: createName("address"),
                    ref: requiredReg,
                  }}
                />
                <DescriptionField
                  inputProps={{
                    name: createName("description"),
                    ref: register,
                  }}
                />
              </div>
              <div>
                <Polls name={baseName} />
              </div>
            </div>
          </Collapse>
        );
      })}
      <Button disabled={fields.length === 4} onClick={() => append({})}>
        Добавить заведение
      </Button>
    </div>
  );
};

export default ShopForm;
