import { Link, useNavigate } from "react-router-dom";
import { Button } from "../ui/button";
import { useAuth } from "@/hooks/useAuth";
import Avatar from "boring-avatars";
import { Input } from "../ui/input";
import React, { useState } from "react";

export const Header = () => {
  const navigate = useNavigate();
  const [searchKey, setSearchKey] = useState("");
  const { user } = useAuth({});

  function handleSearch(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") {
      navigate(`/?search=${searchKey}`);
    }
  }

  return (
    <header className="flex justify-between items-center p-4 border-b">
      <div className="flex gap-2 items-center ">
        <Link to="/">
          <div className="font-semibold text-lg">MyBook!</div>
        </Link>

        <Input
          placeholder="Search Book, description or author!"
          onChange={(e) => setSearchKey(e.target.value)}
          onKeyUp={handleSearch}
          className="border-2 border-slate-950 w-[300px]"
        ></Input>
      </div>

      {user ? (
        <div className="flex items-center gap-2">
          <div>Welcome back, {user.name}</div>{" "}
          <Avatar
            name={user.name}
            size={35}
            variant="beam"
            colors={["#92A1C6", "#146A7C", "#F0AB3D", "#C271B4", "#C20D90"]}
          />
        </div>
      ) : (
        <div className="flex items-center gap-4">
          <Link to={"/login"}>
            {" "}
            <div>Login</div>
          </Link>
          <Link to={"/register"}>
            {" "}
            <Button>Get started</Button>
          </Link>
        </div>
      )}
    </header>
  );
};
