import FancyBorder from "./FancyBorder";
import "./FancyBorder.css";

function Dialog(props){
    return(
        <FancyBorder color="blue">
            <h1 className="Dialog-title">
                {props.title}
            </h1>
            <p className="Dialog-message">
                {props.message}
            </p>
        </FancyBorder>
    )
}

function WelcomeDialog(props) {
    return (
        <Dialog
            title={"어서오세요"}
            message={"우리 사이트 와서 환영"}
        />
    )
}

export default WelcomeDialog;