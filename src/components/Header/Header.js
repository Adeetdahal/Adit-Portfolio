import Link from "next/link";
import React from "react";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";

import {
  Container,
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIcons,
} from "./HeaderStyles";

const Header = () => (
  <Container>
    <Div1>
      {/* <Link href="/">
        <a
          style={{
            display: "flex",
            alignItems: "center",
            color: "white",
            marginBottom: "20px",
          }}
        >
          <DiCssdeck size="3rem" /> <span>Portfolio</span>
        </a>
      </Link> */}
      <Link href="/">
        <a
          style={{
            color: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "start",
          }}
        >
          <svg
            version="1.0"
            xmlns="http://www.w3.org/2000/svg"
            width="120px"
            height="60px"
            viewBox="25 60 150 95"
            preserveAspectRatio="xMidYMid meet"
          >
            <g
              transform="translate(0.000000,200.000000) scale(0.100000,-0.100000)"
              fill="#ffffffbf"
              stroke="none"
            >
              <path
                d="M350 1319 c-130 -59 -190 -199 -141 -330 12 -31 30 -64 41 -74 18
-16 20 -31 20 -137 l0 -119 138 3 137 3 3 36 c3 35 4 37 50 42 57 6 76 28 93
102 12 55 12 55 50 55 21 0 40 4 44 10 3 5 -12 45 -35 89 -22 44 -40 87 -40
94 0 7 -7 37 -16 66 -42 142 -211 221 -344 160z m199 -39 c65 -32 121 -114
121 -175 0 -14 16 -57 35 -95 l35 -69 -32 -3 c-30 -3 -33 -6 -49 -72 -10 -37
-21 -72 -26 -77 -4 -4 -33 -9 -63 -11 l-55 -3 -3 -37 -3 -38 -100 0 -99 0 0
101 c0 95 -2 103 -27 133 -38 45 -53 88 -53 151 0 85 45 156 125 198 44 23
146 22 194 -3z"
              />
              <path
                d="M450 1176 c0 -5 -27 -139 -35 -173 -4 -18 -1 -23 15 -23 11 0 20 2
20 4 0 5 27 139 35 174 4 17 1 22 -15 22 -11 0 -20 -2 -20 -4z"
              />
              <path
                d="M330 1105 l-23 -25 23 -25 c18 -19 26 -22 37 -14 10 9 10 15 2 25 -9
11 -9 17 0 28 8 10 8 16 -2 25 -11 8 -19 5 -37 -14z"
              />
              <path
                d="M532 1118 c-8 -8 -9 -15 -1 -25 8 -9 8 -17 0 -27 -8 -10 -8 -16 2
-25 11 -8 19 -5 37 14 l24 26 -25 24 c-19 20 -27 23 -37 13z"
              />
              <path
                d="M1202 1328 c-8 -8 -6 -21 7 -47 10 -20 22 -46 26 -59 6 -20 4 -22
-18 -17 -51 13 -121 -115 -83 -153 15 -15 16 -14 16 12 0 15 5 37 11 49 14 27
60 77 71 77 25 0 -19 -114 -55 -142 -12 -10 -17 -18 -11 -18 16 0 72 62 83 93
31 80 -7 245 -47 205z"
              />
              <path
                d="M1053 1284 c-74 -57 -185 -254 -144 -254 4 0 18 27 30 60 l22 60 43
0 42 0 -4 -60 c-4 -56 -3 -60 17 -60 19 0 21 6 21 53 0 47 19 146 35 189 4 11
0 20 -12 27 -15 7 -26 4 -50 -15z m7 -73 c-10 -38 -13 -41 -46 -41 l-35 0 18
31 c21 37 66 75 71 60 2 -5 -2 -28 -8 -50z"
              />
              <path
                d="M1354 1277 c-3 -9 -4 -26 -2 -38 l3 -23 17 26 c15 23 15 28 3 38 -12
10 -16 9 -21 -3z"
              />
              <path
                d="M1428 1230 c-12 -16 -29 -30 -37 -30 -13 0 -13 -2 -3 -9 11 -7 10
-18 -3 -65 -19 -65 -11 -86 34 -85 26 0 26 0 3 10 -25 10 -25 15 4 97 12 31
21 42 37 43 19 0 20 1 4 7 -16 7 -16 9 -3 27 19 25 20 35 1 35 -8 0 -24 -13
-37 -30z"
              />
              <path
                d="M1312 1178 c-16 -20 -34 -98 -27 -117 5 -11 15 2 36 48 27 59 30 81
10 81 -5 0 -13 -6 -19 -12z"
              />
              <path
                d="M1399 934 c-40 -59 -79 -167 -78 -219 0 -35 2 -38 12 -21 27 42 88
116 96 116 5 0 0 -23 -12 -50 -23 -54 -15 -80 20 -65 11 5 14 9 6 12 -15 6 -1
46 32 89 18 23 21 34 12 43 -20 20 -47 11 -87 -30 -22 -23 -40 -39 -40 -35 0
19 52 118 79 148 36 41 39 58 11 58 -11 0 -31 -18 -51 -46z"
              />
              <path
                d="M1754 955 c-53 -80 -102 -263 -76 -279 7 -4 14 4 17 21 17 79 52 172
82 216 26 38 31 52 21 58 -20 13 -26 11 -44 -16z"
              />
              <path
                d="M938 934 c-15 -8 -31 -26 -34 -40 -8 -31 11 -56 20 -26 7 21 43 58
50 51 3 -2 -13 -51 -35 -109 -39 -103 -39 -104 -20 -123 24 -25 85 -26 129 -3
67 35 107 137 77 200 -28 59 -124 85 -187 50z m152 -32 c26 -32 25 -68 -2
-122 -27 -52 -59 -76 -112 -86 -39 -7 -39 -7 -32 22 4 16 25 66 46 112 33 70
37 84 24 89 -11 4 -12 8 -4 13 20 12 60 -1 80 -28z"
              />
              <path
                d="M1191 826 c-13 -13 -28 -41 -36 -61 -24 -72 6 -102 53 -54 l29 30 -4
-25 c-3 -16 -1 -26 6 -26 18 0 26 5 23 14 -1 4 4 33 13 63 9 30 13 58 10 62
-7 7 -18 -6 -57 -73 -15 -25 -34 -46 -43 -46 -14 0 -14 4 0 38 8 20 27 47 41
60 25 22 25 42 0 42 -7 0 -23 -11 -35 -24z"
              />
              <path
                d="M1541 826 c-27 -28 -50 -91 -44 -117 9 -32 33 -30 64 4 17 17 27 24
23 14 -3 -9 -1 -24 6 -32 14 -17 32 -11 24 9 -3 7 2 33 10 57 31 87 12 95 -33
14 -28 -50 -54 -75 -66 -63 -10 10 37 89 59 100 20 9 23 14 15 25 -17 19 -33
16 -58 -11z"
              />
            </g>
          </svg>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li style={{ zIndex: "5", padding: "0 15px" }}>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li style={{ zIndex: "5", padding: "0 15px" }}>
        <Link href="#tech">
          <NavLink>Technologies</NavLink>
        </Link>
      </li>
      <li style={{ zIndex: "5", padding: "0 15px" }}>
        <Link href="#about">
          <NavLink>About</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href="https://github.com/Adeetdahal" target="_blank">
        <AiFillGithub size="2.8rem" />
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/adit-dahal/" target="_blank">
        <AiFillLinkedin size="2.8rem" />
      </SocialIcons>
      <SocialIcons href="https://www.instagram.com/aditdahal/" target="_blank">
        <AiFillInstagram size="2.8rem" />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
