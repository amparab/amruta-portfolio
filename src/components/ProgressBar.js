import { useSpring, animated } from '@react-spring/web';

export default function ProgressBar ({progress}) {

    const progressAnimation = useSpring({
        width: `${progress}`,
        from: { width: '0%' },
        config: { duration:1000 }
    });

    return(
        <>
            <div class="w-48 h-1 border border-solid border-white">
                <animated.div class="h-1 bg-white" style={{...progressAnimation}}  />
            </div>
        </>
    );

}