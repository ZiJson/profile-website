import React from "react";

function N({ height }: { height: number }) {
    const ratio = 1432 / 1706.667
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={height * ratio}
            height={height}
            version="1"
            viewBox="0 0 1074 1280"
        >
            <path
                d="M182 10548l3-252 105-22c279-59 570-166 745-274 418-257 634-609 685-1120 16-163 8-4898-9-5085-45-500-105-715-253-910-180-236-531-381-1095-452l-143-17v-486h3810v486l-117 23c-271 55-637 166-806 244-323 149-493 417-577 906-56 325-54 229-57 2785l-4 2359 213-264c117-146 1360-1688 2762-3427l2548-3162h1108v3213c0 1963 4 3315 10 3477 26 678 100 1033 265 1266 145 204 434 359 760 409 122 19 349 50 428 60l57 6-2 242-3 242-1902 3-1903 2v-489l38-6c74-13 363-85 503-125 428-124 634-257 773-500 113-198 173-419 211-775 31-293 36-675 33-2398l-3-1708-2425 3000-2425 3001H180l2-252z"
                transform="matrix(.1 0 0 -.1 0 1280)"
            ></path>
        </svg>
    );
}

export default N;
