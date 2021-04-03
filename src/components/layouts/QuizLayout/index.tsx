import React, { FC } from 'react';
import useStyles from './styles';

export const QuizLayout: FC<IQuizLayout> = ({ header, content, footer }) => {
    const styles = useStyles();
    return (
        <div className={styles.layout}>
            {header}
            {content}
            {footer}
        </div>
    )
};

interface IQuizLayout {
    header: JSX.Element;
    content: JSX.Element;
    footer: JSX.Element;
}

