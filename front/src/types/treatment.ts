export type CreateTreatment = {
  treatment: string;
  date: Date;
  patient: string;
  doctor: string;
};

export type Treatment = CreateTreatment & { _id: string };
