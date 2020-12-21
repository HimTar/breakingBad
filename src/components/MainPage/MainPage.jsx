import React, { useState } from "react";

import DeleteIcon from "@material-ui/icons/Delete";
import PublishIcon from "@material-ui/icons/Publish";
import GetAppIcon from "@material-ui/icons/GetApp";

import { openUploadWidget } from "../../Utils/CloudinaryService";

import styles from "./MainPage.module.css";

export default function MainPage() {
  const [image, setImage] = useState("");

  const beginUpload = (tag) => {
    const uploadOptions = {
      cloudName: "himanshu-cloud",
      uploadPreset: "upload",
    };
    openUploadWidget(uploadOptions, (error, photos) => {
      if (!error) {
        setImage(photos[0].public_id);
      } else {
        console.log(error);
      }
    });
  };

  const deleteImage = () => {
    setImage("");
  };

  console.log(image);

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.upload} onClick={beginUpload}>
          <PublishIcon />
        </div>
        <div className={styles.delete} onClick={deleteImage}>
          <DeleteIcon />
        </div>
      </div>

      {image ? (
        <img
          alt="upload"
          src={`https://res.cloudinary.com/himanshu-cloud/image/upload/l_${image},w_600,h_338,g_north_west,x_540,y_363/tv.jpg`}
          className={styles.image}
        />
      ) : (
        <img
          alt="upload"
          src="https://res.cloudinary.com/himanshu-cloud/image/upload/v1608403021/tv.jpg"
          className={styles.image}
        />
      )}

      <div className={styles.download}>
        <button className={styles.downloadButton}>
          {image ? (
            <a
              href={`https://res.cloudinary.com/himanshu-cloud/image/upload/fl_attachment/l_${image},w_600,h_338,g_north_west,x_540,y_363/tv.jpg`}
            >
              <GetAppIcon style={{ color: "white" }} />
            </a>
          ) : (
            <a href="/" onClick={(e) => e.preventDefault()}>
              <GetAppIcon style={{ color: "white" }} />
            </a>
          )}
        </button>
      </div>
    </div>
  );
}
