import React from "react";
import { Center, Icon } from "native-base";
import { Path, Svg, Rect } from "react-native-svg";
const GoogleIcon = () => {
  return (
    <Center>
      <Icon viewBox="0 0 25 25">
        <Svg
          width="20"
          height="20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <Rect
            width="24"
            height="24"
            transform="translate(0.845947 0.537109)"
            fill="white"
          />
          <Path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M23.8859 12.7985C23.8859 11.983 23.8128 11.199 23.6769 10.4462H12.8459V14.8946H19.035C18.7684 16.3321 17.9582 17.5501 16.7403 18.3655V21.251H20.4569C22.6314 19.249 23.8859 16.3008 23.8859 12.7985Z"
            fill="#4285F4"
          />
          <Path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M12.8458 24.0369C15.9508 24.0369 18.554 23.0072 20.4568 21.2508L16.7402 18.3653C15.7104 19.0553 14.3931 19.4631 12.8458 19.4631C9.85062 19.4631 7.31539 17.4401 6.41108 14.7219H2.56903V17.7015C4.4613 21.4599 8.35039 24.0369 12.8458 24.0369Z"
            fill="#34A853"
          />
          <Path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M6.41117 14.7222C6.18117 14.0322 6.05049 13.2951 6.05049 12.5372C6.05049 11.7792 6.18117 11.0422 6.41117 10.3522V7.37262H2.56913C1.79027 8.92512 1.34595 10.6815 1.34595 12.5372C1.34595 14.3928 1.79027 16.1492 2.56913 17.7017L6.41117 14.7222Z"
            fill="#FBBC05"
          />
          <Path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M12.8458 5.61097C14.5343 5.61097 16.0502 6.1912 17.242 7.33075L20.5404 4.03234C18.5488 2.17665 15.9456 1.03711 12.8458 1.03711C8.3504 1.03711 4.4613 3.61415 2.56903 7.37256L6.41108 10.3521C7.31539 7.63393 9.85062 5.61097 12.8458 5.61097Z"
            fill="#EA4335"
          />
        </Svg>
      </Icon>
    </Center>
  );
};

export { GoogleIcon };
