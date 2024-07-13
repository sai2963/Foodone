"use client";
import Image from "next/image";
import { useRef, useState } from "react";

const ImagePicker = () => {
  const [pickedImage, setPickedImage] = useState();
  const ImageInput = useRef();

  function HandlePick() {
    ImageInput.current.click();
  }

  function HandleImageChange(event) {
    const file = event.target.files[0];
    if (!file) {
      return;
    }
    const filereader = new FileReader();

    filereader.onload = () => {
      setPickedImage(filereader.result);
    };
    filereader.readAsDataURL(file);
  }

  return (
    <div className="flex flex-col items-center space-y-4">
      <div className="flex flex-col items-center">
        <div className="hidden">
          <label htmlFor="image">Pick an Image</label>
        </div>

        <div className="flex justify-center items-center w-full">
          {!pickedImage && (
            <p className="text-gray-500">No Image Picked Yet</p>
          )}
          {pickedImage && (
            <div className="relative w-full max-w-xs mx-auto">
              <Image
                src={pickedImage}
                alt="The Image Selected by the user"
                width={500}
                height={500}
                className="rounded-lg shadow-lg border-2 border-gray-200"
              />
              
            </div>
          )}
        </div>
        <input
          type="file"
          name="image"
          id="image"
          accept="image/png, image/jpeg"
          required
          ref={ImageInput}
          onChange={HandleImageChange}
          style={{ display: 'none' }} // Hides the file input but keeps it functional
        />
      </div>

      <button
        type="button"
        onClick={HandlePick}
        className="px-6 py-2 bg-gradient-to-r from-[#f9572a] to-[#ff9b05] text-white rounded-lg shadow-md font-semibold text-lg hover:from-[#fd4715] hover:to-[#f9b241] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#ff9b05] transition duration-200"
      >
        Pick an Image
      </button>
    </div>
  );
};

export default ImagePicker;
