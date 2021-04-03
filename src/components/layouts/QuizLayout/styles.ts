import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
    contentContainer: {
        padding: '20px'

    },
    footerContainer: {
        padding: '22px 20px',
    },
    layout: {
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
        overflowX: 'hidden',
        position: 'relative',
    }
});

export default useStyles;