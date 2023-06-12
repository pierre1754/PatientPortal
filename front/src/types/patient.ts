export type CreatePatient = {
  name: string;
  age: number;
  gender: string;
  adress: string;
  phone: string;
  bloodGroup: string;
  weight: number;
  height: number;
  doctor: string;
};

export type Patient = CreatePatient & { _id: string };
