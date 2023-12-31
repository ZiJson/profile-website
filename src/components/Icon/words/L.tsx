import React from "react";

function L({ height }: { height: number }) {
    const ratio = 1170.667 / 1706.667
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={height * ratio}
            height={height}
            version="1"
            viewBox="0 0 878 1280"
        >
            <path
                d="M437 10793c-10-10-8-483 2-483 27 0 512-93 591-114 241-63 431-152 541-254 73-68 104-121 136-232 17-63 18-191 18-3375 0-3228 0-3312-19-3380-54-196-154-309-344-389-102-43-389-93-757-131-82-9-156-18-163-20-9-3-12-61-12-245v-240h8169l5 53c3 28 42 648 86 1377s81 1344 84 1368l4 42-230-2-229-3-61-140c-136-311-418-837-614-1145-229-363-487-669-633-754-176-102-379-154-751-191-480-47-1219-47-1591 0-395 50-593 205-665 520-50 222-48 57-51 3385-3 2233-1 3122 7 3193 12 101 44 216 81 290 12 22 47 67 78 98 98 97 257 160 536 209 92 17 593 80 633 80 9 0 12 56 12 245v245H2872c-1336 0-2432-3-2435-7z"
                transform="matrix(.1 0 0 -.1 0 1280)"
            ></path>
        </svg>
    );
}

export default L;
