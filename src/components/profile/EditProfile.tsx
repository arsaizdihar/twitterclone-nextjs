import React, { useState } from "react";
import Modal from "../main-ui/modals/Modal";

const EditProfile = () => {
  const [isEdit, setIsEdit] = useState(false);

  const close = () => setIsEdit(false);
  const open = () => setIsEdit(true);
  return (
    <>
      <Modal onClose={close} open={isEdit} noCorner>
        <div className="flex items-center p-2 border-b-2 border-gray_dark">
          <button onClick={close} className="p-2 w-10 flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <h3 className="font-bold text-xl mx-4 flex-grow">Edit Profile</h3>
          <button className="flex-shrink-0 py-2 px-4 bg-white rounded-full text-black font-semibold text-sm">
            Save
          </button>
        </div>
        <div className="h-10"></div>
      </Modal>
      <button
        className="outline-none border border-blue-500 dark:border-trueGray-600 text-blue-500 dark:text-current py-2 px-4 rounded-full font-bold hover:bg-blue-100 dark:hover:bg-trueGray-900"
        onClick={open}
      >
        Edit profile
      </button>
    </>
  );
};

export default EditProfile;
