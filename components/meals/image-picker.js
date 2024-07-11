"use client";
import { useRef } from "react";

const ImagePicker = () => {
  const ImageInput = useRef();
  function HandlePick() {
    ImageInput.current.click();
  }
  return (
    <div>
      <div className="hidden">
        <label htmlFor="image">Pick an Image</label>
        <input
          type="file"
          name="image"
          id="image"
          accept="image/png, image/jpeg"
          ref={ImageInput}
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
