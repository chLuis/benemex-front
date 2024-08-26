import Link from "next/link";

export const Footer = () => {
  return (
    <div className="relative flex justify-center text-white items-center w-full bg-gradient-to-l from-blue-950 to-blue-950 ">
    <span className="absolute bottom-1 inset-x-0 text-center text-sm">© 2024 | chLuis</span>
      <Link
        href="https://chluis-portfolio.netlify.app/"
        rel="noreferrer noopener"
        target="_blank"
        className="flex gap-2 items-center justify-center py-12 text-center xxs:text-end text-xs min-h-[30px] duration-200 group"
      >
        <span className="group-hover:underline duration-200">
          Desarrollada por{" "}
        </span>

        <svg
          version="1.0"
          xmlns="http://www.w3.org/2000/svg"
          width="50px"
          height="50px"
          viewBox="0 0 1080.000000 1080.000000"
          preserveAspectRatio="xMidYMid meet"
        >
          <g
            transform="translate(0.000000,1080.000000) scale(0.100000,-0.100000)"
            fill="#000000"
            stroke="none"
          >
            <path
              className="fill-white group-hover:fill-red-100 duration-200"
              d="M3105 9212 l-2280 -1328 0 -2674 0 -2674 2179 -1268 2178 -1268 218
                    0 217 0 2179 1268 2179 1268 0 2674 0 2674 -2280 1328 c-1254 730 -2287 1327
                    -2295 1327 -8 0 -1041 -597 -2295 -1327z m2965 -922 c371 -26 673 -87 1032
                    -209 178 -61 219 -77 389 -152 l136 -61 -71 -181 c-40 -100 -134 -338 -210
                    -529 l-138 -346 -91 42 c-343 160 -668 276 -901 322 -684 135 -1237 -71 -1569
                    -587 -237 -369 -347 -834 -347 -1469 0 -541 72 -934 230 -1266 220 -464 573
                    -704 1115 -760 360 -37 845 31 1395 196 91 27 205 63 254 80 50 16 93 30 98
                    30 4 0 7 -244 6 -542 l-3 -543 -80 -32 c-308 -124 -714 -218 -1115 -260 -230
                    -24 -699 -23 -905 1 -831 97 -1417 435 -1828 1056 -86 131 -221 405 -280 570
                    -254 709 -300 1721 -113 2500 263 1102 1001 1854 2036 2074 316 67 626 89 960
                    66z m260 -2755 l0 -1165 575 0 575 0 0 -250 0 -250 -875 0 -875 0 0 1415 0
                    1415 300 0 300 0 0 -1165z"
            />
          </g>
        </svg>
      </Link>
    </div>
  );
};
