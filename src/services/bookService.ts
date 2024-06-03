import { Header } from "@/components/sharedui/header";
import { API_URL } from "@/config/apiUrl";
import { Ibook } from "@/types/entity";

export const bookServices = {
  getData: async (searchKey: string | null) => {
    const query = searchKey ? `?search=${searchKey}` : "";
    const res = await fetch(`${API_URL}/books${query}`);
    const data = (await res.json()) as Ibook[];
    return data;
  },
  getSingleData: async (id: string) => {
    const res = await fetch(`${API_URL}/books/${id}`);
    const data = (await res.json()) as Ibook;
    return data;
  },

  updateData: async (id: string) => {
    const res = await fetch(`${API_URL}/books/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
    });

    const data = await res.json();
    return data;
  },
};
