import * as React from "react"
import Svg, { SvgProps, G, Path, Defs } from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: filter */

import { memo } from "react"

const SvgComponent = (props: SvgProps) => {

    return    (
        <Svg
            width={48}
            height={52}

            {...props}
        >
            <G filter="url(#a)">
                <Path
                    d="M16.56 5.001c1.26.039 2.48.259 3.662.66h.118c.08.039.14.08.18.119.442.142.86.302 1.26.522l.76.34c.3.16.66.458.86.58.2.118.42.24.6.378A12.528 12.528 0 0 1 31.7 5c1.262 0 2.522.179 3.72.58 7.382 2.4 10.042 10.5 7.82 17.58a25.456 25.456 0 0 1-6.018 9.618A76.912 76.912 0 0 1 24.56 42.7l-.5.303-.52-.323a76.187 76.187 0 0 1-12.738-9.92 25.866 25.866 0 0 1-6.022-9.598c-2.26-7.08.4-15.18 7.862-17.621.58-.2 1.178-.34 1.778-.418h.24c.562-.082 1.12-.12 1.68-.12h.22Zm17.82 6.32c-.82-.281-1.72.16-2.02 1-.28.84.16 1.76 1 2.059 1.282.48 2.14 1.742 2.14 3.14v.061c-.038.459.1.9.38 1.24.28.34.7.538 1.14.58.82-.021 1.52-.68 1.58-1.521v-.238c.06-2.803-1.638-5.34-4.22-6.32Z"
                    fill="#967259"
                />
            </G>
            <Defs></Defs>
        </Svg>
    )
}

export const FavoriteSVG = memo(SvgComponent)
