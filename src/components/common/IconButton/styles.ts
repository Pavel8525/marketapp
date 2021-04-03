import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
    button: {
        border: 'none',
        outline: 'none',
        background: 'transparent',
        color: (props: Props) => props.color === 'primary' ? '#0A66EF' : '#5B6783',
    }
})

type Props = {
    color: 'primary' | 'disabled'
}

export default useStyles;