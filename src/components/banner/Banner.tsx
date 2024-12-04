interface BannerProps {
  src: string;
  alt: string;
}

export function Banner({ src, alt }: BannerProps) {
  return (
    <div
      css={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <img
        src={src}
        alt={alt}
        css={{
          maxHeight: "360px",
          objectFit: "contain",

          "@media screen and (max-width: 768px)": {
            maxHeight: "240px",
          },
          "@media screen and (min-width: 768px)": {
            maxHeight: "360px",
          },
        }}
      />
    </div>
  );
}
