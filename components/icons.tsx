type IconProps = {
  size?: number;
};

function Svg({
  size = 18,
  children,
  ...props
}: IconProps & React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {children}
    </svg>
  );
}

export const IconMail = (p: IconProps) => (
  <Svg {...p}>
    <rect x="2.5" y="4.5" width="19" height="15" rx="2.5" />
    <path d="m3.5 6.5 8.5 6 8.5-6" />
  </Svg>
);

export const IconPhone = (p: IconProps) => (
  <Svg {...p}>
    <path d="M5.5 3h3.2l1.5 4-2.1 1.6a13 13 0 0 0 7.3 7.3l1.6-2.1 4 1.5v3.2a1.8 1.8 0 0 1-2 1.8A17.5 17.5 0 0 1 3.7 5.1a1.8 1.8 0 0 1 1.8-2Z" />
  </Svg>
);

export const IconGithub = (p: IconProps) => (
  <Svg {...p}>
    <path d="M12 2.5a9.5 9.5 0 0 0-3 18.5c.5.1.6-.2.6-.5v-1.7c-2.6.6-3.1-1.3-3.1-1.3-.4-1.1-1-1.4-1-1.4-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.5 2.3 1.1 2.9.8.1-.6.3-1.1.6-1.3-2.2-.2-4.5-1.1-4.5-4.9 0-1.1.4-2 1-2.7-.1-.3-.4-1.3.1-2.6 0 0 .8-.3 2.7 1a9.3 9.3 0 0 1 5 0c1.9-1.3 2.7-1 2.7-1 .5 1.3.2 2.3.1 2.6.6.7 1 1.6 1 2.7 0 3.8-2.3 4.7-4.5 4.9.4.3.7.9.7 1.9v2.8c0 .3.1.6.6.5A9.5 9.5 0 0 0 12 2.5Z" />
  </Svg>
);

export const IconLinkedin = (p: IconProps) => (
  <Svg {...p}>
    <rect x="3" y="3" width="18" height="18" rx="3" />
    <path d="M8 10.5V17" />
    <path d="M8 7.5v.01" />
    <path d="M12 17v-3.6a2.4 2.4 0 0 1 4.8 0V17" />
  </Svg>
);

export const IconScholar = (p: IconProps) => (
  <Svg {...p}>
    <path d="M12 3 2 8l10 5 10-5-10-5Z" />
    <path d="M6 10.5V15c0 1.2 2.7 2.5 6 2.5s6-1.3 6-2.5v-4.5" />
    <path d="M22 8v5" />
  </Svg>
);

export const IconTwitter = (p: IconProps) => (
  <Svg {...p}>
    <path d="M21 4.5c-.7.4-1.5.6-2.3.8A3.8 3.8 0 0 0 16 3.5a3.8 3.8 0 0 0-3.8 3.8v1A9 9 0 0 1 5.5 5.3s-3.5 6.2 3.5 9.6A9.7 9.7 0 0 1 3 16.7c7 4 16 0 16-8.5v-.6a5.5 5.5 0 0 0 2-3Z" />
  </Svg>
);

export const IconInstagram = (p: IconProps) => (
  <Svg {...p}>
    <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.2" cy="6.8" r="0.6" fill="currentColor" stroke="none" />
  </Svg>
);

export const IconGlobe = (p: IconProps) => (
  <Svg {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M3 12h18" />
    <path d="M12 3c2.5 2.4 3.8 5.6 3.8 9S14.5 18.6 12 21c-2.5-2.4-3.8-5.6-3.8-9S9.5 5.4 12 3Z" />
  </Svg>
);

export const IconSun = (p: IconProps) => (
  <Svg {...p}>
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2.5v2M12 19.5v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2.5 12h2M19.5 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
  </Svg>
);

export const IconMoon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M20 13.5A8 8 0 0 1 10.5 4a8 8 0 1 0 9.5 9.5Z" />
  </Svg>
);

export const IconMenu = (p: IconProps) => (
  <Svg {...p}>
    <path d="M4 7h16M4 12h16M4 17h16" />
  </Svg>
);

export const IconClose = (p: IconProps) => (
  <Svg {...p}>
    <path d="M6 6l12 12M18 6 6 18" />
  </Svg>
);

export const IconArrowUpRight = (p: IconProps) => (
  <Svg {...p}>
    <path d="M7 17 17 7M9 7h8v8" />
  </Svg>
);

export const IconFileText = (p: IconProps) => (
  <Svg {...p}>
    <path d="M14 2.5H6.5A1.5 1.5 0 0 0 5 4v16a1.5 1.5 0 0 0 1.5 1.5h11A1.5 1.5 0 0 0 19 20V7.5Z" />
    <path d="M14 2.5V7.5H19" />
    <path d="M9 12.5h6M9 16h6" />
  </Svg>
);
