import { ResponseType, WalletType } from "@/Types";

export const createOrUpdateWallet = async (
  walletData: Partial<WalletType>
): Promise<ResponseType> => {
  try {
    let walletToSave = { ...walletData };
    if(wallet)
  } catch (error: any) {
    console.log("error creating or updating wallet", error);
    return { success: false, msg: error.message };
  }
};
