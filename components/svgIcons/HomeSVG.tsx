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
                d="M18.27 41.547V35.43a2.837 2.837 0 0 1 2.847-2.826h5.748c.755 0 1.48.297 2.014.828.534.53.833 1.249.833 1.998v6.116a2.427 2.427 0 0 0 .713 1.733c.46.461 1.087.72 1.74.72h3.923a6.92 6.92 0 0 0 4.886-1.998A6.819 6.819 0 0 0 43 37.156V19.734a4.946 4.946 0 0 0-1.79-3.805L27.867 5.352a6.195 6.195 0 0 0-7.897.142L6.934 15.929A4.948 4.948 0 0 0 5 19.734v17.404C5 40.928 8.095 44 11.912 44h3.833a2.462 2.462 0 0 0 2.47-2.435l.055-.018Z"
                fill="#967259"
            />
        </Svg>
)
}

export const HomeSVG = memo(SvgComponent)
