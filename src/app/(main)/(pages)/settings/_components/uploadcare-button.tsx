'use client'; // Only needed for React Server Components if you're using Next.js

import React from 'react';
import { FileUploaderRegular } from '@uploadcare/react-uploader/next'; // Importing from the latest package
import '@uploadcare/react-uploader/core.css'; // Importing the necessary styles

type Props = {
  onUpload: (url: string) => void;
};

const UploadCareButton = ({ onUpload }: Props) => {
  const handleUpload = (fileInfo: any) => {
    const fileUrl = fileInfo.cdnUrl; // Getting the CDN URL of the uploaded file
    if (fileUrl) {
      onUpload(fileUrl); // Pass the file URL to the parent component
    }
  };

  return (
    <div>
      <FileUploaderRegular
        sourceList="local, url, camera, dropbox" // Allows various sources for file upload
        classNameUploader="uc-light" // Adding a class for styling
        pubkey="cf8572cf66bed5e85225" // Your public Uploadcare API key
        onChange={handleUpload} // Callback to handle the uploaded file
      />
    </div>
  );
};

export default UploadCareButton;