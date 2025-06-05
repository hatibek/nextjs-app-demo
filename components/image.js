import Image from "next/image";

export default function ImageComponent() {
  return (
    <Image
      src="/images/profile.jpg"
      width={160}
      height={130}
      alt="Picture of the author"
      layout="responsive"

    />
  );
}
