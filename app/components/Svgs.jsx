import React from "react";

export const TickIcon = ({ className, ...rest }) => {
  return (
    <svg
      width="12"
      height="10"
      viewBox="0 0 12 10"
      fill="currentColor"
      className={`${className}`}
      {...rest}
    >
      <path
        d="M10.59 0.58L4 7.17L1.41 4.59L0 6L4 10L12 2L10.59 0.58Z"
        fill="currentColor"
      />
    </svg>
  );
};
export const EmailIcon = ({ className, ...rest }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 32 32"
      fill="currentColor"
      className={`color-white ${className}`}
      {...rest}
    >
      <path
        fill="currentColor"
        d="M28 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2m-2.2 2L16 14.78L6.2 8ZM4 24V8.91l11.43 7.91a1 1 0 0 0 1.14 0L28 8.91V24Z"
      ></path>
    </svg>
  );
};
export const XIcon = ({
  className,
  width = "36px",
  height = "32px",
  ...rest
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 36 32"
      fill="currentColor"
      className={`color-white ${className}`}
      {...rest}
    >
      <path
        d="M27.72 0H33.1182L21.3262 13.5536L35.2 32H24.3383L15.8249 20.8146L6.09463 32H0.691429L13.3031 17.4981L0 0.00252204H11.1383L18.8219 10.2245L27.72 0ZM25.8217 28.7516H28.8137L9.504 3.07945H6.29577L25.8217 28.7516Z"
        fill="currentColor"
      />
    </svg>
  );
};
export const DiscordIcon = ({
  className,
  width = "44",
  height = "32",
  ...rest
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 44 32"
      fill="currentColor"
      className={`${className}`}
      {...rest}
    >
      <path
        d="M36.6523 2.65263C33.9329 1.42484 31.0167 0.520263 27.9677 0.00217332C27.9122 -0.00782564 27.8567 0.0171623 27.8281 0.0671394C27.453 0.723494 27.0376 1.57976 26.7467 2.25278C23.4673 1.76969 20.2046 1.76969 16.9924 2.25278C16.7015 1.5648 16.271 0.723494 15.8942 0.0671394C15.8656 0.0188298 15.8102 -0.00615816 15.7546 0.00217332C12.7073 0.518607 9.79109 1.42318 7.06998 2.65263C7.04642 2.66262 7.02623 2.67929 7.01283 2.70093C1.48145 10.8322 -0.0338195 18.7636 0.709523 26.5967C0.712887 26.635 0.73475 26.6717 0.765022 26.695C4.41446 29.3321 7.94957 30.933 11.419 31.9942C11.4746 32.0108 11.5334 31.9909 11.5687 31.9459C12.3894 30.8431 13.121 29.6803 13.7483 28.4575C13.7853 28.3858 13.75 28.3009 13.6743 28.2726C12.5139 27.8394 11.4089 27.3113 10.3461 26.7116C10.262 26.6633 10.2553 26.545 10.3326 26.4883C10.5563 26.3234 10.78 26.1518 10.9936 25.9786C11.0322 25.947 11.0861 25.9403 11.1315 25.9603C18.1142 29.0972 25.6737 29.0972 32.574 25.9603C32.6194 25.9386 32.6733 25.9453 32.7136 25.9769C32.9272 26.1502 33.1509 26.3234 33.3763 26.4883C33.4536 26.545 33.4486 26.6633 33.3645 26.7116C32.3016 27.323 31.1967 27.8394 30.0346 28.2709C29.9589 28.2992 29.9252 28.3858 29.9623 28.4575C30.603 29.6786 31.3346 30.8414 32.1401 31.9442C32.1738 31.9909 32.2343 32.0108 32.2898 31.9942C35.7761 30.933 39.3112 29.3321 42.9606 26.695C42.9926 26.6717 43.0128 26.6367 43.0162 26.5983C43.9058 17.5424 41.5261 9.67608 36.7078 2.70259C36.696 2.67929 36.6759 2.66262 36.6523 2.65263ZM14.791 21.8272C12.6888 21.8272 10.9565 19.9281 10.9565 17.5958C10.9565 15.2635 12.6552 13.3644 14.791 13.3644C16.9436 13.3644 18.6591 15.2802 18.6254 17.5958C18.6254 19.9281 16.9268 21.8272 14.791 21.8272ZM28.9683 21.8272C26.8661 21.8272 25.1339 19.9281 25.1339 17.5958C25.1339 15.2635 26.8325 13.3644 28.9683 13.3644C31.121 13.3644 32.8364 15.2802 32.8028 17.5958C32.8028 19.9281 31.121 21.8272 28.9683 21.8272Z"
        fill="currentColor"
      />
    </svg>
  );
};
export const LinkedInIcon = ({
  className,
  width = "34",
  height = "30",
  ...rest
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 34 31"
      fill="currentColor"
      className={`${className}`}
      {...rest}
    >
      <path
        d="M7.40629 3.43856C7.40583 4.35007 7.03982 5.22407 6.3888 5.86828C5.73777 6.51249 4.85504 6.87415 3.93481 6.87369C3.01457 6.87324 2.13221 6.5107 1.48184 5.86585C0.831457 5.22099 0.466337 4.34664 0.466797 3.43513C0.467257 2.52362 0.83326 1.64963 1.48429 1.00541C2.13532 0.361203 3.01804 -0.000455324 3.93828 4.30227e-07C4.85851 0.000456184 5.74087 0.362988 6.39125 1.00784C7.04163 1.6527 7.40675 2.52706 7.40629 3.43856ZM7.51038 9.41868H0.57089V30.9333H7.51038V9.41868ZM18.4748 9.41868H11.57V30.9333H18.4054V19.6433C18.4054 13.3539 26.6807 12.7696 26.6807 19.6433V30.9333H33.5335V17.3062C33.5335 6.70357 21.2853 7.09881 18.4054 12.3056L18.4748 9.41868Z"
        fill="currentColor"
      />
    </svg>
  );
};
export const InstagramIcon = ({
  className,
  width = "34",
  height = "30",
  ...rest
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 56.7 56.7"
      fill="currentColor"
      className={`${className}`}
      {...rest}
    >
      <g>
        <path
          d="M28.2,16.7c-7,0-12.8,5.7-12.8,12.8s5.7,12.8,12.8,12.8S41,36.5,41,29.5S35.2,16.7,28.2,16.7z M28.2,37.7
		c-4.5,0-8.2-3.7-8.2-8.2s3.7-8.2,8.2-8.2s8.2,3.7,8.2,8.2S32.7,37.7,28.2,37.7z"
        />
        <circle cx="41.5" cy="16.4" r="2.9" />
        <path
          d="M49,8.9c-2.6-2.7-6.3-4.1-10.5-4.1H17.9c-8.7,0-14.5,5.8-14.5,14.5v20.5c0,4.3,1.4,8,4.2,10.7c2.7,2.6,6.3,3.9,10.4,3.9
		h20.4c4.3,0,7.9-1.4,10.5-3.9c2.7-2.6,4.1-6.3,4.1-10.6V19.3C53,15.1,51.6,11.5,49,8.9z M48.6,39.9c0,3.1-1.1,5.6-2.9,7.3
		s-4.3,2.6-7.3,2.6H18c-3,0-5.5-0.9-7.3-2.6C8.9,45.4,8,42.9,8,39.8V19.3c0-3,0.9-5.5,2.7-7.3c1.7-1.7,4.3-2.6,7.3-2.6h20.6
		c3,0,5.5,0.9,7.3,2.7c1.7,1.8,2.7,4.3,2.7,7.2V39.9L48.6,39.9z"
        />
      </g>
    </svg>
  );
};
export const EthIcon = ({
  width = "24",
  height = "24",
  className,
  ...rest
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      className={className}
      {...rest}
    >
      <path
        fill="#7CA9FF"
        d="M12 0L4.63 12.22L12 16.574l7.37-4.354zm0 24L4.63 13.617L12 18l7.37-4.383z"
      />
    </svg>
  );
};
export const ArrowIcon = ({
  width = "12",
  height = "6",
  className,
  ...rest
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 12 6"
      fill="currentColor"
      className={`${className}`}
      {...rest}
    >
      <path d="M6 6L0 0H12L6 6Z" fill="currentColor4" />
    </svg>
  );
};
export const WalletIcon = ({ height = 16, width = 16, className, ...rest }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 11 9"
      fill="none"
      className={`${className}`}
      {...rest}
    >
      <path
        d="M9.3134 3.31011V2.2154C9.3134 1.68227 9.3134 1.41571 9.20949 1.21208C9.11811 1.03296 8.97225 0.887338 8.79288 0.796078C8.58894 0.692322 8.32201 0.692322 7.78807 0.692322H2.25873C1.72481 0.692322 1.45786 0.692322 1.25393 0.796078C1.07455 0.887338 0.928707 1.03296 0.837304 1.21208C0.733398 1.41571 0.733398 1.68227 0.733398 2.2154V6.78463C0.733398 7.31778 0.733398 7.58431 0.837304 7.78792C0.928707 7.96709 1.07455 8.11268 1.25393 8.20393C1.45786 8.30771 1.72481 8.30771 2.25873 8.30771H7.78807C8.32201 8.30771 8.58894 8.30771 8.79288 8.20393C8.97225 8.11268 9.11811 7.96709 9.20949 7.78792C9.3134 7.58431 9.3134 7.31778 9.3134 6.78463V5.68992M6.93007 4.50001C6.93007 4.27886 6.93007 4.16827 6.94838 4.07632C7.02361 3.6987 7.31923 3.40352 7.69743 3.3284C7.78953 3.31011 7.90027 3.31011 8.12173 3.31011H9.07507C9.29653 3.31011 9.40727 3.31011 9.49937 3.3284C9.87755 3.40352 10.1732 3.6987 10.2484 4.07632C10.2667 4.16827 10.2667 4.27886 10.2667 4.50001C10.2667 4.72117 10.2667 4.83175 10.2484 4.92371C10.1732 5.30133 9.87755 5.59651 9.49937 5.67163C9.40727 5.68992 9.29653 5.68992 9.07507 5.68992H8.12173C7.90027 5.68992 7.78953 5.68992 7.69743 5.67163C7.31923 5.59651 7.02361 5.30133 6.94838 4.92371C6.93007 4.83175 6.93007 4.72117 6.93007 4.50001Z"
        stroke="white"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
export const TicketIcon = ({
  className,
  height = "24",
  width = "24",
  ...rest
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 512 512"
      className={className}
      {...rest}
    >
      <path
        fill="none"
        stroke="currentColor"
        strokeMiterlimit="10"
        strokeWidth="32"
        d="M366.05 146a46.7 46.7 0 0 1-2.42-63.42a3.87 3.87 0 0 0-.22-5.26l-44.13-44.18a3.89 3.89 0 0 0-5.5 0l-70.34 70.34a23.6 23.6 0 0 0-5.71 9.24a23.66 23.66 0 0 1-14.95 15a23.7 23.7 0 0 0-9.25 5.71L33.14 313.78a3.89 3.89 0 0 0 0 5.5l44.13 44.13a3.87 3.87 0 0 0 5.26.22a46.69 46.69 0 0 1 65.84 65.84a3.87 3.87 0 0 0 .22 5.26l44.13 44.13a3.89 3.89 0 0 0 5.5 0l180.4-180.39a23.7 23.7 0 0 0 5.71-9.25a23.66 23.66 0 0 1 14.95-15a23.6 23.6 0 0 0 9.24-5.71l70.34-70.34a3.89 3.89 0 0 0 0-5.5l-44.13-44.13a3.87 3.87 0 0 0-5.26-.22a46.7 46.7 0 0 1-63.42-2.32Z"
      />
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="32"
        d="m250.5 140.44l-16.51-16.51m60.53 60.53l-11.01-11m55.03 55.03l-11-11.01m60.53 60.53l-16.51-16.51"
      />
    </svg>
  );
};
export const CrossIcon = ({ className, ...rest }) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 7 7"
      fill="none"
      className={`${className}`}
      {...rest}
    >
      <path
        d="M3.44531 0.809509V6.07737"
        stroke="black"
        strokeWidth="0.75"
        strokeLinecap="round"
      />
      <path
        d="M6.07812 3.44348L0.810268 3.44348"
        stroke="black"
        strokeWidth="0.75"
        strokeLinecap="round"
      />
    </svg>
  );
};
export const DiamondIcon = ({
  width = "24",
  height = "24",
  fill = "currentColor",
  className,
  ...rest
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 28 26"
      fill="none"
      className={className}
      {...rest}
    >
      <path
        d="M14.2866 25.7143L0.572266 8.57143L4.68655 0H23.8866L28.0008 8.57143L14.2866 25.7143ZM11.0294 7.14286H17.5437L15.4866 2.85714H13.0866L11.0294 7.14286ZM12.9151 19.5357V10H5.30369L12.9151 19.5357ZM15.658 19.5357L23.2694 10H15.658V19.5357ZM20.5951 7.14286H24.2294L22.1723 2.85714H18.538L20.5951 7.14286ZM4.34369 7.14286H7.97798L10.0351 2.85714H6.40084L4.34369 7.14286Z"
        fill={fill}
      />
    </svg>
  );
};
export const ArrowDownLightIcon = ({ className, ...rest }) => {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 16 9"
      fill="none"
      className={`${className}`}
      {...rest}
    >
      <path d="M1 1L8 8L15 1" stroke="#EFEFEF" strokeLinecap="round" />
    </svg>
  );
};
export const MenuIcon = ({ className, ...rest }) => {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 46 36"
      fill="none"
      className={`${className}`}
      {...rest}
    >
      <rect
        width="46"
        height="7"
        rx="2"
        transform="matrix(1 0 0 -1 0 7)"
        fill="white"
      />
      <rect
        width="33.3973"
        height="6"
        rx="2"
        transform="matrix(1 0 0 -1 12.6025 21)"
        fill="white"
      />
      <rect
        width="46"
        height="7"
        rx="2"
        transform="matrix(1 0 0 -1 0 36)"
        fill="white"
      />
    </svg>
  );
};
export const ModalCrossIcon = ({
  className,
  width = "20",
  height = "20",
  ...rest
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 26 26"
      fill="currentColor"
      className={`${className}`}
      {...rest}
    >
      <path
        d="M25 1L1 25"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M0.999999 1L25 25"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
};
export const BtcIcon = ({
  width = "22",
  height = "22",
  className,
  ...rest
}) => {
  return (
    <svg width={width} height={height} viewBox="0 0 32 32" {...rest}>
      <g fill="none" fillRule="evenodd">
        <circle cx="16" cy="16" r="16" fill="#f7931a" />
        <path
          fill="#fff"
          fillRule="nonzero"
          d="M23.189 14.02c.314-2.096-1.283-3.223-3.465-3.975l.708-2.84l-1.728-.43l-.69 2.765c-.454-.114-.92-.22-1.385-.326l.695-2.783L15.596 6l-.708 2.839c-.376-.086-.746-.17-1.104-.26l.002-.009l-2.384-.595l-.46 1.846s1.283.294 1.256.312c.7.175.826.638.805 1.006l-.806 3.235c.048.012.11.03.18.057l-.183-.045l-1.13 4.532c-.086.212-.303.531-.793.41c.018.025-1.256-.313-1.256-.313l-.858 1.978l2.25.561c.418.105.828.215 1.231.318l-.715 2.872l1.727.43l.708-2.84c.472.127.93.245 1.378.357l-.706 2.828l1.728.43l.715-2.866c2.948.558 5.164.333 6.097-2.333c.752-2.146-.037-3.385-1.588-4.192c1.13-.26 1.98-1.003 2.207-2.538m-3.95 5.538c-.533 2.147-4.148.986-5.32.695l.95-3.805c1.172.293 4.929.872 4.37 3.11m.535-5.569c-.487 1.953-3.495.96-4.47.717l.86-3.45c.975.243 4.118.696 3.61 2.733"
        />
      </g>
    </svg>
  );
};
export const UsdtIcon = ({ className, ...rest }) => {
  return (
    <svg
      width="22px"
      height="22px"
      viewBox="0 0 32 32"
      className={`${className}`}
      {...rest}
    >
      <g fill="none" fillRule="evenodd">
        <circle cx="16" cy="16" r="16" fill="#26a17b" />
        <path
          fill="#fff"
          d="M17.922 17.383v-.002c-.11.008-.677.042-1.942.042c-1.01 0-1.721-.03-1.971-.042v.003c-3.888-.171-6.79-.848-6.79-1.658c0-.809 2.902-1.486 6.79-1.66v2.644c.254.018.982.061 1.988.061c1.207 0 1.812-.05 1.925-.06v-2.643c3.88.173 6.775.85 6.775 1.658c0 .81-2.895 1.485-6.775 1.657m0-3.59v-2.366h5.414V7.819H8.595v3.608h5.414v2.365c-4.4.202-7.709 1.074-7.709 2.118c0 1.044 3.309 1.915 7.709 2.118v7.582h3.913v-7.584c4.393-.202 7.694-1.073 7.694-2.116c0-1.043-3.301-1.914-7.694-2.117"
        />
      </g>
    </svg>
  );
};

export const CheckIcon = ({ colorClass, ...rest }) => {
  return (
    <svg
      width="13"
      height="9"
      viewBox="0 0 13 9"
      fill="none"
      className={`absolute
    w-4 h-5
    hidden peer-checked:block
    pointer-events-none text-${colorClass}`}
    >
      <path
        d="M1 4.29883L4.66667 7.79883L12 0.798828"
        stroke="black"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
};
export const CheckCirclekIcon = ({ className, ...rest }) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      className={`${className}`}
      {...rest}
    >
      <path
        d="M10 0C4.5 0 0 4.5 0 10C0 15.5 4.5 20 10 20C15.5 20 20 15.5 20 10C20 4.5 15.5 0 10 0ZM10 18C5.59 18 2 14.41 2 10C2 5.59 5.59 2 10 2C14.41 2 18 5.59 18 10C18 14.41 14.41 18 10 18ZM14.59 5.58L8 12.17L5.41 9.59L4 11L8 15L16 7L14.59 5.58Z"
        fill="#30C551"
      />
    </svg>
  );
};
export const GreyCheckIcon = ({ className, ...rest }) => {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path
        d="M10 0C4.5 0 0 4.5 0 10C0 15.5 4.5 20 10 20C15.5 20 20 15.5 20 10C20 4.5 15.5 0 10 0ZM10 18C5.59 18 2 14.41 2 10C2 5.59 5.59 2 10 2C14.41 2 18 5.59 18 10C18 14.41 14.41 18 10 18ZM14.59 5.58L8 12.17L5.41 9.59L4 11L8 15L16 7L14.59 5.58Z"
        fill="white"
        fillOpacity="0.2"
      />
    </svg>
  );
};
export const ArrowRightIcon = ({ className, ...rest }) => {
  return (
    <svg
      width="22px"
      height="22px"
      viewBox="0 0 1024 1024"
      className={`${className}`}
      {...rest}
    >
      <path
        fill="currentColor"
        d="M338.752 104.704a64 64 0 0 0 0 90.496l316.8 316.8l-316.8 316.8a64 64 0 0 0 90.496 90.496l362.048-362.048a64 64 0 0 0 0-90.496L429.248 104.704a64 64 0 0 0-90.496 0"
      />
    </svg>
  );
};
export const BankIcon = ({ className, ...rest }) => {
  return (
    <svg
      width="52"
      height="52"
      viewBox="0 0 52 52"
      fill="none"
      className={`${className}`}
      {...rest}
    >
      <path
        d="M25.1072 0.501953L0 12.373V18.5489H52V12.3402L25.1072 0.501953ZM48.5333 15.1447H3.46667V14.5121L25.1594 4.25555L48.5333 14.5449V15.1447ZM3.46667 42.3786H48.5333V45.7828H3.46667V42.3786ZM0 48.336H52V51.7402H0V48.336ZM4.33333 21.9531H7.8V38.9743H4.33333V21.9531ZM44.2 21.9531H47.6667V38.9743H44.2V21.9531ZM33.8 21.9531H37.2667V38.9743H33.8V21.9531ZM14.7333 21.9531H18.2V38.9743H14.7333V21.9531ZM24.2667 21.9531H27.7333V38.9743H24.2667V21.9531Z"
        fill="white"
      />
    </svg>
  );
};
export const LongArrowRightIcon = ({
  className,
  width = "27",
  height = "16",
  ...rest
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 27 16"
      fill="none"
      className={`${className}`}
      {...rest}
    >
      <path
        d="M1 7C0.447715 7 4.82823e-08 7.44772 0 8C-4.82823e-08 8.55228 0.447715 9 1 9L1 7ZM26.7071 8.70711C27.0976 8.31658 27.0976 7.68342 26.7071 7.2929L20.3431 0.928934C19.9526 0.538409 19.3195 0.538409 18.9289 0.928934C18.5384 1.31946 18.5384 1.95262 18.9289 2.34315L24.5858 8L18.9289 13.6569C18.5384 14.0474 18.5384 14.6805 18.9289 15.0711C19.3195 15.4616 19.9526 15.4616 20.3431 15.0711L26.7071 8.70711ZM1 9L26 9L26 7L1 7L1 9Z"
        fill="#EFEFEF"
      />
    </svg>
  );
};
export const WinnerIcon = ({
  className,
  width = "18",
  height = "16",
  ...rest
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 18 16"
      fill="none"
      className={`${className}`}
      {...rest}
    >
      <path
        d="M2 12L0 1L5.5 6L9 0L12.5 6L18 1L16 12H2ZM16 15C16 15.6 15.6 16 15 16H3C2.4 16 2 15.6 2 15V14H16V15Z"
        fill="currentColor"
      />
    </svg>
  );
};
export const WinnerDarkIcon = ({
  className,
  width = "24",
  height = "21",
  ...rest
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 21"
      fill="none"
      className={`${className}`}
      {...rest}
    >
      <path
        d="M3.28041 15.5777L0.789062 1.87531L7.64027 8.10369L12.0001 0.629639L16.36 8.10369L23.2112 1.87531L20.7199 15.5777H3.28041ZM20.7199 19.3148C20.7199 20.0622 20.2216 20.5604 19.4742 20.5604H4.52609C3.77868 20.5604 3.28041 20.0622 3.28041 19.3148V18.0691H20.7199V19.3148Z"
        fill="#011828"
      />
    </svg>
  );
};
export const WarningIcon = ({
  className,
  width = "128",
  height = "120",
  ...rest
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 128 120"
      fill="none"
      className={`${className}`}
      {...rest}
    >
      <path
        d="M14.3253 115H113.675C115.288 115 116.874 114.584 118.278 113.794C119.681 113.004 120.853 111.866 121.681 110.492C122.508 109.118 122.962 107.555 122.998 105.955C123.034 104.355 122.65 102.773 121.885 101.363L72.2135 9.86544C68.6897 3.37819 59.3103 3.37819 55.7865 9.86544L6.11465 101.363C5.3497 102.773 4.96644 104.355 5.0023 105.955C5.03817 107.555 5.49195 109.118 6.31929 110.492C7.14663 111.866 8.31922 113.004 9.72249 113.794C11.1258 114.584 12.7117 115 14.3253 115Z"
        stroke="#FFE61A"
        strokeWidth="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M62.0013 42.7207L64.0014 78L65.9979 42.7351C66.0103 42.5097 65.9671 42.2845 65.871 42.0734C65.7749 41.8623 65.628 41.6696 65.4392 41.5073C65.2503 41.3449 65.0236 41.2161 64.7728 41.1289C64.522 41.0417 64.2524 40.9979 63.9805 41.0001C63.7133 41.0022 63.4494 41.0488 63.2043 41.137C62.9592 41.2253 62.7378 41.3533 62.5534 41.5137C62.3689 41.6741 62.225 41.8635 62.1302 42.0708C62.0354 42.2781 61.9916 42.4991 62.0013 42.7207Z"
        stroke="#FFE61A"
        strokeWidth="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M64 101C62.8133 101 61.6533 100.648 60.6666 99.9888C59.6799 99.3295 58.9109 98.3925 58.4567 97.2961C58.0026 96.1997 57.8838 94.9933 58.1153 93.8295C58.3468 92.6656 58.9182 91.5965 59.7574 90.7574C60.5965 89.9182 61.6656 89.3468 62.8295 89.1153C63.9933 88.8838 65.1997 89.0026 66.2961 89.4567C67.3925 89.9108 68.3295 90.6799 68.9888 91.6666C69.6481 92.6533 70 93.8133 70 95C70 96.5913 69.3679 98.1174 68.2426 99.2426C67.1174 100.368 65.5913 101 64 101Z"
        fill="#FFE61A"
      />
    </svg>
  );
};
export const LinkIcon = ({ className, ...props }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
      <polyline points="15 3 21 3 21 9"></polyline>
      <line x1="10" y1="14" x2="21" y2="3"></line>
    </svg>
  );
};

