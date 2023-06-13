export type CreateTreatment = {
  treatment: string;
  patient: string;
  doctor: string;
};

export type Treatment = CreateTreatment & { _id: string; date: Date };
