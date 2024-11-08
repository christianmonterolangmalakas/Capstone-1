import { z } from "zod";

export const personalInfoSchema = z.object({
  name: z.string().min(3, "Full name is Required"),
  email: z
    .string()
    .min(1, "Email address is Required")
    .email("Invalid email address"),
  age: z.coerce.number().min(18, "You must be at least 18 years old"),
  sex: z.string().min(1, { message: "Sex is required" }),
  houseNumber: z.string().min(1, { message: "House number is required" }),
  region: z.string().min(1, { message: "Region is required" }),
  province: z.string().min(1, { message: "Province is required" }),
  municipality: z.string().min(1, { message: "Municipality is required" }),
  barangay: z.string().min(1, { message: "Barangay is required" }),
  zipCode: z.string().min(1, { message: "Zip code is required" }),
  contactNumber: z.string().min(1, { message: "Contact number is required" }),
  profileImage: z.string().optional(),
});

