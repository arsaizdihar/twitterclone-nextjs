import { faTwitter, IconDefinition } from "@fortawesome/free-brands-svg-icons";
import {
  faBell,
  faBookmark,
  faTimesCircle,
  faUser,
} from "@fortawesome/free-regular-svg-icons";
import {
  faHome,
  faSignInAlt,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { useSelector } from "react-redux";
import { getUser } from "../../redux/slices/userSlice";
import Private from "../icons/Private";
import ThreeDots from "../icons/ThreeDots";
import Verified from "../icons/Verified";
import ProfilePic from "./ProfilePic";

const LeftBar: React.FC<{
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ isOpen, setIsOpen }) => {
  const user = useSelector(getUser);
  const router = useRouter();
  return (
    <nav
      className={`${
        isOpen ? "flex" : "hidden sm:flex"
      } flex-col flex-shrink-0 py-1 pl-2 sm:pl-5 pr-2 sm:pr-0 xl:px-5 space-y-1 2xl:space-y-3 max-h-screen fixed sm:sticky left-0 top-0 overflow-y-auto select-none bg-white z-50 h-screen`}
    >
      <div
        className="sm:hidden text-blue-400 hover:text-blue-300 cursor-pointer"
        onClick={() => setIsOpen(false)}
      >
        <FontAwesomeIcon icon={faTimesCircle} transform="shrink-6" />
      </div>
      <IconDiv icon={faTwitter} current href={router.asPath} />
      {user.isAuthenticated && (
        <>
          <IconDiv
            icon={faHome}
            current={router.asPath === "/"}
            name="Home"
            href="/"
          />
          {/* Search */}
          <div className="flex lg:hidden">
            <div className="cursor-pointer rounded-full hover:bg-blue-100 hover:bg-opacity-80 h-10 w-10 hover:text-blue-400 text-gray-600 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 2xl:h-8 2xl:w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>
        </>
      )}
      <div className="hidden lg:flex group cursor-pointer">
        <div className="flex items-center rounded-full group-hover:bg-blue-100 group-hover:bg-opacity-80 group-hover:text-blue-400 text-gray-600">
          <div className="h-10 w-10 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 2xl:h-8 2xl:w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14"
              />
            </svg>
          </div>
          <h3 className="text-lg hidden xl:inline pr-4 font-semibold">
            Explore
          </h3>
        </div>
      </div>
      {user.isAuthenticated && (
        <IconDiv icon={faBell} name="Notifications" href="/" />
      )}
      <div className="flex group cursor-pointer">
        <div className="flex items-center rounded-full group-hover:bg-blue-100 group-hover:bg-opacity-80 group-hover:text-blue-400 text-gray-600">
          <div className="h-10 w-10 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 2xl:h-8 2xl:w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
          </div>
          <h3 className="text-lg hidden xl:inline pr-4 font-semibold">
            Messages
          </h3>
        </div>
      </div>
      {user.isAuthenticated ? (
        <>
          <IconDiv icon={faBookmark} name="Bookmarks" href="/" />
          <div className="flex group cursor-pointer">
            <div className="flex items-center rounded-full group-hover:bg-blue-100 group-hover:bg-opacity-80 group-hover:text-blue-400 text-gray-600">
              <div className="h-10 w-10 flex items-center justify-center">
                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  className="h-6 w-6 2xl:h-8 2xl:w-8"
                  fill="currentColor"
                >
                  <path d="M19.75 22H4.25C3.01 22 2 20.99 2 19.75V4.25C2 3.01 3.01 2 4.25 2h15.5C20.99 2 22 3.01 22 4.25v15.5c0 1.24-1.01 2.25-2.25 2.25zM4.25 3.5c-.414 0-.75.337-.75.75v15.5c0 .413.336.75.75.75h15.5c.414 0 .75-.337.75-.75V4.25c0-.413-.336-.75-.75-.75H4.25z"></path>
                  <path d="M17 8.64H7c-.414 0-.75-.337-.75-.75s.336-.75.75-.75h10c.414 0 .75.335.75.75s-.336.75-.75.75zm0 4.11H7c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h10c.414 0 .75.336.75.75s-.336.75-.75.75zm-5 4.11H7c-.414 0-.75-.335-.75-.75s.336-.75.75-.75h5c.414 0 .75.337.75.75s-.336.75-.75.75z"></path>
                </svg>
              </div>
              <h3 className="text-lg hidden xl:inline pr-4 font-semibold">
                Lists
              </h3>
            </div>
          </div>
          <IconDiv
            icon={faUser}
            current={router.asPath === `/user/${user.username}`}
            name="Profile"
            href={`/user/${user.username}`}
          />
          <div className="flex group cursor-pointer">
            <div className="flex items-center rounded-full group-hover:bg-blue-100 group-hover:bg-opacity-80 group-hover:text-blue-400 text-gray-600">
              <div className="h-10 w-10 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 2xl:h-8 2xl:w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-lg hidden xl:inline pr-4 font-semibold">
                More
              </h3>
            </div>
          </div>
          <IconDiv icon={faSignOutAlt} name="Logout" href="/auth/logout" />
          <div></div>
          <div className="rounded-full bg-blue-400 hover:bg-opacity-80 h-10 w-10 xl:h-12 xl:w-full text-white flex items-center justify-center flex-shrink-0 cursor-pointer">
            <span className="font-bold text-lg hidden xl:inline-block">
              Tweet
            </span>
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              className="h-6 w-6 xl:hidden"
              fill="currentColor"
            >
              <path d="M8.8 7.2H5.6V3.9c0-.4-.3-.8-.8-.8s-.7.4-.7.8v3.3H.8c-.4 0-.8.3-.8.8s.3.8.8.8h3.3v3.3c0 .4.3.8.8.8s.8-.3.8-.8V8.7H9c.4 0 .8-.3.8-.8s-.5-.7-1-.7zm15-4.9v-.1h-.1c-.1 0-9.2 1.2-14.4 11.7-3.8 7.6-3.6 9.9-3.3 9.9.3.1 3.4-6.5 6.7-9.2 5.2-1.1 6.6-3.6 6.6-3.6s-1.5.2-2.1.2c-.8 0-1.4-.2-1.7-.3 1.3-1.2 2.4-1.5 3.5-1.7.9-.2 1.8-.4 3-1.2 2.2-1.6 1.9-5.5 1.8-5.7z"></path>
            </svg>
          </div>
        </>
      ) : (
        <IconDiv icon={faSignInAlt} name="Login" href="/auth/login" />
      )}
      {user.isAuthenticated && (
        <div className="flex-grow sm:flex items-end pb-2 hidden">
          <Link href={`/user/${user.username}`}>
            <a className="flex items-center rounded-full cursor-pointer xl:hover:bg-blue-100 pt-1 pr-2 xl:px-2 xl:flex-grow">
              <ProfilePic src={user.photo} username={user.username} notLink />
              <div className="hidden xl:flex xl:flex-grow">
                <div className="pl-2">
                  <div className="flex leading-none">
                    <h3 className="font-bold">{user.displayName}</h3>
                    {user.private && <Private />}
                    {user.verified && <Verified />}
                  </div>
                  <span className="text-gray-600">@{user.username}</span>
                </div>
                <div className="flex flex-grow justify-end">
                  <ThreeDots />
                </div>
              </div>
            </a>
          </Link>
        </div>
      )}
    </nav>
  );
};

const IconDiv: React.FC<{
  icon: IconDefinition;
  current?: boolean;
  name?: string;
  href: string;
}> = ({ icon, current, name, href }) => {
  return (
    <Link href={href}>
      <a className="flex group cursor-pointer xl:mr-4 ">
        <div
          className={`flex items-center rounded-full group-hover:bg-blue-100 group-hover:bg-opacity-80 group-hover:text-blue-400 ${
            current ? "text-blue-400" : "text-gray-600"
          }`}
        >
          <div className="flex items-center justify-center h-10 w-10 text-sm 2xl:text-base">
            <FontAwesomeIcon icon={icon} transform="shrink-8" />
          </div>
          {name !== undefined && (
            <h3
              className={`text-lg hidden xl:inline pr-4 font-semibold ${
                current ? "font-extrabold" : "font-semibold"
              }`}
            >
              {name}
            </h3>
          )}
        </div>
      </a>
    </Link>
  );
};

export default LeftBar;
