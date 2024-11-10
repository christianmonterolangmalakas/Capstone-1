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
    },qualificationSkillsInfo: {
      totalYearsExperience: 0,
      highestRoleAchieved: "",
      fieldOfExpertise: "",
      awards: "",
    },
    workExperienceInfo: {
      companyName: "",
      jobPosition: "",
      yearsWorkedInCompany: 0,
      certificate: "",
      logisticsCompany: "",
      logisticsYearsWorked: 0,
    },
    educationInfo: {
      degreeStatus: "",
      yearGraduated: 0,
    },
  },
  nextStep: () => set((state) => ({ step: state.step + 1 })),
  prevStep: () => set((state) => ({ step: state.step - 1 })),
  getTotalSteps: () => {
    return Object.keys(get().formData).length + 1;
  },
  setPersonalInfo: (data) =>
    set((state) => ({
      formData: {
        ...state.formData,
        personalInfo: {
          ...state.formData.personalInfo,
          ...data,
        },
      },
    })),