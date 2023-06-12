export type CreatePatient = {
  name: string;
  age: number;
  gender: string;
  address: string;
  phone: string;
  bloodGroup: string;
  weight: number;
  height: number;
  doctor: string;
};

export type Patient = CreatePatient & { _id: string };
