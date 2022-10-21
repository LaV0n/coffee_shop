import * as React from "react"
import Svg, { SvgProps, Circle } from "react-native-svg"
import {memo} from "react"

const SvgComponent = (props: SvgProps) => {
    return (
        <Svg
            width={10}
            height={10}
            fill="none"
            {...props}
        >
            <Circle cx={5} cy={5} r={5} fill="#967259" />
        </Svg>
)
}

export const DotSVG = memo(SvgComponent)
