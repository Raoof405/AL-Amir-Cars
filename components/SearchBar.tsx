"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { SearchManufacturer } from ".";
import Image from "next/image";
import { Router } from "next/router";

const SearchButton = ({ otherClasess }: { otherClasess: string }) => (
  <button className={`-ml-3 z-10 ${otherClasess}`} type="submit">
    <Image
      src="magnifying-glass.svg"
      alt="magnifying-glass"
      width={40}
      height={40}
      className="object-contain"
    />
  </button>
);

const SearchBar = () => {
  const [Manufacturer, setManufacturer] = useState("");
  const [model, setmodel] = useState("");
  const router = useRouter();

  const handlesearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (Manufacturer === "" && model === "") {
      return alert("Please fill in the search Bar");
    }

    UpdateSearchParams(
      model.toLocaleLowerCase(),
      Manufacturer.toLocaleLowerCase()
    );
  };

  const UpdateSearchParams = (model: string, Manufacturer: string) => {
    const SearchParams = new URLSearchParams(window.location.search);

    if (model) {
      SearchParams.set("model", model);
    } else {
      SearchParams.delete("model");
    }
    if (Manufacturer) {
      SearchParams.set("Manufacturer", Manufacturer);
    } else {
      SearchParams.delete("Manufacturer");
    }

    const newPathname = `${
      window.location.pathname
    }?${SearchParams.toString()}`;

    router.push(newPathname);
  };

  return (
    <form action="" className="searchbar" onSubmit={handlesearch}>
      <div className="searchbar__item">
        <SearchManufacturer
          setManufacturer={setManufacturer}
          Manufacturer={Manufacturer}
        />
        <SearchButton otherClasess="sm:hidden" />
      </div>
      <div className="searchbar__item">
        <Image
          src="/model-icon.png"
          width={25}
          height={25}
          className="absolute w-[20px] h-[20px] ml-4"
          alt={"model-icon"}
        />
        <input
          type="text"
          name="model"
          value={model}
          onChange={(e) => setmodel(e.target.value)}
          placeholder="Passat"
          className="searchbar__input"
        />
        <SearchButton otherClasess="sm:hidden" />
      </div>
      <SearchButton otherClasess="max-sm:hidden" />
    </form>
  );
};

export default SearchBar;
