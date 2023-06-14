export type CreateDoctor = {
  name: string;
  profession: string;
};

export type Doctor = CreateDoctor & { _id: string };
