"use client";

import { CldUploadButton, CldImage } from "next-cloudinary";
import { useState } from "react";

export type UploadImage = {
  info: { public_id: string };
  event: "success";
};

export default function Home() {
  const [imageId, setImageId] = useState("");

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <CldUploadButton
        onUpload={(result) => {
          const results = result as UploadImage;
          setImageId(results.info.public_id);
        }}
        uploadPreset="ydiplez5"
      />

      {imageId && (
        <CldImage
          width="500"
          height="300"
          src={imageId}
          sizes="100vw"
          alt="Description of my image"
        />
      )}
    </main>
  );
}
