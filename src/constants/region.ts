//create a function that will return all the regions in array
export const getRegions = () => {
  return region;
};

interface Region {
  region_id: number;
  region_name: string;
  region_description: string;
  FIELD4: string;
}
const region: Region[] = [
  {
    region_id: 1,
    region_name: "NCR",
    region_description: "National Capital Region",
    FIELD4: "",
  },
  {
    region_id: 2,
    region_name: "CAR",
    region_description: "Cordillera Administrative Region",
    FIELD4: "",
  },
  {
    region_id: 3,
    region_name: "Region I",
    region_description: "Ilocos Region",
    FIELD4: "",
  },
  {
    region_id: 4,
    region_name: "Region II",
    region_description: "Cagayan Valley",
    FIELD4: "",
  },