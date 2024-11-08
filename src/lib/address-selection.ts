import { useState, useEffect } from "react";
import {
  getRegions,
  getProvinces,
  getMunicipalities,
  getBarangays,
} from "@/constants";

export const useAddressData = (
  selectedRegionName: string,
  selectedProvinceName: string,
  selectedMunicipalityName: string
) => {
  const [regionId, setRegionId] = useState<number | null>(null);
  const [provinceId, setProvinceId] = useState<number | null>(null);
  const [municipalityId, setMunicipalityId] = useState<number | null>(null);

  const [regionOptions, setRegions] = useState<string[]>([]);
  const [provinceOptions, setProvinces] = useState<string[]>([]);
  const [municipalityOptions, setMunicipalities] = useState<string[]>([]);
  const [barangayOptions, setBarangays] = useState<string[]>([]);