import { Image } from "@nextui-org/react";

export default function Logo() {
  return (
    <Image
      width={80}
      height={30}  
      src="../wingg.png"
      alt="Default Image"
      objectFit="contain"
      hidein="xs"
    />
  );
}