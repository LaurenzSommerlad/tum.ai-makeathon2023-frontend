import React from "react";

export default function CProfileImage(props) {
  const { image, className } = props;
  return <img className={className} src={image} alt="Profile Icon" />;
}