export const PayementIcon = ({ ...props }) => {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" {...props}>
      <path
        d="M9.45 17.4667C9.45 19.1419 10.8081 20.5 12.4833 20.5H15.3C17.0949 20.5 18.55 19.0449 18.55 17.25C18.55 15.4551 17.0949 14 15.3 14H12.7C10.9051 14 9.45 12.5449 9.45 10.75C9.45 8.95507 10.9051 7.5 12.7 7.5H15.5167C17.1919 7.5 18.55 8.85807 18.55 10.5333M14 5.55V7.5M14 20.5V22.45M27 14C27 21.1797 21.1797 27 14 27C6.8203 27 1 21.1797 1 14C1 6.8203 6.8203 1 14 1C21.1797 1 27 6.8203 27 14Z"
        stroke="#58E1FF"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
export const TextCopyIcon = ({
  height = "16",
  width = "16",
  className,
  ...props
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      className={className}
      {...props}
    >
      <path
        fill="currentColor"
        d="M9.116 17q-.691 0-1.153-.462T7.5 15.385V4.615q0-.69.463-1.153T9.116 3h7.769q.69 0 1.153.462t.462 1.153v10.77q0 .69-.462 1.152T16.884 17zm0-1h7.769q.23 0 .423-.192t.192-.423V4.615q0-.23-.192-.423T16.884 4H9.116q-.231 0-.424.192t-.192.423v10.77q0 .23.192.423t.423.192m-3 4q-.69 0-1.153-.462T4.5 18.385V7.115q0-.213.143-.356T5 6.616t.357.143t.143.357v11.269q0 .23.192.423t.423.192h8.27q.213 0 .356.143t.143.357t-.143.357t-.357.143zM8.5 16V4z"
      />
    </svg>
  );
};
export const TextCopyTickIcon = ({
  height = "16",
  width = "16",
  className,
  ...props
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      className={className}
      {...props}
    >
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="m5 14l3.5 3.5L19 6.5"
        color="currentColor"
      />
    </svg>
  );
};
