import React from "react";
import Svg, { Circle, Path } from "react-native-svg";

export function Abnormal(props) {
  return (
    <Svg
      width={props.width || "48"}
      height={props.height || "48"}
      viewBox="0 0 48 48"
      fill="none"
      {...props}
    >
      <Circle
        cx="24"
        cy="24"
        r="23"
        stroke={props.stroke || "#00AEC7"}
        stroke-width="2"
      />
      <Path
        d="M35.9991 24.3573H31.5991L27.9991 35.3323L20.5741 13.3323L16.8991 24.3573H11.9991"
        stroke={props.stroke || "#00AEC7"}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
}

export function Up(props) {
  return (
    <Svg
      width={props.width || "48"}
      height={props.height || "48"}
      viewBox="0 0 48 48"
      fill="none"
      {...props}
    >
      <Circle
        cx="24"
        cy="24"
        r="23"
        stroke={props.stroke || "#00AEC7"}
        stroke-width="2"
      />
      <Path
        d="M36 25.0534C35.7902 27.323 34.9384 29.4859 33.5443 31.2891C32.1501 33.0922 30.2713 34.4611 28.1276 35.2354C25.9838 36.0097 23.6639 36.1575 21.4393 35.6615C19.2147 35.1654 17.1773 34.0461 15.5656 32.4344C13.9539 30.8227 12.8345 28.7853 12.3385 26.5607C11.8425 24.336 11.9902 22.0161 12.7646 19.8724C13.5389 17.7287 14.9077 15.8498 16.7109 14.4557C18.5141 13.0615 20.677 12.2098 22.9466 12C21.6178 13.7977 20.9784 16.0126 21.1447 18.2419C21.3109 20.4712 22.2718 22.5668 23.8525 24.1475C25.4332 25.7282 27.5288 26.6891 29.7581 26.8553C31.9874 27.0216 34.2023 26.3821 36 25.0534Z"
        stroke={props.stroke || "#00AEC7"}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M28.6664 12.3333C28.1141 12.3333 27.6664 12.781 27.6664 13.3333C27.6664 13.8856 28.1141 14.3333 28.6664 14.3333V12.3333ZM33.9997 13.3333L34.7472 13.9976C35.0088 13.7033 35.0733 13.2829 34.912 12.9236C34.7507 12.5644 34.3935 12.3333 33.9997 12.3333V13.3333ZM28.6664 19.3333L27.919 18.6689C27.6574 18.9632 27.5929 19.3837 27.7542 19.7429C27.9155 20.1022 28.2726 20.3333 28.6664 20.3333V19.3333ZM33.9997 20.3333C34.552 20.3333 34.9997 19.8856 34.9997 19.3333C34.9997 18.781 34.552 18.3333 33.9997 18.3333V20.3333ZM28.6664 14.3333H33.9997V12.3333H28.6664V14.3333ZM33.2523 12.6689L27.919 18.6689L29.4138 19.9976L34.7472 13.9976L33.2523 12.6689ZM28.6664 20.3333H33.9997V18.3333H28.6664V20.3333Z"
        fill={props.stroke || "#00AEC7"}
      />
    </Svg>
  );
}

export function Heart(props) {
  return (
    <Svg
      width={props.width || "48"}
      height={props.height || "48"}
      viewBox="0 0 48 48"
      fill="none"
      {...props}
    >
      <Circle
        cx="24"
        cy="24"
        r="23"
        stroke={props.stroke || "#00AEC7"}
        stroke-width="2"
      />
      <Path
        d="M33.927 15.886C33.3406 15.2881 32.6443 14.8138 31.878 14.4902C31.1116 14.1666 30.2902 14 29.4607 14C28.6312 14 27.8098 14.1666 27.0434 14.4902C26.2771 14.8138 25.5808 15.2881 24.9944 15.886L23.7774 17.1264L22.5603 15.886C21.3758 14.6788 19.7692 14.0007 18.094 14.0007C16.4188 14.0007 14.8122 14.6788 13.6277 15.886C12.4431 17.0932 11.7777 18.7306 11.7777 20.4378C11.7777 22.145 12.4431 23.7823 13.6277 24.9895L14.8447 26.2299L23.7774 35.3334L32.71 26.2299L33.927 24.9895C34.5137 24.3919 34.9792 23.6823 35.2967 22.9013C35.6142 22.1203 35.7777 21.2832 35.7777 20.4378C35.7777 19.5924 35.6142 18.7553 35.2967 17.9743C34.9792 17.1933 34.5137 16.4837 33.927 15.886Z"
        stroke={props.stroke || "#00AEC7"}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
}
export function Arrow() {
  return (
    <Svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M22 12H2"
        stroke="white"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M11 21L2 12L11 3"
        stroke="white"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
}
export function Frame() {
  return (
    <Svg
      width="96"
      height="96"
      viewBox="0 0 96 96"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Circle cx="48" cy="48" r="46.5" stroke="white" stroke-width="3" />
      <Path
        d="M72.0002 48.7168H63.2002L56.0002 70.6668L41.1502 26.6668L33.8002 48.7168H24.0002"
        stroke="white"
        stroke-width="3"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
}
