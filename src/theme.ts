import hexToRgbA from "helpers/hexToRgbA";

const theme = {
    font: {
        h1: {
            fontSize: '25px',
        },
        h3: {
            fontSize: '18px',
            lineHeight: '22px'
        },
        span: {
            fontSize: '14px',
        }
    },
    pallete: {
        primary: '#324164',
        secondary: hexToRgbA('#324164', 0.5),
        divider: hexToRgbA('#324164', 0.1)
    }
}

export type Theme = typeof theme;

export default theme;