import { View, Text } from "react-native";
import React from "react";
import Svg, { Path } from "react-native-svg";

const EditIcon = () => {
  return (
    <Svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M7.13375 21.6157L18.75 9.99947L13.2325 4.48197L1.61625 16.0982C1.45633 16.2583 1.34273 16.4588 1.2875 16.6782L0 23.232L6.5525 21.9445C6.7725 21.8895 6.97375 21.7757 7.13375 21.6157V21.6157ZM22.5 6.24947C22.9687 5.78065 23.232 5.14488 23.232 4.48197C23.232 3.81906 22.9687 3.18329 22.5 2.71447L20.5175 0.731966C20.0487 0.263289 19.4129 0 18.75 0C18.0871 0 17.4513 0.263289 16.9825 0.731966L15 2.71447L20.5175 8.23197L22.5 6.24947Z"
        fill="#514E4E"
      />
    </Svg>
  );
};

export { EditIcon };