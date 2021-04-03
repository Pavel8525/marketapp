import Button from "components/common/Button";
import Collapse from "components/common/Collapse";
import React, { FC, useCallback } from "react";
import { useFieldArray, useFormContext } from "react-hook-form";
import NameField from "./Name";
import useStyles from "./styles";
import UrlField from "./Url";

const Polls: FC<Polls> = ({ name }) => {
  const { control } = useFormContext();

  const styles = useStyles();

  const { fields, append, remove } = useFieldArray({
    control,
    name: `${name}.polls`,
  });
  const createFieldName = useCallback(
    (baseName: string) => (fieldName: string): string =>
      `${baseName}.${fieldName}`,
    []
  );

  return (
    <div className={styles.collapseWrapper}>
      {fields.map((field, index) => {
        const baseName = `${name}.polls[${index}]`;
        const createName = createFieldName(baseName);
        return (
          <Collapse
            label={
              <div className={styles.collapseLabel}>
                <NameField name={createName("name")} />
                <UrlField name={createName("humanReadableUrl")} />
              </div>
            }
            key={field.id}
          ></Collapse>
        );
      })}
      <Button disabled={fields.length === 2} onClick={() => append({})}>
        Добавить опрос
      </Button>
    </div>
  );
};

interface Polls {
  name: string;
}

export default Polls;
