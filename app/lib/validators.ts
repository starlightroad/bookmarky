import { validate } from "deep-email-validator";

export const validateUserEmail = async (email: string, sender?: string) => {
  try {
    const result = await validate({
      email,
      sender,
      validateRegex: true,
      validateMx: true,
      validateTypo: true,
      validateDisposable: true,
      validateSMTP: false,
    });

    return result.valid;
  } catch (error) {
    console.error("Validation Error:", error);
    throw new Error("Unable to verify email.");
  }
};
