import { useState } from "react";
import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";
import { useMutation, useQuery } from "react-query";
import { bookServices } from "./services/bookService";
import { useQueryClient } from "react-query";
import { toast } from "sonner";
import { Ibook } from "./types/entity";

const InitialBookVal: Ibook = {
  name: "",
  description: "",
  isbn: "",
  author: "",
  file: null,
};

export default function App() {
  const [book, setBook] = useState(InitialBookVal);

  const queryClient = useQueryClient();

  const query = useQuery({
    queryKey: ["books"],
    queryFn: bookServices.getData,
  });

  const { mutate: handleAddBook } = useMutation({
    mutationFn: () => bookServices.createData(book),
    onSuccess: () => {
      queryClient.invalidateQueries();
      toast.success("Buku berhasil ditambahkan!");
      setBook(InitialBookVal);
    },
    onError: (error: { message: string }) => {
      toast.error(error.message);
    },
  });
  return (
    <div className="flex justify-center my-20">
      <main className="w-[400px] space-y-4">
        <h1 className="text-xl font-bold">Books!</h1>

        <section className="space-y-2">
          <Input
            value={book.name}
            type="text"
            placeholder="Name"
            onChange={(e) => setBook({ ...book, name: e.target.value })}
          />
          <Input
            value={book.description}
            type="text"
            placeholder="description"
            onChange={(e) => setBook({ ...book, description: e.target.value })}
          />
          <Input
            value={book.isbn}
            type="text"
            placeholder="isbn"
            onChange={(e) => setBook({ ...book, isbn: e.target.value })}
          />
          <Input
            value={book.author}
            type="text"
            placeholder="author"
            onChange={(e) => setBook({ ...book, author: e.target.value })}
          />
          <Input
            type="file"
            onChange={(e) =>
              setBook({ ...book, file: e.target.files as FileList })
            }
          ></Input>
          <Button
            onClick={() => {
              handleAddBook();
            }}
          >
            Submit Books
          </Button>
        </section>
        {query.data?.length === 0 ? (
          <div>Wah, gaada Datanya nih... Tambahin yuk</div>
        ) : null}

        {query.isLoading ? <div>Loading... Please wait...</div> : null}

        {query.isError ? (
          <div>wah, Error Nih! ulangi yuk?</div>
        ) : (
          <section>
            {query.data?.map((book) => {
              return (
                <div key={book._id}>
                  <div>{book.name}</div>
                  <div>{book.description}</div>
                  <div>{book.isbn}</div>
                  <div>{book.author}</div>
                  <div>
                    <img src={`http://localhost:8000/${book.file}`} alt="" width={800} height={800}/>
                  </div>
                </div>
              );
            })}
          </section>
        )}
      </main>
    </div>
  );
}
