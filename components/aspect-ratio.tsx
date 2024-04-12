"use client";

import { AspectRatio } from "./ui/aspect-ratio";

const AspectRatioImage = () => {
  return (
    <AspectRatio ratio={16 / 9} className="bg-muted">
      <Image
        src={data?.banner_url}
        alt="Design Image"
        fill
        className="rounded-md object-cover"
      />
    </AspectRatio>
  );
};

export default AspectRatioImage;
