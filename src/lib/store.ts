import { create } from "zustand";
import {
  EducationInfo,
  FormData,
  PersonalInfo,
  QualificationSkillsInfo,
  WorkExperienceInfo,
} from "./validators";

interface ApplicationAppState {
  step: number;
  formData: FormData;
  nextStep: () => void;
  prevStep: () => void;
  getTotalSteps: () => number;
  setPersonalInfo: (data: Partial<PersonalInfo>) => void;
  setQualificationSkillsInfo: (data: Partial<QualificationSkillsInfo>) => void;
  setWorkExperienceInfo: (data: Partial<WorkExperienceInfo>) => void;
  setEducationInfo: (data: Partial<EducationInfo>) => void;
  submitForm: () => void;
}
const useApplicationAppStore = create<ApplicationAppState>((set, get) => ({
  step: 1,
  formData: {
    personalInfo: {
      name: "",
      email: "",
      age: 18,
      sex: "",
      houseNumber: "",
      region: "",
      province: "",
      municipality: "",
      barangay: "",
      zipCode: "",
      contactNumber: "",
      profileImage: "",
    },