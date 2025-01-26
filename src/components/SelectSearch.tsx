import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router";
import useDebounce from "../hooks/useDebounce";
import { fetchUserByQuery } from "../utils/fetch";

interface user {
  id: number;
  name: string;
  email: string;
  username: string;
}

const SelectSearch = () => {
  const [query, setQuery] = useState<string>("");
  const [options, setOptions] = useState<user[]>([]);
  const debouncedQuery = useDebounce(query, 1000);
  let navigate = useNavigate();

  const search = async (e: string) => {
    if (e == "") {
      setOptions([]);
      return;
    }

    const { data } = await fetchUserByQuery(debouncedQuery);
    setOptions(data.users);
  };

  useEffect(() => {
    if (debouncedQuery) {
      search(debouncedQuery);
    }

    return setOptions([]);
  }, [debouncedQuery]);

  return (
    <div className="w-60 relative ">
      <input
        type="text"
        className="w-full px-2 py-2 text-sm border-2 border-slate-400 focus:ring-0 focus:outline-none focus:border-slate-500 rounded-lg"
        placeholder="Cari pengguna lain"
        value={query}
        onChange={(e) => setQuery(e.target.value.trim())}
      />
      <div className="absolute bg-slate-50 mt-1 rounded-lg shadow-lg w-full h-auto z-[9999]">
        {options.length > 0 &&
          options.map((option: user) => (
            <div className=" w-full p-2 h-auto" key={option.id}>
              <button
                className="items-start flex flex-col"
                onClick={(e) => {
                  e.preventDefault();
                  navigate(`/profile/${option.id}/post`);
                  setQuery("");
                }}
              >
                <h1>{option.username ? option.username : option.email}</h1>
                <p className="text-xs text-gray-400">{option.email}</p>
              </button>
            </div>
          ))}
      </div>
    </div>
  );
};

export default SelectSearch;
