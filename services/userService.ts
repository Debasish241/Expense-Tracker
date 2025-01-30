import { firestore } from "@/config/firebase";
import { ResponseType, UserDataType } from "@/Types";
import { doc, updateDoc } from "firebase/firestore";
import { uploadFileToCloudinary } from "./imageServices";

export const updateUser = async (
  uid: string,
  updatedData: UserDataType
): Promise<ResponseType> => {
  try {
    if (updatedData.image && updatedData?.image?.uri) {
      const imageUploadRes = await uploadFileToCloudinary(
        updatedData.image,
        "users"
      );
      if (!imageUploadRes.success) {
        return {
          success: false,
          msg: imageUploadRes.msg || "Failed to upload image",
        };
      }
      updatedData.image = imageUploadRes.data;
    }
    const useRef = doc(firestore, "users", uid);
    await updateDoc(useRef, updatedData);

    return { success: true, msg: "upated successfully" };
  } catch (error: any) {
    console.log(error);
    return { success: false, msg: error?.message };
  }
};
