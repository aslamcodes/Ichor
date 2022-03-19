import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Path, Svg } from "react-native-svg";
import { Colors } from "../Design/Colors";
const HomeIcon = ({ focused }) => {
  return (
    <Svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M4.99997 23.3333H8.3333V35C8.3333 35.442 8.50889 35.8659 8.82145 36.1785C9.13401 36.4911 9.55794 36.6667 9.99996 36.6667H29.9999C30.442 36.6667 30.8659 36.4911 31.1785 36.1785C31.491 35.8659 31.6666 35.442 31.6666 35V23.3333H34.9999C35.322 23.3336 35.6373 23.2404 35.9074 23.0649C36.1775 22.8895 36.3909 22.6394 36.5216 22.345C36.6532 22.0508 36.6965 21.7246 36.6462 21.4063C36.5959 21.0879 36.4542 20.791 36.2383 20.5517L21.2383 3.88498C20.6066 3.18165 19.3933 3.18165 18.7616 3.88498L3.76164 20.5517C3.54612 20.7911 3.40462 21.0879 3.35424 21.406C3.30387 21.7242 3.34679 22.0502 3.4778 22.3445C3.60882 22.6388 3.82232 22.8888 4.09246 23.0643C4.36261 23.2398 4.67782 23.3332 4.99997 23.3333ZM14.4216 19.4017C15.1153 18.7168 16.0509 18.3327 17.0258 18.3327C18.0006 18.3327 18.9362 18.7168 19.63 19.4017L20.0033 19.7683L20.375 19.4017C21.069 18.7167 22.0048 18.3326 22.98 18.3326C23.9551 18.3326 24.8909 18.7167 25.5849 19.4017C25.9292 19.7329 26.2031 20.1302 26.3902 20.5698C26.5773 21.0094 26.6738 21.4822 26.6738 21.96C26.6738 22.4377 26.5773 22.9106 26.3902 23.3502C26.2031 23.7898 25.9292 24.1871 25.5849 24.5183L20.0033 30L14.4216 24.5183C14.0773 24.1871 13.8034 23.7898 13.6163 23.3502C13.4292 22.9106 13.3328 22.4377 13.3328 21.96C13.3328 21.4822 13.4292 21.0094 13.6163 20.5698C13.8034 20.1302 14.0773 19.7329 14.4216 19.4017Z"
        fill={focused ? Colors.BloodRed : Colors.SecondaryText}
      />
    </Svg>
  );
};

export { HomeIcon };