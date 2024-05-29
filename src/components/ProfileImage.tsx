import React, { FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faCamera } from "@fortawesome/free-solid-svg-icons";

const ProfileImage: FC<any> = () => {
  return (
    <div className="relative inline-block">
      <div className="flex items-center justify-center w-48 h-48 rounded-full bg-gray-300">
        <FontAwesomeIcon
          icon={faUser}
          size="6x"
          onClick={() => console.log("")}
        />
      </div>
      <div className="absolute top-36 right-0 p-4 bg-gray-500 rounded-full">
        <FontAwesomeIcon icon={faCamera} size="xl" />
      </div>
    </div>
  );
};

export default ProfileImage;
