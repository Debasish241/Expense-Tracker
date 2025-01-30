import { firestore } from "@/config/firebase";
import { ResponseType, UserDataType } from "@/Types";
import { doc, updateDoc } from "firebase/firestore";

export const updateUser = async (
  uid: string,
  updatedData: UserDataType
): Promise<ResponseType> => {
  try {

    
    const useRef = doc(firestore, "users", uid);
    await updateDoc(useRef, updatedData);

    return { success: true, msg: "upated successfully" };
  } catch (error: any) {
    console.log(error);
    return { success: false, msg: error?.message };
  }
};
