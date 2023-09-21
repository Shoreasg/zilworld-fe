"use client";
import { useEffect, useRef, useState } from "react";
import { ProjectWithFilterProps } from "../../../../types";
import MobileSearchBar from "./MobileSearchBar";
import MobilePopularFilter from "./MobilePopularFilter";
import MobileProjectsCard from "./MobileProjectsCard";
import MobileStickySearchBar from "./MobileStickySearchBar";

export default function MobileProjectsWithFilter({
  categories,
  numProjects,
  projectsData,
  projectsRef,
}: ProjectWithFilterProps) {
  const [selected, setSelected] = useState<string>("");
  const [search, setSearch] = useState("");
  const [searchBarReachTop, setSearchBarReachTop] = useState(false);
  const [isClickSearch, setIsClickSearch] = useState(false);
  const [isClickFilter, setIsClickFilter] = useState(false);
  const isClickSearchRef = useRef<HTMLInputElement>(null);
  const isClickedFilterRef = useRef(null);

  const handleSearchBarScroll = () => {
    if (projectsRef.current) {
      const container = projectsRef.current;
      const containerRect = container.getBoundingClientRect();
      if (containerRect.top <= 500) {
        setSearchBarReachTop(true);
      } else {
        setSearch("")
        setSearchBarReachTop(false);
      }
    }
  };

  useEffect(() => {
    const container = projectsRef.current;
    if (container) {
      window.addEventListener("scroll", handleSearchBarScroll);
      return () => {
        container.removeEventListener("scroll", handleSearchBarScroll);
      };
    }
  }, []);


  return (
    <div className="flex flex-col">
      <div
        className={`${
          searchBarReachTop === true
            ? " sticky top-0 z-30 w-full flex flex-col h-20 p-4 justify-between items-center flex-shrink-0 bg-[#F5F5F5]"
            : ""
        }`}
      >
        <div
          ref={projectsRef}
          className={`${
            searchBarReachTop === true
              ? `flex justify-end items-start ${
                  isClickSearch ? "" : "pl-4"
                } gap-4 self-stretch`
              : ""
          }`}
        >
          {searchBarReachTop === true ? (
            <MobileStickySearchBar
              categories={categories}
              numProjects={numProjects}
              setSelected={setSelected}
              selected={selected}
              setSearch={setSearch}
              isClickSearch={isClickSearch}
              setIsClickSearch={setIsClickSearch}
              isClickedFilter= {isClickFilter}
              setIsClickedFilter = {setIsClickFilter}
              isClickSearchRef={isClickSearchRef}
              isClickedFilterRef={isClickedFilterRef}
            />
          ) : (
            <MobileSearchBar
              categories={categories}
              numProjects={numProjects}
              setSelected={setSelected}
              selected={selected}
              setSearch={setSearch}
            />
          )}
        </div>
      </div>
      <div className="border-t-[1px] border-[#D5DEE0] mx-4" />
      <MobilePopularFilter categories={categories} setSelected={setSelected} />
      <div className="flex w-full flex-col p-8 items-start gap-6">
        <MobileProjectsCard
          projectsData={projectsData}
          selected={selected}
          setSelected={setSelected}
          search={search}
        />
      </div>
    </div>
  );
}
