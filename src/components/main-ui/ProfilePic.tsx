import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import profilePic from "../../../public/img/profile.jpeg";

const ProfilePic: React.FC<{
  src?: StaticImageData | string | null;
  username?: string;
  notLink?: boolean;
}> = ({ src, username, notLink }) => {
  const router = useRouter();
  return !notLink ? (
    <Link href={`${username ? `/user/${username}` : "/"}`}>
      <a className="w-12 h-12 cursor-pointer">
        <Image
          src={(src as any) || profilePic}
          alt="profile"
          className="rounded-full hover:opacity-80 object-cover"
          width={48}
          height={48}
        ></Image>
      </a>
    </Link>
  ) : (
    <div className="w-12 h-12 cursor-pointer">
      <Image
        src={(src as any) || profilePic}
        alt="profile"
        className="rounded-full hover:opacity-80 object-cover"
        width={48}
        height={48}
      ></Image>
    </div>
  );
};

export default ProfilePic;
