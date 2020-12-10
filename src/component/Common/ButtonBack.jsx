import { Button } from "@material-ui/core"
import BackIcon from "@material-ui/icons/ArrowBack";

const ButtonBack = (props) => {
    let style = typeof props.style === 'undefined' ? { float: "right" } : props.style;

    return (
        <Button
            style={style}
            startIcon={<BackIcon />}
            variant="contained"
            color="primary"
            href={props.url_to}
        >
            Back
        </Button>

    )
}

export default ButtonBack;