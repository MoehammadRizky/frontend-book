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

  // createData: async ({ name, description, isbn, author, file }: Ibook) => {
  //   if (!name || !description || !isbn || !author || !file) {
  //     throw new Error("All field Kudu Diisi!");
  //   }
  //   const formData = new FormData();
  //   formData.append("name", name);
  //   formData.append("description", description);
  //   formData.append("isbn", isbn);
  //   formData.append("author", author);
  //   formData.append("file", file[0]);

  //   const res = await fetch("http://localhost:8000/books", {
  //     method: "POST",
  //     body: formData,
  //   });
  //   const data = (await res.json()) as Ibook;
  //   return data;
  // },

  // Code above is in not deleted intentionally
  // DO NOT DELETE

  updateData: async (id: string) => {
    const res = await fetch(`${API_URL}/books/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
    });

    const data = await res.json();
    return data;
  },
};
