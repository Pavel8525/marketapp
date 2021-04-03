import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
    group: {
        display: 'flex',
        justifyContent: 'space-between',
        padding: '12px 11px'
    },
    star: {
        marginLeft: 16,
    },
    activeStar: {
        color: '#FF8500'
    }
})

export default useStyles;