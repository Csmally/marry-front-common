import { forwardRef, memo } from "react"
import Lottie, { LottieProps } from "react-lottie";

export interface LottiePlayerPropsType extends LottieProps {
    className?: string;
}

const LottiePlayer = forwardRef<Lottie, LottiePlayerPropsType>((props, ref) => {
    const { className = '', ...other} = props;
    return (
        <div className={className}>
            <Lottie {...other} ref={ref}/>
        </div>
    );
})

LottiePlayer.displayName = 'LottiePlayer';

export default memo(LottiePlayer);