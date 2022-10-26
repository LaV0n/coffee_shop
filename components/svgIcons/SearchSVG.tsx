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
                fillRule="evenodd"
                clipRule="evenodd"
                d="M23.478 4c10.74 0 19.476 8.736 19.476 19.476 0 5.067-1.945 9.689-5.127 13.157l6.261 6.248c.586.586.588 1.534.002 2.12a1.501 1.501 0 0 1-2.122.004l-6.337-6.319a19.382 19.382 0 0 1-12.153 4.268C12.738 42.954 4 34.216 4 23.476 4 12.736 12.738 4 23.478 4Zm0 3C14.392 7 7 14.39 7 23.476c0 9.086 7.392 16.478 16.478 16.478 9.084 0 16.476-7.392 16.476-16.478C39.954 14.39 32.562 7 23.478 7Z"
                fill="#967259"
            />
        </Svg>
)
}

export const SearchSVG = memo(SvgComponent)
