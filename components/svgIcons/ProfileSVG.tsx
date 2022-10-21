import * as React from "react"
import Svg, {SvgProps, Path} from "react-native-svg"
import {memo} from "react"

const SvgComponent = (props: SvgProps) => {
    return (
        <Svg
            width={48}
            height={48}
            fill="none"
            {...props}
        >
            <Path
                d="M24 30.348c8.677 0 16 1.41 16 6.85C40 42.64 32.63 44 24 44c-8.675 0-16-1.41-16-6.85 0-5.442 7.37-6.802 16-6.802ZM24 4a10.547 10.547 0 0 1 10.588 10.582c0 5.874-4.71 10.584-10.588 10.584a10.55 10.55 0 0 1-10.588-10.584A10.548 10.548 0 0 1 24 4Z"
                fill="#967259"
            />
        </Svg>
)
}

export const ProfileSVG = memo(SvgComponent)
