import "./image.scss";
import "react-image-crop/src/ReactCrop.scss";
import React, { useState } from "react";
import { Card, Image } from "antd";
// import ReactCrop, { type Crop } from "react-image-crop";
// import Cropper from "react-easy-crop";
import { PinturaEditor } from "@pqina/react-pintura";
import { getEditorDefaults } from "@pqina/pintura";

import "@pqina/pintura/pintura.css";

const src = "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png";

const ImageCropper: React.FC = () => {
  //   const [crop, setCrop] = useState<Crop>();

  //   const [crop, setCrop] = useState({ x: 0, y: 0 });
  //   const [zoom, setZoom] = useState(1);

  //   const onCropComplete = (croppedArea: any, croppedAreaPixels: any) => {
  //     console.log(croppedArea, croppedAreaPixels);
  //   };

  const [inlineResult, setInlineResult] = useState<string>();

  return (
    <div className="image-container">
      <Card className="card-container" title="图片裁剪示例">
        {/* <ReactCrop
          crop={crop}
          onChange={(crop, percentCrop) => {
            setCrop(percentCrop);
            // console.log("crop: ", crop);
            // console.log("percentCrop: ", percentCrop);
          }}
        >
          <Image width={200} src={src} preview={false} />
        </ReactCrop> */}

        {/* <Cropper
          image={src}
          crop={crop}
          zoom={zoom}
          aspect={4 / 3}
          onCropChange={setCrop}
          onCropComplete={onCropComplete}
          onZoomChange={setZoom}
        /> */}

        <div style={{ height: "80vh" }}>
          <PinturaEditor
            {...getEditorDefaults()}
            src={src}
            onProcess={(res) => {
              setInlineResult(URL.createObjectURL(res.dest));
            }}
          />
        </div>
        {inlineResult && <Image width={200} src={inlineResult} />}
      </Card>
    </div>
  );
};

export default ImageCropper;
