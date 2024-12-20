import { memo } from "react"
import Lottie, { LottieProps } from "react-lottie";

export interface LottiePlayerPropsType extends LottieProps {
    className?: string;
}

const LottiePlayer: React.FC<LottiePlayerPropsType> = (props) => {
    const { className = '', ...other} = props;
    return (
        <div className={className}>
            <Lottie {...other}/>
        </div>
    )
}

export default memo(LottiePlayer);