export const MAX_UPLOAD_FILE_SIZE = 5242880; // 5MB
export const DEFAULT_MAX_FILES = 5;
export const DEFAULT_MIN_FILE = 1;
export const OPT_LENGTH = 6;

export enum FormFieldType {
  INPUT = "input", // added
  TEXTAREA = "textarea",
  PHONE_INPUT = "phoneInput", // added
  OTP_INPUT = "otpInput", // added
  SELECT = "select", // added
  RADIO = "radio", // added
  CHECKBOX = "checkbox", //added
  SWITCH = "switch",
  SLIDER = "slider",
  DATE_PICKER = "datePicker", // added
  DROP_ZONE = "dropZone", // added
  SKELETON = "skeleton",
  HIDDEN = "hidden",
  HONEY_POT = "honeyPot",
}
export enum UploaderType {
  MULTIPLE_ANY = "multiple_any",
  SINGLE_ANY = "single_any",
  SINGLE_DOCUMENT = "single_document",
  MULTIPLE_DOCUMENT = "multiple_documents",
  SINGLE_IMAGE = "single_image",
  MULTIPLE_IMAGE = "multiple_images",
}