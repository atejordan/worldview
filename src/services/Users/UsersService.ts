import { api } from "../ServiceHelper";

export const fetchUserData = async () => {
  return await api.get("/all/");
};

export const fetchUserData1 = async (id: any) => {
  return await api.get("/alpha/" + id);
};

export const search = async (nom: any) => {
  return await api.get("/name/" + nom);
};
