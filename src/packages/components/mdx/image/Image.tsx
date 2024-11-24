export default function Image({
  src,
  alt,
}: React.JSX.IntrinsicElements["img"]) {
  return <img src={src} alt={alt} width={"100%"} />;
}
