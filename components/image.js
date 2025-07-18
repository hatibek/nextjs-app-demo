import Image from "next/image";

export default function ImageComponent({image}) {
  return (
    <Image
      src={image.src}
      height={130}
      width={160}
      alt={image.alt}
      layout="responsive"
    />
  );
}
