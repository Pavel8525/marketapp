import React, { FC } from 'react';
import useStyles from './styles';

export const CompanyInfo: FC<TCompanyInfo> = ({ name, address }) => {
    const styles = useStyles();
    return (
        <div>
            <h2 className={styles.companyName}>{name}</h2>
            <span className={styles.companyAddress}>{address}</span>
        </div>
    )
};

type TCompanyInfo = {
    name: string;
    address: string;
}