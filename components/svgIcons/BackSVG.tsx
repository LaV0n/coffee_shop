import * as React from "react"
import Svg, {SvgProps,Circle, Path} from "react-native-svg"
import {memo} from "react"

const SvgComponent = (props: SvgProps) => {
    return (
        <Svg
            width={35}
            height={36}
            fill="none"
            {...props}
        >
            <Circle cx={17.5} cy={17.524} r={17.5} fill="#fff" />
            <Path
                d="M21.262 10.495a.7.7 0 0 1 .067.912l-.067.078-6.038 6.039 6.038 6.038a.7.7 0 0 1 .067.912l-.067.078a.7.7 0 0 1-.912.068l-.078-.068-6.534-6.533a.7.7 0 0 1-.067-.912l.067-.078 6.534-6.534a.7.7 0 0 1 .99 0Z"
                fill="#444"
            />
        </Svg>
)
}

export const BackSVG = memo(SvgComponent)
