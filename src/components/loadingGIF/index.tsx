import Image from "next/image";
export const LoadingGIF = ({ hidden }: { hidden?: boolean }) => (
  <Image
    src="/static/loading.gif"
    hidden={hidden}
    width={100}
    height={100}
    loading="eager"
    alt="loading gif"
  />
);
