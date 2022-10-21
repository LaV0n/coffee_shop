import * as React from "react"
import Svg, {SvgProps, Path} from "react-native-svg"
import {memo} from "react"

const SvgComponent = (props: SvgProps) => {
    return (
        <Svg
            width={14}
            height={13}
            fill="none"
            {...props}
        >
            <Path
                d="M6.049.927c.3-.921 1.603-.921 1.902 0l.845 2.6a1 1 0 0 0 .951.692h2.735c.969 0 1.371 1.24.588 1.809l-2.213 1.607a1 1 0 0 0-.363 1.118l.845 2.601c.3.921-.755 1.688-1.539 1.118l-2.212-1.607a1 1 0 0 0-1.176 0L4.2 12.472c-.784.57-1.838-.197-1.539-1.118l.845-2.6a1 1 0 0 0-.363-1.119L.93 6.028c-.783-.57-.38-1.81.588-1.81h2.735a1 1 0 0 0 .95-.69l.846-2.6Z"
                fill="#D17842"
            />
        </Svg>
)
}

export const StarSVG = memo(SvgComponent)
