import {
  CurrencyDollarIcon,
  DocumentTextIcon,
  GlobeAltIcon,
  InformationCircleIcon,
  ShareIcon,
} from "@heroicons/react/24/outline";
import {
  ProjectDetailsCardProps,
  projectDetailsActionType,
  projectDetailsStateType,
} from "../../types";
import { useReducer, useState } from "react";
import { getCharLength, trimDescription } from "../functions";
import Link from "next/link";
import Image from "next/image";
import numWords from "num-words";
import ProjectUpdates from "./ProjectsUpdates";

export default function ProjectDetails({
  projectData,
}: Readonly<ProjectDetailsCardProps>) {
  const [copied, setCopied] = useState(false);
  const [onHoverCopy, setOnHoverCopy] = useState(false);
  const [onHoverInactive, setOnHoverInactive] = useState(false);
  const [showMore, setShowMore] = useState(false);
  const initialState = {
    onClickWeb: false,
    onClickToken: false,
    onClickViewBlock: false,
    onClickWhitePaper: false,
    onClickGithub: false,
    onClickTwitter: false,
    onClickDiscord: false,
    onClickLinkedin: false,
    onClickTelegram: false,
    onClickMedium: false,
    onClickReddit: false,
    onClickYoutube: false,
    onClickFacebook: false,
  };

  const reducer = (
    state: projectDetailsStateType,
    action: projectDetailsActionType
  ) => {
    switch (action.type) {
      case "TOGGLE":
        return {
          ...initialState,
          [action.payload]: !state[action.payload],
        };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const handleShowMore = () => {
    setShowMore(!showMore);
  };

  const handleCopyUrl = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setOnHoverCopy(false);
      setTimeout(() => setCopied(false), 2000); // Display copied message for 2 seconds
    } catch (error) {
      console.error("Failed to copy URL:", error);
    }
  };

  return (
    <div className=" inline-flex flex-col items-start w-full">
      <div className="flex pt-4 px-6 flex-col items-start gap-6 w-full">
        <div className="flex flex-row w-full justify-between items-start">
          <div className="flex flex-col gap-3 items-start">
            <div className="flex flex-row items-start gap-3">
              <div className="text-center font-lato text-3xl leading-9 tracking-[1px] font-extrabold">
                {projectData.name}
              </div>
              {projectData.isBuilding ? (
                <div className="flex h-4 px-2 justify-center items-center gap-1 rounded-[32px] bg-[#ffc2243d] text-center leading-tight font-plusjakartasans text-[10px] font-normal ">
                  Building
                </div>
              ) : (
                <>
                  {" "}
                  {projectData.isActive ? (
                    <div className="flex h-4 px-2 justify-center items-center gap-1 rounded-[32px] bg-[#3B984462] text-center leading-tight font-plusjakartasans text-[10px] font-normal ">
                      Active
                    </div>
                  ) : (
                    <div className="flex relative h-4 px-2 justify-center items-center gap-1 rounded-[32px] bg-[#b5202062] text-center leading-tight font-plusjakartasans text-[10px] font-normal ">
                      Inactive
                      <InformationCircleIcon
                        className="h-[10px] w-[10px]"
                        onMouseEnter={() => setOnHoverInactive(true)}
                        onMouseLeave={() => setOnHoverInactive(false)}
                      />
                      {onHoverInactive && (
                        <div className="tooltip absolute top-[26px] left-11 flex flex-col py-4 px-6 gap-2 rounded-lg bg-gray-200 shadow-md w-[480px] font-plusjakartasans text-xs font-normal leading-[18px] -20">
                          <p>
                            Unfortunately, this project has been labeled as
                            inactive
                          </p>
                          <p>due to a lack of updates or being abandoned.</p>
                        </div>
                      )}
                    </div>
                  )}
                </>
              )}
            </div>
            <div className="flex items-start gap-2">
              {projectData.category.map((name) => {
                return (
                  <div
                    key={name}
                    className="flex h-5 py-[6px] px-2 justify-center items-center gap-1 rounded bg-[#D5DEE0] ${plusJakartaSans.className} text-[10px] leadiing-[15px] font-normal"
                  >
                    {name}
                  </div>
                );
              })}
            </div>
            <div className=" flex flex-row items-center pt-6 pb-6">
              {getCharLength(projectData.description) > 265 ? (
                <p>
                  {!showMore ? (
                    <>
                      {trimDescription(projectData.description)}
                      {"..."}
                      <button onClick={handleShowMore} className=" font-bold">
                        Read More
                      </button>
                    </>
                  ) : (
                    <>
                      {projectData.description}
                      <button onClick={handleShowMore} className=" font-bold">
                        Read Less
                      </button>
                    </>
                  )}
                </p>
              ) : (
                <>{projectData.description}</>
              )}
            </div>
          </div>
          <button
            className="flex px-4 py-2 items-center gap-2 rounded-lg bg-[#E6EAEB] relative"
            onClick={handleCopyUrl}
            onMouseEnter={() => setOnHoverCopy(true)}
            onMouseLeave={() => setOnHoverCopy(false)}
          >
            <ShareIcon width={20} height={20} />
            {onHoverCopy && (
              <div className="tooltip absolute top-[46px] right-4 inline-flex px-3 py-1 gap-2 rounded-lg bg-gray-200 shadow-md w-fit font-plusjakartasans text-xs font-normal leading-[18px] whitespace-nowrap">
                Click to copy link
              </div>
            )}
            {copied && (
              <div className="tooltip absolute top-[46px] right-4  inline-flex px-3 py-1 gap-2 rounded-lg bg-[#3B98444C] shadow-md w-fit font-plusjakartasans text-xs font-normal leading-[18px] whitespace-nowrap">
                Copied to Clipboard
              </div>
            )}
          </button>
        </div>
        <div className="flex flex-col items-start gap-4 mb-2">
          <div className="flex py-2 items-start content-start gap-x-14 gap-y-8 self-stretch flex-wrap">
            <div className="flex flex-col items-start gap-y-2">
              <p className=" font-lato text-sm font-extrabold leading-5 tracking-[1px]">
                Offical Links
              </p>
              <div className=" flex items-start gap-x-3">
                {projectData.website.length >= 1 ? (
                  <>
                    {projectData.website.length > 1 ? (
                      <button className="relative inline-block">
                        <GlobeAltIcon
                          width={20}
                          height={20}
                          onClick={() =>
                            dispatch({ type: "TOGGLE", payload: "onClickWeb" })
                          }
                          className={`${
                            state.onClickWeb
                              ? `text-[#097A8E]`
                              : " hover:text-[#097A8E]"
                          }`}
                        />
                        {state.onClickWeb && (
                          <div
                            className="absolute bottom-[30px]"
                            onMouseLeave={() =>
                              dispatch({
                                type: "TOGGLE",
                                payload: "onClickWeb",
                              })
                            }
                          >
                            <div className="flex px-3 py-2 flex-col items-start gap-2 rounded-lg bg-[#F5F5F5] shadow-md">
                              {projectData.website.map((project, index) => {
                                return (
                                  <div
                                    className="flex flex-row justify-center items-center hover:text-[#097A8E]"
                                    key={index}
                                  >
                                    <GlobeAltIcon
                                      width={20}
                                      height={20}
                                      className="mr-1"
                                    />
                                    <Link
                                      href={`${project.websiteURL}`}
                                      target="_blank"
                                      className=" text-[#06242E] font-plusjakartasans text-xs font-normal leading-[18px] whitespace-nowrap hover:text-[#097A8E]"
                                    >
                                      Website{" "}
                                      {numWords(index + 1)
                                        .charAt(0)
                                        .toUpperCase() +
                                        numWords(index + 1).slice(1)}
                                    </Link>
                                  </div>
                                );
                              })}
                            </div>
                          </div>
                        )}
                      </button>
                    ) : (
                      <Link
                        href={`${projectData.website[0].websiteURL}`}
                        target="_blank"
                      >
                        <GlobeAltIcon
                          width={20}
                          height={20}
                          className=" hover:text-[#097A8E]"
                        />
                      </Link>
                    )}
                  </>
                ) : (
                  ""
                )}
                {projectData.tokens.length >= 1 ? (
                  <>
                    {projectData.tokens.length > 1 ? (
                      <button className="relative inline-block">
                        <CurrencyDollarIcon
                          width={20}
                          height={20}
                          onClick={() =>
                            dispatch({
                              type: "TOGGLE",
                              payload: "onClickToken",
                            })
                          }
                          className={`${
                            state.onClickToken
                              ? `text-[#097A8E]`
                              : " hover:text-[#097A8E]"
                          }`}
                        />
                        {state.onClickToken && (
                          <div
                            className="absolute bottom-[30px]"
                            onMouseLeave={() =>
                              dispatch({
                                type: "TOGGLE",
                                payload: "onClickToken",
                              })
                            }
                          >
                            <div className="flex px-3 py-2 flex-col items-start gap-2 rounded-lg bg-[#F5F5F5] shadow-md">
                              {projectData.tokens.map((project, index) => {
                                return (
                                  <div
                                    className="flex flex-row justify-center items-center"
                                    key={index}
                                  >
                                    <Image
                                      height={12}
                                      width={12}
                                      src={project.tokenLogo}
                                      alt={project.tokenAddress}
                                      className="mr-1"
                                    />
                                    <Link
                                      href={`${project.zilworldURL}`}
                                      target="_blank"
                                      className=" text-[#06242E] font-plusjakartasans text-xs font-normal leading-[18px] whitespace-nowrap hover:text-[#097A8E]"
                                    >
                                      Token{" "}
                                      {numWords(index + 1)
                                        .charAt(0)
                                        .toUpperCase() +
                                        numWords(index + 1).slice(1)}
                                    </Link>
                                  </div>
                                );
                              })}
                            </div>
                          </div>
                        )}
                      </button>
                    ) : (
                      <Link
                        href={`${projectData.tokens[0].zilworldURL}`}
                        target="_blank"
                      >
                        <CurrencyDollarIcon
                          width={20}
                          height={20}
                          className=" hover:text-[#097A8E]"
                        />
                      </Link>
                    )}
                  </>
                ) : (
                  ""
                )}
                {projectData.viewblock.length >= 1 ? (
                  <>
                    {projectData.viewblock.length > 1 ? (
                      <button className="relative inline-block">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          onClick={() =>
                            dispatch({
                              type: "TOGGLE",
                              payload: "onClickViewBlock",
                            })
                          }
                          className={`${
                            state.onClickViewBlock
                              ? `text-[#097A8E]`
                              : " hover:text-[#097A8E]"
                          }`}
                        >
                          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                          <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                          <line x1="12" y1="22.08" x2="12" y2="12"></line>
                        </svg>
                        {state.onClickViewBlock && (
                          <div
                            className="absolute bottom-[30px]"
                            onMouseLeave={() =>
                              dispatch({
                                type: "TOGGLE",
                                payload: "onClickViewBlock",
                              })
                            }
                          >
                            <div className="flex px-3 py-2 flex-col items-start gap-2 rounded-lg bg-[#F5F5F5] shadow-md">
                              {projectData.viewblock.map((project, index) => {
                                return (
                                  <div
                                    className="flex flex-row justify-center items-center hover:text-[#097A8E]"
                                    key={index}
                                  >
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="12"
                                      height="12"
                                      viewBox="0 0 24 24"
                                      fill="none"
                                      stroke="currentColor"
                                      stroke-width="1.5"
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                      className="mr-1"
                                    >
                                      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                                      <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                                      <line
                                        x1="12"
                                        y1="22.08"
                                        x2="12"
                                        y2="12"
                                      ></line>
                                    </svg>
                                    <Link
                                      href={`${project.viewblockURL}`}
                                      target="_blank"
                                      className=" text-[#06242E] font-plusjakartasans text-xs font-normal leading-[18px] whitespace-nowrap hover:text-[#097A8E]"
                                    >
                                      ViewBlock{" "}
                                      {numWords(index + 1)
                                        .charAt(0)
                                        .toUpperCase() +
                                        numWords(index + 1).slice(1)}
                                    </Link>
                                  </div>
                                );
                              })}
                            </div>
                          </div>
                        )}
                      </button>
                    ) : (
                      <Link
                        href={`${projectData.viewblock[0].viewblockURL}`}
                        target="_blank"
                        className="hover:text-[#097A8E]"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                          <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                          <line x1="12" y1="22.08" x2="12" y2="12"></line>
                        </svg>
                      </Link>
                    )}
                  </>
                ) : (
                  ""
                )}
                {projectData.whitepaper.length >= 1 ? (
                  <>
                    {projectData.whitepaper.length > 1 ? (
                      <button className="relative inline-block">
                        <DocumentTextIcon
                          width={20}
                          height={20}
                          onClick={() =>
                            dispatch({
                              type: "TOGGLE",
                              payload: "onClickWhitePaper",
                            })
                          }
                          className={`${
                            state.onClickWhitePaper
                              ? `text-[#097A8E]`
                              : " hover:text-[#097A8E]"
                          }`}
                        />
                        {state.onClickWhitePaper && (
                          <div
                            className="absolute bottom-[30px]"
                            onMouseLeave={() =>
                              dispatch({
                                type: "TOGGLE",
                                payload: "onClickWhitePaper",
                              })
                            }
                          >
                            <div className="flex px-3 py-2 flex-col items-start gap-2 rounded-lg bg-[#F5F5F5] shadow-md">
                              {projectData.whitepaper.map((project, index) => {
                                return (
                                  <div
                                    className="flex flex-row justify-center items-center hover:text-[#097A8E]"
                                    key={index}
                                  >
                                    <DocumentTextIcon
                                      width={12}
                                      height={12}
                                      className="mr-1"
                                    />
                                    <Link
                                      href={`${project.whitepaperURL}`}
                                      target="_blank"
                                      className=" text-[#06242E] font-plusjakartasans text-xs font-normal leading-[18px] whitespace-nowrap hover:text-[#097A8E]"
                                    >
                                      Whitepaper{" "}
                                      {numWords(index + 1)
                                        .charAt(0)
                                        .toUpperCase() +
                                        numWords(index + 1).slice(1)}
                                    </Link>
                                  </div>
                                );
                              })}
                            </div>
                          </div>
                        )}
                      </button>
                    ) : (
                      <Link
                        href={`${projectData.whitepaper[0].whitepaperURL}`}
                        target="_blank"
                      >
                        <DocumentTextIcon
                          width={20}
                          height={20}
                          className=" hover:text-[#097A8E]"
                        />
                      </Link>
                    )}
                  </>
                ) : (
                  ""
                )}
                {projectData.github.length >= 1 ? (
                  <>
                    {projectData.github.length > 1 ? (
                      <button className="relative inline-block">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          onClick={() =>
                            dispatch({
                              type: "TOGGLE",
                              payload: "onClickGithub",
                            })
                          }
                          className="hover:text-[#097A8E]"
                        >
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                        {state.onClickGithub && (
                          <div
                            className="absolute bottom-[30px]"
                            onMouseLeave={() =>
                              dispatch({
                                type: "TOGGLE",
                                payload: "onClickGithub",
                              })
                            }
                          >
                            <div className="flex px-3 py-2 flex-col items-start gap-2 rounded-lg bg-[#F5F5F5] shadow-md">
                              {projectData.github.map((project, index) => {
                                return (
                                  <div
                                    className="flex flex-row justify-center items-center hover:text-[#097A8E]"
                                    key={index}
                                  >
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="12"
                                      height="12"
                                      viewBox="0 0 24 24"
                                      fill="currentColor"
                                      className="mr-1"
                                    >
                                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                    </svg>
                                    <Link
                                      href={`${project.githubURL}`}
                                      target="_blank"
                                      className=" text-[#06242E] font-plusjakartasans text-xs font-normal leading-[18px] whitespace-nowrap hover:text-[#097A8E]"
                                    >
                                      Github{" "}
                                      {numWords(index + 1)
                                        .charAt(0)
                                        .toUpperCase() +
                                        numWords(index + 1).slice(1)}
                                    </Link>
                                  </div>
                                );
                              })}
                            </div>
                          </div>
                        )}
                      </button>
                    ) : (
                      <Link
                        href={`${projectData.github[0].githubURL}`}
                        target="_blank"
                        className=" hover:text-[#097A8E]"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                      </Link>
                    )}
                  </>
                ) : (
                  ""
                )}
              </div>
            </div>
            <div className="flex flex-col items-start gap-y-2">
              <p className=" font-lato text-sm font-extrabold leading-5 tracking-[1px]">
                Socials
              </p>
              <div className=" flex items-start gap-x-3">
                {projectData.twitter.length >= 1 ? (
                  <>
                    {projectData.twitter.length > 1 ? (
                      <button className="relative inline-block">
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 16"
                          stroke="currentColor"
                          strokeWidth={0.5}
                          xmlns="http://www.w3.org/2000/svg"
                          className="hover:text-[#097A8E]"
                          onClick={() =>
                            dispatch({
                              type: "TOGGLE",
                              payload: "onClickTwitter",
                            })
                          }
                        >
                          <path
                            id="Vector"
                            d="M9.39528 6.85212L14.8557 0.504883H13.5617L8.82048 6.0161L5.03366 0.504883H0.666016L6.39243 8.83883L0.666016 15.4949H1.96002L6.9669 9.67485L10.9661 15.4949H15.3337L9.39496 6.85212H9.39528ZM7.62296 8.91225L7.04275 8.08238L2.42627 1.47899H4.41379L8.13935 6.80813L8.71955 7.63801L13.5623 14.5651H11.5748L7.62296 8.91257V8.91225Z"
                            fill="#3B4242"
                          />
                        </svg>
                        {state.onClickTwitter && (
                          <div
                            className="absolute bottom-[30px]"
                            onMouseLeave={() =>
                              dispatch({
                                type: "TOGGLE",
                                payload: "onClickTwitter",
                              })
                            }
                          >
                            <div className="flex px-3 py-2 flex-col items-start gap-2 rounded-lg bg-[#F5F5F5] shadow-md">
                              {projectData.twitter.map((project, index) => {
                                return (
                                  <div
                                    className="flex flex-row justify-center items-center hover:text-[#097A8E]"
                                    key={index}
                                  >
                                    <svg
                                      width="12"
                                      height="12"
                                      viewBox="0 0 20 16"
                                      stroke="currentColor"
                                      strokeWidth={0.5}
                                      xmlns="http://www.w3.org/2000/svg"
                                      className="mr-1"
                                    >
                                      <path
                                        id="Vector"
                                        d="M9.39528 6.85212L14.8557 0.504883H13.5617L8.82048 6.0161L5.03366 0.504883H0.666016L6.39243 8.83883L0.666016 15.4949H1.96002L6.9669 9.67485L10.9661 15.4949H15.3337L9.39496 6.85212H9.39528ZM7.62296 8.91225L7.04275 8.08238L2.42627 1.47899H4.41379L8.13935 6.80813L8.71955 7.63801L13.5623 14.5651H11.5748L7.62296 8.91257V8.91225Z"
                                        fill="#3B4242"
                                      />
                                    </svg>
                                    <Link
                                      href={`${project.twitterURL}`}
                                      target="_blank"
                                      className=" text-[#06242E] font-plusjakartasans text-xs font-normal leading-[18px] whitespace-nowrap hover:text-[#097A8E]"
                                    >
                                      Twitter{" "}
                                      {numWords(index + 1)
                                        .charAt(0)
                                        .toUpperCase() +
                                        numWords(index + 1).slice(1)}
                                    </Link>
                                  </div>
                                );
                              })}
                            </div>
                          </div>
                        )}
                      </button>
                    ) : (
                      <Link
                        href={`${projectData.twitter[0].twitterURL}`}
                        target="_blank"
                        className=" hover:text-[#097A8E]"
                      >
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 16"
                          stroke="currentColor"
                          strokeWidth={0.5}
                          className="hover:text-[#097A8E]"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            id="Vector"
                            d="M9.39528 6.85212L14.8557 0.504883H13.5617L8.82048 6.0161L5.03366 0.504883H0.666016L6.39243 8.83883L0.666016 15.4949H1.96002L6.9669 9.67485L10.9661 15.4949H15.3337L9.39496 6.85212H9.39528ZM7.62296 8.91225L7.04275 8.08238L2.42627 1.47899H4.41379L8.13935 6.80813L8.71955 7.63801L13.5623 14.5651H11.5748L7.62296 8.91257V8.91225Z"
                            fill="#3B4242"
                          />
                        </svg>
                      </Link>
                    )}
                  </>
                ) : (
                  ""
                )}
                {projectData.discord.length >= 1 ? (
                  <>
                    {projectData.discord.length > 1 ? (
                      <button className="relative inline-block">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          fill="currentColor"
                          className="bi bi-discord hover:text-[#097A8E]"
                          viewBox="0 0 16 16"
                          onClick={() =>
                            dispatch({
                              type: "TOGGLE",
                              payload: "onClickDiscord",
                            })
                          }
                        >
                          <path d="M13.545 2.907a13.2 13.2 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.2 12.2 0 0 0-3.658 0 8 8 0 0 0-.412-.833.05.05 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.04.04 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032q.003.022.021.037a13.3 13.3 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019q.463-.63.818-1.329a.05.05 0 0 0-.01-.059l-.018-.011a9 9 0 0 1-1.248-.595.05.05 0 0 1-.02-.066l.015-.019q.127-.095.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.05.05 0 0 1 .053.007q.121.1.248.195a.05.05 0 0 1-.004.085 8 8 0 0 1-1.249.594.05.05 0 0 0-.03.03.05.05 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.2 13.2 0 0 0 4.001-2.02.05.05 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.03.03 0 0 0-.02-.019m-8.198 7.307c-.789 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612m5.316 0c-.788 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612" />
                        </svg>
                        {state.onClickDiscord && (
                          <div
                            className="absolute bottom-[30px]"
                            onMouseLeave={() =>
                              dispatch({
                                type: "TOGGLE",
                                payload: "onClickDiscord",
                              })
                            }
                          >
                            <div className="flex px-3 py-2 flex-col items-start gap-2 rounded-lg bg-[#F5F5F5] shadow-md">
                              {projectData.discord.map((project, index) => {
                                return (
                                  <div
                                    className="flex flex-row justify-center items-center hover:text-[#097A8E]"
                                    key={index}
                                  >
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="12"
                                      height="12"
                                      viewBox="0 0 16 16"
                                      fill="currentColor"
                                      className="bi bi-discord hover:text-[#097A8E] mr-1"
                                    >
                                      <path d="M13.545 2.907a13.2 13.2 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.2 12.2 0 0 0-3.658 0 8 8 0 0 0-.412-.833.05.05 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.04.04 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032q.003.022.021.037a13.3 13.3 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019q.463-.63.818-1.329a.05.05 0 0 0-.01-.059l-.018-.011a9 9 0 0 1-1.248-.595.05.05 0 0 1-.02-.066l.015-.019q.127-.095.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.05.05 0 0 1 .053.007q.121.1.248.195a.05.05 0 0 1-.004.085 8 8 0 0 1-1.249.594.05.05 0 0 0-.03.03.05.05 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.2 13.2 0 0 0 4.001-2.02.05.05 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.03.03 0 0 0-.02-.019m-8.198 7.307c-.789 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612m5.316 0c-.788 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612" />
                                    </svg>

                                    <Link
                                      href={`${project.discordURL}`}
                                      target="_blank"
                                      className=" text-[#06242E] font-plusjakartasans text-xs font-normal leading-[18px] whitespace-nowrap hover:text-[#097A8E]"
                                    >
                                      Discord{" "}
                                      {numWords(index + 1)
                                        .charAt(0)
                                        .toUpperCase() +
                                        numWords(index + 1).slice(1)}
                                    </Link>
                                  </div>
                                );
                              })}
                            </div>
                          </div>
                        )}
                      </button>
                    ) : (
                      <Link
                        href={`${projectData.discord[0].discordURL}`}
                        target="_blank"
                        className=" hover:text-[#097A8E]"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          fill="currentColor"
                          className="bi bi-discord hover:text-[#097A8E]"
                          viewBox="0 0 16 16"
                        >
                          <path d="M13.545 2.907a13.2 13.2 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.2 12.2 0 0 0-3.658 0 8 8 0 0 0-.412-.833.05.05 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.04.04 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032q.003.022.021.037a13.3 13.3 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019q.463-.63.818-1.329a.05.05 0 0 0-.01-.059l-.018-.011a9 9 0 0 1-1.248-.595.05.05 0 0 1-.02-.066l.015-.019q.127-.095.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.05.05 0 0 1 .053.007q.121.1.248.195a.05.05 0 0 1-.004.085 8 8 0 0 1-1.249.594.05.05 0 0 0-.03.03.05.05 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.2 13.2 0 0 0 4.001-2.02.05.05 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.03.03 0 0 0-.02-.019m-8.198 7.307c-.789 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612m5.316 0c-.788 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612" />
                        </svg>
                      </Link>
                    )}
                  </>
                ) : (
                  ""
                )}
                {projectData.telegram.length >= 1 ? (
                  <>
                    {projectData.telegram.length > 1 ? (
                      <button className="relative inline-block">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 32 32"
                          fill="currentColor"
                          className=" hover:text-[#097A8E]"
                          onClick={() =>
                            dispatch({
                              type: "TOGGLE",
                              payload: "onClickTelegram",
                            })
                          }
                        >
                          {" "}
                          <path d="M29.919 6.163l-4.225 19.925c-0.319 1.406-1.15 1.756-2.331 1.094l-6.438-4.744-3.106 2.988c-0.344 0.344-0.631 0.631-1.294 0.631l0.463-6.556 11.931-10.781c0.519-0.462-0.113-0.719-0.806-0.256l-14.75 9.288-6.35-1.988c-1.381-0.431-1.406-1.381 0.288-2.044l24.837-9.569c1.15-0.431 2.156 0.256 1.781 2.013z" />{" "}
                        </svg>
                        {state.onClickTelegram && (
                          <div
                            className="absolute bottom-[30px]"
                            onMouseLeave={() =>
                              dispatch({
                                type: "TOGGLE",
                                payload: "onClickTelegram",
                              })
                            }
                          >
                            <div className="flex px-3 py-2 flex-col items-start gap-2 rounded-lg bg-[#F5F5F5] shadow-md">
                              {projectData.telegram.map((project, index) => {
                                return (
                                  <div
                                    className="flex flex-row justify-center items-center hover:text-[#097A8E]"
                                    key={index}
                                  >
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="12"
                                      height="12"
                                      viewBox="0 0 32 32"
                                      fill="currentColor"
                                      className=" hover:text-[#097A8E] mr-1"
                                    >
                                      {" "}
                                      <path d="M29.919 6.163l-4.225 19.925c-0.319 1.406-1.15 1.756-2.331 1.094l-6.438-4.744-3.106 2.988c-0.344 0.344-0.631 0.631-1.294 0.631l0.463-6.556 11.931-10.781c0.519-0.462-0.113-0.719-0.806-0.256l-14.75 9.288-6.35-1.988c-1.381-0.431-1.406-1.381 0.288-2.044l24.837-9.569c1.15-0.431 2.156 0.256 1.781 2.013z" />{" "}
                                    </svg>

                                    <Link
                                      href={`${project.telegramURL}`}
                                      target="_blank"
                                      className=" text-[#06242E] font-plusjakartasans text-xs font-normal leading-[18px] whitespace-nowrap hover:text-[#097A8E]"
                                    >
                                      Telegram{" "}
                                      {numWords(index + 1)
                                        .charAt(0)
                                        .toUpperCase() +
                                        numWords(index + 1).slice(1)}
                                    </Link>
                                  </div>
                                );
                              })}
                            </div>
                          </div>
                        )}
                      </button>
                    ) : (
                      <Link
                        href={`${projectData.telegram[0].telegramURL}`}
                        target="_blank"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          className=" hover:text-[#097A8E]"
                          width="20"
                          height="20"
                          viewBox="0 0 32 32"
                        >
                          {" "}
                          <path d="M29.919 6.163l-4.225 19.925c-0.319 1.406-1.15 1.756-2.331 1.094l-6.438-4.744-3.106 2.988c-0.344 0.344-0.631 0.631-1.294 0.631l0.463-6.556 11.931-10.781c0.519-0.462-0.113-0.719-0.806-0.256l-14.75 9.288-6.35-1.988c-1.381-0.431-1.406-1.381 0.288-2.044l24.837-9.569c1.15-0.431 2.156 0.256 1.781 2.013z" />{" "}
                        </svg>
                      </Link>
                    )}
                  </>
                ) : (
                  ""
                )}
                {projectData.linkedin.length >= 1 ? (
                  <>
                    {projectData.linkedin.length > 1 ? (
                      <button className="relative inline-block">
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className=" hover:text-[#097A8E]"
                          xmlns="http://www.w3.org/2000/svg"
                          onClick={() =>
                            dispatch({
                              type: "TOGGLE",
                              payload: "onClickLinkedin",
                            })
                          }
                        >
                          <g id="icons/social/linkdin">
                            <path
                              id="Vector"
                              d="M16.424 2.00011H3.15173C3.00254 1.99804 2.8544 2.02538 2.71577 2.08056C2.57714 2.13575 2.45074 2.2177 2.34379 2.32174C2.23684 2.42578 2.15143 2.54987 2.09245 2.68692C2.03346 2.82398 2.00204 2.97131 2 3.1205V16.5495C2.00204 16.6987 2.03346 16.846 2.09245 16.9831C2.15143 17.1201 2.23684 17.2442 2.34379 17.3483C2.45074 17.4523 2.57714 17.5343 2.71577 17.5894C2.8544 17.6446 3.00254 17.672 3.15173 17.6699H16.424C16.5732 17.672 16.7214 17.6446 16.86 17.5894C16.9986 17.5343 17.125 17.4523 17.232 17.3483C17.3389 17.2442 17.4243 17.1201 17.4833 16.9831C17.5423 16.846 17.5737 16.6987 17.5758 16.5495V3.1205C17.5737 2.97131 17.5423 2.82398 17.4833 2.68692C17.4243 2.54987 17.3389 2.42578 17.232 2.32174C17.125 2.2177 16.9986 2.13575 16.86 2.08056C16.7214 2.02538 16.5732 1.99804 16.424 2.00011ZM6.72444 15.1157H4.37397V8.06431H6.72444V15.1157ZM5.54921 7.07712C5.22505 7.07712 4.91416 6.94835 4.68495 6.71913C4.45573 6.48992 4.32696 6.17903 4.32696 5.85488C4.32696 5.53072 4.45573 5.21983 4.68495 4.99062C4.91416 4.7614 5.22505 4.63263 5.54921 4.63263C5.72133 4.61311 5.89565 4.63017 6.06073 4.68268C6.22581 4.7352 6.37793 4.82199 6.50714 4.93738C6.63635 5.05277 6.73974 5.19414 6.81052 5.35225C6.88131 5.51036 6.9179 5.68164 6.9179 5.85488C6.9179 6.02811 6.88131 6.19939 6.81052 6.3575C6.73974 6.51561 6.63635 6.65699 6.50714 6.77237C6.37793 6.88776 6.22581 6.97455 6.06073 7.02707C5.89565 7.07958 5.72133 7.09664 5.54921 7.07712ZM15.2018 15.1157H12.8513V11.3315C12.8513 10.3834 12.5144 9.76449 11.6604 9.76449C11.3961 9.76642 11.1388 9.84932 10.923 10.002C10.7073 10.1547 10.5435 10.3699 10.4538 10.6185C10.3925 10.8026 10.366 10.9966 10.3755 11.1904V15.1079H8.02503C8.02503 15.1079 8.02503 8.69894 8.02503 8.05648H10.3755V9.05151C10.589 8.681 10.8996 8.37577 11.2737 8.16868C11.6479 7.96159 12.0714 7.86049 12.4988 7.87628C14.0657 7.87628 15.2018 8.88698 15.2018 11.0572V15.1157Z"
                              fill="currentColor"
                            />
                          </g>
                        </svg>
                        {state.onClickLinkedin && (
                          <div
                            className="absolute bottom-[30px]"
                            onMouseLeave={() =>
                              dispatch({
                                type: "TOGGLE",
                                payload: "onClickLinkedin",
                              })
                            }
                          >
                            <div className="flex px-3 py-2 flex-col items-start gap-2 rounded-lg bg-[#F5F5F5] shadow-md">
                              {projectData.linkedin.map((project, index) => {
                                return (
                                  <div
                                    className="flex flex-row justify-center items-center hover:text-[#097A8E]"
                                    key={index}
                                  >
                                    <svg
                                      width="12"
                                      height="12"
                                      viewBox="0 0 20 20"
                                      fill="currentColor"
                                      className=" hover:text-[#097A8E] mr-1"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <g id="icons/social/linkdin">
                                        <path
                                          id="Vector"
                                          d="M16.424 2.00011H3.15173C3.00254 1.99804 2.8544 2.02538 2.71577 2.08056C2.57714 2.13575 2.45074 2.2177 2.34379 2.32174C2.23684 2.42578 2.15143 2.54987 2.09245 2.68692C2.03346 2.82398 2.00204 2.97131 2 3.1205V16.5495C2.00204 16.6987 2.03346 16.846 2.09245 16.9831C2.15143 17.1201 2.23684 17.2442 2.34379 17.3483C2.45074 17.4523 2.57714 17.5343 2.71577 17.5894C2.8544 17.6446 3.00254 17.672 3.15173 17.6699H16.424C16.5732 17.672 16.7214 17.6446 16.86 17.5894C16.9986 17.5343 17.125 17.4523 17.232 17.3483C17.3389 17.2442 17.4243 17.1201 17.4833 16.9831C17.5423 16.846 17.5737 16.6987 17.5758 16.5495V3.1205C17.5737 2.97131 17.5423 2.82398 17.4833 2.68692C17.4243 2.54987 17.3389 2.42578 17.232 2.32174C17.125 2.2177 16.9986 2.13575 16.86 2.08056C16.7214 2.02538 16.5732 1.99804 16.424 2.00011ZM6.72444 15.1157H4.37397V8.06431H6.72444V15.1157ZM5.54921 7.07712C5.22505 7.07712 4.91416 6.94835 4.68495 6.71913C4.45573 6.48992 4.32696 6.17903 4.32696 5.85488C4.32696 5.53072 4.45573 5.21983 4.68495 4.99062C4.91416 4.7614 5.22505 4.63263 5.54921 4.63263C5.72133 4.61311 5.89565 4.63017 6.06073 4.68268C6.22581 4.7352 6.37793 4.82199 6.50714 4.93738C6.63635 5.05277 6.73974 5.19414 6.81052 5.35225C6.88131 5.51036 6.9179 5.68164 6.9179 5.85488C6.9179 6.02811 6.88131 6.19939 6.81052 6.3575C6.73974 6.51561 6.63635 6.65699 6.50714 6.77237C6.37793 6.88776 6.22581 6.97455 6.06073 7.02707C5.89565 7.07958 5.72133 7.09664 5.54921 7.07712ZM15.2018 15.1157H12.8513V11.3315C12.8513 10.3834 12.5144 9.76449 11.6604 9.76449C11.3961 9.76642 11.1388 9.84932 10.923 10.002C10.7073 10.1547 10.5435 10.3699 10.4538 10.6185C10.3925 10.8026 10.366 10.9966 10.3755 11.1904V15.1079H8.02503C8.02503 15.1079 8.02503 8.69894 8.02503 8.05648H10.3755V9.05151C10.589 8.681 10.8996 8.37577 11.2737 8.16868C11.6479 7.96159 12.0714 7.86049 12.4988 7.87628C14.0657 7.87628 15.2018 8.88698 15.2018 11.0572V15.1157Z"
                                          fill="currentColor"
                                        />
                                      </g>
                                    </svg>

                                    <Link
                                      href={`${project.linkedinURL}`}
                                      target="_blank"
                                      className=" text-[#06242E] font-plusjakartasans text-xs font-normal leading-[18px] whitespace-nowrap hover:text-[#097A8E]"
                                    >
                                      Linkedin{" "}
                                      {numWords(index + 1)
                                        .charAt(0)
                                        .toUpperCase() +
                                        numWords(index + 1).slice(1)}
                                    </Link>
                                  </div>
                                );
                              })}
                            </div>
                          </div>
                        )}
                      </button>
                    ) : (
                      <Link
                        href={`${projectData.linkedin[0].linkedinURL}`}
                        target="_blank"
                      >
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className=" hover:text-[#097A8E]"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g id="icons/social/linkdin">
                            <path
                              id="Vector"
                              d="M16.424 2.00011H3.15173C3.00254 1.99804 2.8544 2.02538 2.71577 2.08056C2.57714 2.13575 2.45074 2.2177 2.34379 2.32174C2.23684 2.42578 2.15143 2.54987 2.09245 2.68692C2.03346 2.82398 2.00204 2.97131 2 3.1205V16.5495C2.00204 16.6987 2.03346 16.846 2.09245 16.9831C2.15143 17.1201 2.23684 17.2442 2.34379 17.3483C2.45074 17.4523 2.57714 17.5343 2.71577 17.5894C2.8544 17.6446 3.00254 17.672 3.15173 17.6699H16.424C16.5732 17.672 16.7214 17.6446 16.86 17.5894C16.9986 17.5343 17.125 17.4523 17.232 17.3483C17.3389 17.2442 17.4243 17.1201 17.4833 16.9831C17.5423 16.846 17.5737 16.6987 17.5758 16.5495V3.1205C17.5737 2.97131 17.5423 2.82398 17.4833 2.68692C17.4243 2.54987 17.3389 2.42578 17.232 2.32174C17.125 2.2177 16.9986 2.13575 16.86 2.08056C16.7214 2.02538 16.5732 1.99804 16.424 2.00011ZM6.72444 15.1157H4.37397V8.06431H6.72444V15.1157ZM5.54921 7.07712C5.22505 7.07712 4.91416 6.94835 4.68495 6.71913C4.45573 6.48992 4.32696 6.17903 4.32696 5.85488C4.32696 5.53072 4.45573 5.21983 4.68495 4.99062C4.91416 4.7614 5.22505 4.63263 5.54921 4.63263C5.72133 4.61311 5.89565 4.63017 6.06073 4.68268C6.22581 4.7352 6.37793 4.82199 6.50714 4.93738C6.63635 5.05277 6.73974 5.19414 6.81052 5.35225C6.88131 5.51036 6.9179 5.68164 6.9179 5.85488C6.9179 6.02811 6.88131 6.19939 6.81052 6.3575C6.73974 6.51561 6.63635 6.65699 6.50714 6.77237C6.37793 6.88776 6.22581 6.97455 6.06073 7.02707C5.89565 7.07958 5.72133 7.09664 5.54921 7.07712ZM15.2018 15.1157H12.8513V11.3315C12.8513 10.3834 12.5144 9.76449 11.6604 9.76449C11.3961 9.76642 11.1388 9.84932 10.923 10.002C10.7073 10.1547 10.5435 10.3699 10.4538 10.6185C10.3925 10.8026 10.366 10.9966 10.3755 11.1904V15.1079H8.02503C8.02503 15.1079 8.02503 8.69894 8.02503 8.05648H10.3755V9.05151C10.589 8.681 10.8996 8.37577 11.2737 8.16868C11.6479 7.96159 12.0714 7.86049 12.4988 7.87628C14.0657 7.87628 15.2018 8.88698 15.2018 11.0572V15.1157Z"
                              fill="currentColor"
                            />
                          </g>
                        </svg>
                      </Link>
                    )}
                  </>
                ) : (
                  ""
                )}
                {projectData.medium.length >= 1 ? (
                  <>
                    {projectData.medium.length > 1 ? (
                      <button className="relative inline-block">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          width="20"
                          height="20"
                          fill="currentColor"
                          className=" hover:text-[#097A8E]"
                          onClick={() =>
                            dispatch({
                              type: "TOGGLE",
                              payload: "onClickMedium",
                            })
                          }
                        >
                          <path
                            className="uim-primary"
                            d="M22,6.41668h-.791a.89762.89762,0,0,0-.709.69479v9.83021a.83938.83938,0,0,0,.709.64164H22V19.9167H14.83334V17.58332h1.50008V7.25h-.07353L12.75706,19.9167H10.04512L6.58751,7.25H6.5V17.58332H8V19.9167H2V17.58332h.76835A.841.841,0,0,0,3.5,16.94168V7.11139a.89588.89588,0,0,0-.73166-.69479H2V4.0833H9.50266L11.96593,13.25h.068L14.51976,4.0833H22V6.41668"
                          />
                        </svg>
                        {state.onClickMedium && (
                          <div
                            className="absolute bottom-[30px]"
                            onMouseLeave={() =>
                              dispatch({
                                type: "TOGGLE",
                                payload: "onClickMedium",
                              })
                            }
                          >
                            <div className="flex px-3 py-2 flex-col items-start gap-2 rounded-lg bg-[#F5F5F5] shadow-md">
                              {projectData.medium.map((project, index) => {
                                return (
                                  <div
                                    className="flex flex-row justify-center items-center hover:text-[#097A8E]"
                                    key={index}
                                  >
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 24 24"
                                      width="12"
                                      height="12"
                                      fill="currentColor"
                                      className=" hover:text-[#097A8E] mr-1"
                                    >
                                      <path
                                        className="uim-primary"
                                        d="M22,6.41668h-.791a.89762.89762,0,0,0-.709.69479v9.83021a.83938.83938,0,0,0,.709.64164H22V19.9167H14.83334V17.58332h1.50008V7.25h-.07353L12.75706,19.9167H10.04512L6.58751,7.25H6.5V17.58332H8V19.9167H2V17.58332h.76835A.841.841,0,0,0,3.5,16.94168V7.11139a.89588.89588,0,0,0-.73166-.69479H2V4.0833H9.50266L11.96593,13.25h.068L14.51976,4.0833H22V6.41668"
                                      />
                                    </svg>

                                    <Link
                                      href={`${project.mediumURL}`}
                                      target="_blank"
                                      className=" text-[#06242E] font-plusjakartasans text-xs font-normal leading-[18px] whitespace-nowrap hover:text-[#097A8E]"
                                    >
                                      Medium{" "}
                                      {numWords(index + 1)
                                        .charAt(0)
                                        .toUpperCase() +
                                        numWords(index + 1).slice(1)}
                                    </Link>
                                  </div>
                                );
                              })}
                            </div>
                          </div>
                        )}
                      </button>
                    ) : (
                      <Link
                        href={`${projectData.medium[0].mediumURL}`}
                        target="_blank"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          width="20"
                          height="20"
                          fill="currentColor"
                          className=" hover:text-[#097A8E]"
                        >
                          <path
                            className="uim-primary"
                            d="M22,6.41668h-.791a.89762.89762,0,0,0-.709.69479v9.83021a.83938.83938,0,0,0,.709.64164H22V19.9167H14.83334V17.58332h1.50008V7.25h-.07353L12.75706,19.9167H10.04512L6.58751,7.25H6.5V17.58332H8V19.9167H2V17.58332h.76835A.841.841,0,0,0,3.5,16.94168V7.11139a.89588.89588,0,0,0-.73166-.69479H2V4.0833H9.50266L11.96593,13.25h.068L14.51976,4.0833H22V6.41668"
                          />
                        </svg>
                      </Link>
                    )}
                  </>
                ) : (
                  ""
                )}
                {projectData.reddit.length >= 1 ? (
                  <>
                    {projectData.reddit.length > 1 ? (
                      <button className="relative inline-block">
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className=" hover:text-[#097A8E]"
                          xmlns="http://www.w3.org/2000/svg"
                          onClick={() =>
                            dispatch({
                              type: "TOGGLE",
                              payload: "onClickReddit",
                            })
                          }
                        >
                          <path
                            d="M18.3341 9.85149C18.3341 8.66336 17.4314 7.69803 16.3203 7.69803C15.8341 7.69803 15.4175 7.84654 15.0703 8.14356C13.8203 7.32674 12.2925 6.80692 10.6258 6.73267L11.4592 3.83664L13.8203 4.43069C13.8898 5.32179 14.5841 6.06436 15.4869 6.06436C16.3898 6.06436 17.1536 5.24752 17.1536 4.28218C17.1536 3.31684 16.3898 2.5 15.4869 2.5C14.8619 2.5 14.3064 2.87129 14.0286 3.46535L11.2508 2.79703C11.0425 2.72278 10.7647 2.87129 10.6953 3.09406L9.65359 6.73267C7.91748 6.80692 6.18138 7.25248 4.93138 8.14356C4.58416 7.84654 4.16748 7.69803 3.68138 7.69803C2.57027 7.69803 1.66748 8.66336 1.66748 9.85149C1.66748 10.5941 2.01471 11.2624 2.50082 11.6337C2.50082 11.7822 2.50082 12.0049 2.50082 12.1535C2.50082 13.6386 3.33416 14.9753 4.79248 16.0149C6.18138 16.9803 8.05638 17.5 10.0008 17.5C11.9453 17.5 13.8203 16.9803 15.2091 16.0149C16.6675 14.9753 17.5009 13.6386 17.5009 12.1535C17.5009 12.0049 17.5009 11.8564 17.5009 11.7079C17.9869 11.2624 18.3341 10.5941 18.3341 9.85149ZM15.5564 3.46535C15.973 3.46535 16.3203 3.83664 16.3203 4.28218C16.3203 4.72773 15.973 5.09901 15.5564 5.09901C15.1398 5.09901 14.7925 4.72773 14.7925 4.28218C14.7925 3.83664 15.1398 3.46535 15.5564 3.46535ZM6.38971 11.1881C6.38971 10.5198 6.94527 10 7.50082 10C8.12582 10 8.61193 10.5941 8.61193 11.1881C8.61193 11.7822 8.12582 12.3762 7.50082 12.3762C6.94527 12.3762 6.38971 11.8564 6.38971 11.1881ZM12.7786 14.6783C12.223 15.2723 11.3203 15.5693 10.0703 15.5693C8.82027 15.5693 7.91748 15.2723 7.36193 14.6783C7.15359 14.4555 7.15359 14.1584 7.36193 14.0099C7.57027 13.7871 7.84804 13.7871 7.98693 14.0099C8.40359 14.4555 9.09804 14.6783 10.0703 14.6783C11.0425 14.6783 11.7369 14.4555 12.1536 14.0099C12.3619 13.7871 12.6398 13.7871 12.7786 14.0099C12.9175 14.2326 12.9175 14.5298 12.7786 14.6783ZM12.5009 12.3762C11.8758 12.3762 11.3203 11.8564 11.3203 11.1881C11.3203 10.5198 11.8758 10 12.5009 10C13.1259 10 13.6119 10.5941 13.6119 11.1881C13.6119 11.7822 13.1259 12.3762 12.5009 12.3762Z"
                            fill="currentColor"
                          />
                        </svg>
                        {state.onClickReddit && (
                          <div
                            className="absolute bottom-[30px]"
                            onMouseLeave={() =>
                              dispatch({
                                type: "TOGGLE",
                                payload: "onClickReddit",
                              })
                            }
                          >
                            <div className="flex px-3 py-2 flex-col items-start gap-2 rounded-lg bg-[#F5F5F5] shadow-md">
                              {projectData.reddit.map((project, index) => {
                                return (
                                  <div
                                    className="flex flex-row justify-center items-center hover:text-[#097A8E]"
                                    key={index}
                                  >
                                    <svg
                                      width="12"
                                      height="12"
                                      viewBox="0 0 20 20"
                                      fill="currentColor"
                                      className=" hover:text-[#097A8E] mr-1"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M18.3341 9.85149C18.3341 8.66336 17.4314 7.69803 16.3203 7.69803C15.8341 7.69803 15.4175 7.84654 15.0703 8.14356C13.8203 7.32674 12.2925 6.80692 10.6258 6.73267L11.4592 3.83664L13.8203 4.43069C13.8898 5.32179 14.5841 6.06436 15.4869 6.06436C16.3898 6.06436 17.1536 5.24752 17.1536 4.28218C17.1536 3.31684 16.3898 2.5 15.4869 2.5C14.8619 2.5 14.3064 2.87129 14.0286 3.46535L11.2508 2.79703C11.0425 2.72278 10.7647 2.87129 10.6953 3.09406L9.65359 6.73267C7.91748 6.80692 6.18138 7.25248 4.93138 8.14356C4.58416 7.84654 4.16748 7.69803 3.68138 7.69803C2.57027 7.69803 1.66748 8.66336 1.66748 9.85149C1.66748 10.5941 2.01471 11.2624 2.50082 11.6337C2.50082 11.7822 2.50082 12.0049 2.50082 12.1535C2.50082 13.6386 3.33416 14.9753 4.79248 16.0149C6.18138 16.9803 8.05638 17.5 10.0008 17.5C11.9453 17.5 13.8203 16.9803 15.2091 16.0149C16.6675 14.9753 17.5009 13.6386 17.5009 12.1535C17.5009 12.0049 17.5009 11.8564 17.5009 11.7079C17.9869 11.2624 18.3341 10.5941 18.3341 9.85149ZM15.5564 3.46535C15.973 3.46535 16.3203 3.83664 16.3203 4.28218C16.3203 4.72773 15.973 5.09901 15.5564 5.09901C15.1398 5.09901 14.7925 4.72773 14.7925 4.28218C14.7925 3.83664 15.1398 3.46535 15.5564 3.46535ZM6.38971 11.1881C6.38971 10.5198 6.94527 10 7.50082 10C8.12582 10 8.61193 10.5941 8.61193 11.1881C8.61193 11.7822 8.12582 12.3762 7.50082 12.3762C6.94527 12.3762 6.38971 11.8564 6.38971 11.1881ZM12.7786 14.6783C12.223 15.2723 11.3203 15.5693 10.0703 15.5693C8.82027 15.5693 7.91748 15.2723 7.36193 14.6783C7.15359 14.4555 7.15359 14.1584 7.36193 14.0099C7.57027 13.7871 7.84804 13.7871 7.98693 14.0099C8.40359 14.4555 9.09804 14.6783 10.0703 14.6783C11.0425 14.6783 11.7369 14.4555 12.1536 14.0099C12.3619 13.7871 12.6398 13.7871 12.7786 14.0099C12.9175 14.2326 12.9175 14.5298 12.7786 14.6783ZM12.5009 12.3762C11.8758 12.3762 11.3203 11.8564 11.3203 11.1881C11.3203 10.5198 11.8758 10 12.5009 10C13.1259 10 13.6119 10.5941 13.6119 11.1881C13.6119 11.7822 13.1259 12.3762 12.5009 12.3762Z"
                                        fill="currentColor"
                                      />
                                    </svg>

                                    <Link
                                      href={`${project.redditURL}`}
                                      target="_blank"
                                      className=" text-[#06242E] font-plusjakartasans text-xs font-normal leading-[18px] whitespace-nowrap hover:text-[#097A8E]"
                                    >
                                      Reddit{" "}
                                      {numWords(index + 1)
                                        .charAt(0)
                                        .toUpperCase() +
                                        numWords(index + 1).slice(1)}
                                    </Link>
                                  </div>
                                );
                              })}
                            </div>
                          </div>
                        )}
                      </button>
                    ) : (
                      <Link
                        href={`${projectData.reddit[0].redditURL}`}
                        target="_blank"
                      >
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          xmlns="http://www.w3.org/2000/svg"
                          className=" hover:text-[#097A8E]"
                        >
                          <path
                            d="M18.3341 9.85149C18.3341 8.66336 17.4314 7.69803 16.3203 7.69803C15.8341 7.69803 15.4175 7.84654 15.0703 8.14356C13.8203 7.32674 12.2925 6.80692 10.6258 6.73267L11.4592 3.83664L13.8203 4.43069C13.8898 5.32179 14.5841 6.06436 15.4869 6.06436C16.3898 6.06436 17.1536 5.24752 17.1536 4.28218C17.1536 3.31684 16.3898 2.5 15.4869 2.5C14.8619 2.5 14.3064 2.87129 14.0286 3.46535L11.2508 2.79703C11.0425 2.72278 10.7647 2.87129 10.6953 3.09406L9.65359 6.73267C7.91748 6.80692 6.18138 7.25248 4.93138 8.14356C4.58416 7.84654 4.16748 7.69803 3.68138 7.69803C2.57027 7.69803 1.66748 8.66336 1.66748 9.85149C1.66748 10.5941 2.01471 11.2624 2.50082 11.6337C2.50082 11.7822 2.50082 12.0049 2.50082 12.1535C2.50082 13.6386 3.33416 14.9753 4.79248 16.0149C6.18138 16.9803 8.05638 17.5 10.0008 17.5C11.9453 17.5 13.8203 16.9803 15.2091 16.0149C16.6675 14.9753 17.5009 13.6386 17.5009 12.1535C17.5009 12.0049 17.5009 11.8564 17.5009 11.7079C17.9869 11.2624 18.3341 10.5941 18.3341 9.85149ZM15.5564 3.46535C15.973 3.46535 16.3203 3.83664 16.3203 4.28218C16.3203 4.72773 15.973 5.09901 15.5564 5.09901C15.1398 5.09901 14.7925 4.72773 14.7925 4.28218C14.7925 3.83664 15.1398 3.46535 15.5564 3.46535ZM6.38971 11.1881C6.38971 10.5198 6.94527 10 7.50082 10C8.12582 10 8.61193 10.5941 8.61193 11.1881C8.61193 11.7822 8.12582 12.3762 7.50082 12.3762C6.94527 12.3762 6.38971 11.8564 6.38971 11.1881ZM12.7786 14.6783C12.223 15.2723 11.3203 15.5693 10.0703 15.5693C8.82027 15.5693 7.91748 15.2723 7.36193 14.6783C7.15359 14.4555 7.15359 14.1584 7.36193 14.0099C7.57027 13.7871 7.84804 13.7871 7.98693 14.0099C8.40359 14.4555 9.09804 14.6783 10.0703 14.6783C11.0425 14.6783 11.7369 14.4555 12.1536 14.0099C12.3619 13.7871 12.6398 13.7871 12.7786 14.0099C12.9175 14.2326 12.9175 14.5298 12.7786 14.6783ZM12.5009 12.3762C11.8758 12.3762 11.3203 11.8564 11.3203 11.1881C11.3203 10.5198 11.8758 10 12.5009 10C13.1259 10 13.6119 10.5941 13.6119 11.1881C13.6119 11.7822 13.1259 12.3762 12.5009 12.3762Z"
                            fill="currentColor"
                          />
                        </svg>
                      </Link>
                    )}
                  </>
                ) : (
                  ""
                )}
                {projectData.youtube.length >= 1 ? (
                  <>
                    {projectData.youtube.length > 1 ? (
                      <button className="relative inline-block">
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          xmlns="http://www.w3.org/2000/svg"
                          className=" hover:text-[#097A8E]"
                          onClick={() =>
                            dispatch({
                              type: "TOGGLE",
                              payload: "onClickYoutube",
                            })
                          }
                        >
                          <g id="Brands / youtube">
                            <path
                              id="Vector"
                              d="M19.1669 8.09165C19.2081 6.89886 18.9472 5.715 18.4085 4.64999C18.043 4.21299 17.5358 3.91808 16.9752 3.81665C14.6565 3.60626 12.3281 3.52002 10.0002 3.55832C7.68072 3.51829 5.36078 3.60174 3.05019 3.80832C2.59337 3.89142 2.17062 4.10569 1.83352 4.42499C1.08352 5.11665 1.00019 6.29999 0.916852 7.29999C0.795945 9.09796 0.795945 10.902 0.916852 12.7C0.94096 13.2628 1.02476 13.8215 1.16685 14.3667C1.26733 14.7875 1.47062 15.1769 1.75852 15.5C2.09791 15.8362 2.53051 16.0627 3.00019 16.15C4.79678 16.3717 6.60703 16.4637 8.41685 16.425C11.3335 16.4667 13.8919 16.425 16.9169 16.1917C17.3981 16.1097 17.8428 15.8829 18.1919 15.5417C18.4252 15.3082 18.5994 15.0226 18.7002 14.7083C18.9982 13.7938 19.1446 12.8367 19.1335 11.875C19.1669 11.4083 19.1669 8.59165 19.1669 8.09165ZM8.11685 12.375V7.21665L13.0502 9.80832C11.6669 10.575 9.84185 11.4417 8.11685 12.375Z"
                              fill="currentColor"
                            />
                          </g>
                        </svg>
                        {state.onClickYoutube && (
                          <div
                            className="absolute bottom-[30px]"
                            onMouseLeave={() =>
                              dispatch({
                                type: "TOGGLE",
                                payload: "onClickYoutube",
                              })
                            }
                          >
                            <div className="flex px-3 py-2 flex-col items-start gap-2 rounded-lg bg-[#F5F5F5] shadow-md">
                              {projectData.youtube.map((project, index) => {
                                return (
                                  <div
                                    className="flex flex-row justify-center items-center hover:text-[#097A8E]"
                                    key={index}
                                  >
                                    <svg
                                      width="12"
                                      height="12"
                                      viewBox="0 0 20 20"
                                      fill="currentColor"
                                      xmlns="http://www.w3.org/2000/svg"
                                      className=" hover:text-[#097A8E] mr-1"
                                    >
                                      <g id="Brands / youtube">
                                        <path
                                          id="Vector"
                                          d="M19.1669 8.09165C19.2081 6.89886 18.9472 5.715 18.4085 4.64999C18.043 4.21299 17.5358 3.91808 16.9752 3.81665C14.6565 3.60626 12.3281 3.52002 10.0002 3.55832C7.68072 3.51829 5.36078 3.60174 3.05019 3.80832C2.59337 3.89142 2.17062 4.10569 1.83352 4.42499C1.08352 5.11665 1.00019 6.29999 0.916852 7.29999C0.795945 9.09796 0.795945 10.902 0.916852 12.7C0.94096 13.2628 1.02476 13.8215 1.16685 14.3667C1.26733 14.7875 1.47062 15.1769 1.75852 15.5C2.09791 15.8362 2.53051 16.0627 3.00019 16.15C4.79678 16.3717 6.60703 16.4637 8.41685 16.425C11.3335 16.4667 13.8919 16.425 16.9169 16.1917C17.3981 16.1097 17.8428 15.8829 18.1919 15.5417C18.4252 15.3082 18.5994 15.0226 18.7002 14.7083C18.9982 13.7938 19.1446 12.8367 19.1335 11.875C19.1669 11.4083 19.1669 8.59165 19.1669 8.09165ZM8.11685 12.375V7.21665L13.0502 9.80832C11.6669 10.575 9.84185 11.4417 8.11685 12.375Z"
                                          fill="currentColor"
                                        />
                                      </g>
                                    </svg>

                                    <Link
                                      href={`${project.youtubeURL}`}
                                      target="_blank"
                                      className=" text-[#06242E] font-plusjakartasans text-xs font-normal leading-[18px] whitespace-nowrap hover:text-[#097A8E]"
                                    >
                                      Youtube{" "}
                                      {numWords(index + 1)
                                        .charAt(0)
                                        .toUpperCase() +
                                        numWords(index + 1).slice(1)}
                                    </Link>
                                  </div>
                                );
                              })}
                            </div>
                          </div>
                        )}
                      </button>
                    ) : (
                      <Link
                        href={`${projectData.youtube[0].youtubeURL}`}
                        target="_blank"
                      >
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          xmlns="http://www.w3.org/2000/svg"
                          className=" hover:text-[#097A8E]"
                        >
                          <g id="Brands / youtube">
                            <path
                              id="Vector"
                              d="M19.1669 8.09165C19.2081 6.89886 18.9472 5.715 18.4085 4.64999C18.043 4.21299 17.5358 3.91808 16.9752 3.81665C14.6565 3.60626 12.3281 3.52002 10.0002 3.55832C7.68072 3.51829 5.36078 3.60174 3.05019 3.80832C2.59337 3.89142 2.17062 4.10569 1.83352 4.42499C1.08352 5.11665 1.00019 6.29999 0.916852 7.29999C0.795945 9.09796 0.795945 10.902 0.916852 12.7C0.94096 13.2628 1.02476 13.8215 1.16685 14.3667C1.26733 14.7875 1.47062 15.1769 1.75852 15.5C2.09791 15.8362 2.53051 16.0627 3.00019 16.15C4.79678 16.3717 6.60703 16.4637 8.41685 16.425C11.3335 16.4667 13.8919 16.425 16.9169 16.1917C17.3981 16.1097 17.8428 15.8829 18.1919 15.5417C18.4252 15.3082 18.5994 15.0226 18.7002 14.7083C18.9982 13.7938 19.1446 12.8367 19.1335 11.875C19.1669 11.4083 19.1669 8.59165 19.1669 8.09165ZM8.11685 12.375V7.21665L13.0502 9.80832C11.6669 10.575 9.84185 11.4417 8.11685 12.375Z"
                              fill="currentColor"
                            />
                          </g>
                        </svg>
                      </Link>
                    )}
                  </>
                ) : (
                  ""
                )}
                {projectData.facebook.length >= 1 ? (
                  <>
                    {projectData.facebook.length > 1 ? (
                      <button className="relative inline-block">
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          xmlns="http://www.w3.org/2000/svg"
                          className=" hover:text-[#097A8E]"
                          onClick={() =>
                            dispatch({
                              type: "TOGGLE",
                              payload: "onClickFacebook",
                            })
                          }
                        >
                          <g id="icons/social/facebook">
                            <path
                              id="Vector"
                              d="M12.2421 5.43548H13.6211V3.10296C12.9534 3.03353 12.2825 2.99925 11.6113 3.00027C9.61615 3.00027 8.25184 4.21787 8.25184 6.44771V8.36948H6V10.9807H8.25184V17.6702H10.9511V10.9807H13.1956L13.533 8.36948H10.9511V6.70444C10.9511 5.93426 11.1565 5.43548 12.2421 5.43548Z"
                              fill="currentColor"
                            />
                          </g>
                        </svg>
                        {state.onClickFacebook && (
                          <div
                            className="absolute bottom-[30px]"
                            onMouseLeave={() =>
                              dispatch({
                                type: "TOGGLE",
                                payload: "onClickFacebook",
                              })
                            }
                          >
                            <div className="flex px-3 py-2 flex-col items-start gap-2 rounded-lg bg-[#F5F5F5] shadow-md">
                              {projectData.facebook.map((project, index) => {
                                return (
                                  <div
                                    className="flex flex-row justify-center items-center hover:text-[#097A8E]"
                                    key={index}
                                  >
                                    <svg
                                      width="12"
                                      height="12"
                                      viewBox="0 0 20 20"
                                      fill="currentColor"
                                      xmlns="http://www.w3.org/2000/svg"
                                      className=" hover:text-[#097A8E] mr-1"
                                    >
                                      <g id="icons/social/facebook">
                                        <path
                                          id="Vector"
                                          d="M12.2421 5.43548H13.6211V3.10296C12.9534 3.03353 12.2825 2.99925 11.6113 3.00027C9.61615 3.00027 8.25184 4.21787 8.25184 6.44771V8.36948H6V10.9807H8.25184V17.6702H10.9511V10.9807H13.1956L13.533 8.36948H10.9511V6.70444C10.9511 5.93426 11.1565 5.43548 12.2421 5.43548Z"
                                          fill="currentColor"
                                        />
                                      </g>
                                    </svg>

                                    <Link
                                      href={`${project.facebookURL}`}
                                      target="_blank"
                                      className=" text-[#06242E] font-plusjakartasans text-xs font-normal leading-[18px] whitespace-nowrap hover:text-[#097A8E]"
                                    >
                                      Facebook{" "}
                                      {numWords(index + 1)
                                        .charAt(0)
                                        .toUpperCase() +
                                        numWords(index + 1).slice(1)}
                                    </Link>
                                  </div>
                                );
                              })}
                            </div>
                          </div>
                        )}
                      </button>
                    ) : (
                      <Link
                        href={`${projectData.facebook[0].facebookURL}`}
                        target="_blank"
                      >
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          xmlns="http://www.w3.org/2000/svg"
                          className=" hover:text-[#097A8E]"
                        >
                          <g id="icons/social/facebook">
                            <path
                              id="Vector"
                              d="M12.2421 5.43548H13.6211V3.10296C12.9534 3.03353 12.2825 2.99925 11.6113 3.00027C9.61615 3.00027 8.25184 4.21787 8.25184 6.44771V8.36948H6V10.9807H8.25184V17.6702H10.9511V10.9807H13.1956L13.533 8.36948H10.9511V6.70444C10.9511 5.93426 11.1565 5.43548 12.2421 5.43548Z"
                              fill="currentColor"
                            />
                          </g>
                        </svg>
                      </Link>
                    )}
                  </>
                ) : (
                  ""
                )}
              </div>
            </div>
            {projectData.marketplace_arky === true ||
            projectData.marketplace_cathulu === true ? (
              <div className="flex flex-col items-start gap-y-2">
                <p className=" font-lato text-sm font-extrabold leading-5 tracking-[1px]">
                  Available On
                </p>
                <div className=" flex items-start gap-x-3">
                  {projectData.marketplace_arky ? (
                    <div className="relative inline-block">
                      <Link
                        href={`https://zilswap.io/arky/collections/${projectData.NFT_address}`}
                        target="_blank"
                        className=" font-plusjakartasans text-sm leading-[21px] font-normal text-[#06242E]"
                      >
                        Arky
                      </Link>
                      <svg
                        width="10"
                        height="10"
                        viewBox="0 0 10 10"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="absolute top-0 right-[-8px]"
                      >
                        <g
                          id="User Interface / External Link"
                          clip-path="url(#clip0_5650_5412)"
                        >
                          <path
                            id="Vector"
                            d="M7.50004 4.50825C7.38953 4.50825 7.28355 4.55215 7.20541 4.63029C7.12727 4.70843 7.08337 4.81441 7.08337 4.92492V7.91659C7.08337 8.02709 7.03948 8.13307 6.96134 8.21121C6.8832 8.28935 6.77721 8.33325 6.66671 8.33325H2.08337C1.97287 8.33325 1.86689 8.28935 1.78875 8.21121C1.71061 8.13307 1.66671 8.02709 1.66671 7.91659V3.33325C1.66671 3.22275 1.71061 3.11676 1.78875 3.03862C1.86689 2.96048 1.97287 2.91659 2.08337 2.91659H5.07504C5.18555 2.91659 5.29153 2.87269 5.36967 2.79455C5.44781 2.71641 5.49171 2.61043 5.49171 2.49992C5.49171 2.38941 5.44781 2.28343 5.36967 2.20529C5.29153 2.12715 5.18555 2.08325 5.07504 2.08325H2.08337C1.75185 2.08325 1.43391 2.21495 1.19949 2.44937C0.96507 2.68379 0.833374 3.00173 0.833374 3.33325V7.91659C0.833374 8.24811 0.96507 8.56605 1.19949 8.80047C1.43391 9.03489 1.75185 9.16659 2.08337 9.16659H6.66671C6.99823 9.16659 7.31617 9.03489 7.55059 8.80047C7.78501 8.56605 7.91671 8.24811 7.91671 7.91659V4.92492C7.91671 4.81441 7.87281 4.70843 7.79467 4.63029C7.71653 4.55215 7.61055 4.50825 7.50004 4.50825ZM9.13337 1.09159C9.09109 0.989773 9.01019 0.908866 8.90837 0.866585C8.85828 0.845235 8.80449 0.83391 8.75004 0.833252H6.25004C6.13953 0.833252 6.03355 0.877151 5.95541 0.955291C5.87727 1.03343 5.83337 1.13941 5.83337 1.24992C5.83337 1.36043 5.87727 1.46641 5.95541 1.54455C6.03355 1.62269 6.13953 1.66659 6.25004 1.66659H7.74587L3.45421 5.95409C3.41515 5.99282 3.38416 6.0389 3.363 6.08968C3.34185 6.14045 3.33096 6.19491 3.33096 6.24992C3.33096 6.30492 3.34185 6.35938 3.363 6.41016C3.38416 6.46093 3.41515 6.50702 3.45421 6.54575C3.49294 6.58481 3.53903 6.6158 3.5898 6.63696C3.64058 6.65811 3.69504 6.669 3.75004 6.669C3.80505 6.669 3.85951 6.65811 3.91028 6.63696C3.96106 6.6158 4.00714 6.58481 4.04587 6.54575L8.33337 2.25409V3.74992C8.33337 3.86043 8.37727 3.96641 8.45541 4.04455C8.53355 4.12269 8.63953 4.16659 8.75004 4.16659C8.86055 4.16659 8.96653 4.12269 9.04467 4.04455C9.12281 3.96641 9.16671 3.86043 9.16671 3.74992V1.24992C9.16605 1.19547 9.15473 1.14168 9.13337 1.09159Z"
                            fill="#06242E"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_5650_5412">
                            <rect width="10" height="10" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                  ) : (
                    ""
                  )}
                  {projectData.marketplace_arky ? (
                    <div className="relative inline-block">
                      <Link
                        href={`https://cathulhu.tools/market/${projectData.NFT_address}`}
                        target="_blank"
                        className=" font-plusjakartasans text-sm leading-[21px] font-normal text-[#06242E]"
                      >
                        Cathulu
                      </Link>
                      <svg
                        width="10"
                        height="10"
                        viewBox="0 0 10 10"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="absolute top-0 right-[-8px]"
                      >
                        <g
                          id="User Interface / External Link"
                          clip-path="url(#clip0_5650_5412)"
                        >
                          <path
                            id="Vector"
                            d="M7.50004 4.50825C7.38953 4.50825 7.28355 4.55215 7.20541 4.63029C7.12727 4.70843 7.08337 4.81441 7.08337 4.92492V7.91659C7.08337 8.02709 7.03948 8.13307 6.96134 8.21121C6.8832 8.28935 6.77721 8.33325 6.66671 8.33325H2.08337C1.97287 8.33325 1.86689 8.28935 1.78875 8.21121C1.71061 8.13307 1.66671 8.02709 1.66671 7.91659V3.33325C1.66671 3.22275 1.71061 3.11676 1.78875 3.03862C1.86689 2.96048 1.97287 2.91659 2.08337 2.91659H5.07504C5.18555 2.91659 5.29153 2.87269 5.36967 2.79455C5.44781 2.71641 5.49171 2.61043 5.49171 2.49992C5.49171 2.38941 5.44781 2.28343 5.36967 2.20529C5.29153 2.12715 5.18555 2.08325 5.07504 2.08325H2.08337C1.75185 2.08325 1.43391 2.21495 1.19949 2.44937C0.96507 2.68379 0.833374 3.00173 0.833374 3.33325V7.91659C0.833374 8.24811 0.96507 8.56605 1.19949 8.80047C1.43391 9.03489 1.75185 9.16659 2.08337 9.16659H6.66671C6.99823 9.16659 7.31617 9.03489 7.55059 8.80047C7.78501 8.56605 7.91671 8.24811 7.91671 7.91659V4.92492C7.91671 4.81441 7.87281 4.70843 7.79467 4.63029C7.71653 4.55215 7.61055 4.50825 7.50004 4.50825ZM9.13337 1.09159C9.09109 0.989773 9.01019 0.908866 8.90837 0.866585C8.85828 0.845235 8.80449 0.83391 8.75004 0.833252H6.25004C6.13953 0.833252 6.03355 0.877151 5.95541 0.955291C5.87727 1.03343 5.83337 1.13941 5.83337 1.24992C5.83337 1.36043 5.87727 1.46641 5.95541 1.54455C6.03355 1.62269 6.13953 1.66659 6.25004 1.66659H7.74587L3.45421 5.95409C3.41515 5.99282 3.38416 6.0389 3.363 6.08968C3.34185 6.14045 3.33096 6.19491 3.33096 6.24992C3.33096 6.30492 3.34185 6.35938 3.363 6.41016C3.38416 6.46093 3.41515 6.50702 3.45421 6.54575C3.49294 6.58481 3.53903 6.6158 3.5898 6.63696C3.64058 6.65811 3.69504 6.669 3.75004 6.669C3.80505 6.669 3.85951 6.65811 3.91028 6.63696C3.96106 6.6158 4.00714 6.58481 4.04587 6.54575L8.33337 2.25409V3.74992C8.33337 3.86043 8.37727 3.96641 8.45541 4.04455C8.53355 4.12269 8.63953 4.16659 8.75004 4.16659C8.86055 4.16659 8.96653 4.12269 9.04467 4.04455C9.12281 3.96641 9.16671 3.86043 9.16671 3.74992V1.24992C9.16605 1.19547 9.15473 1.14168 9.13337 1.09159Z"
                            fill="#06242E"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_5650_5412">
                            <rect width="10" height="10" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
          <div className="flex flex-col justify-start items-start gap-2 p-0">
            <p className=" font-lato text-sm font-extrabold leading-5 tracking-[1px]">
              Related
            </p>
            <div className="flex flex-row justify-start items-start gap-2">
              {projectData.related.map((related, index) => {
                return (
                  <Link href={related.relatedURL} key={index} target="_blank">
                    <p className=" text-sm leading-[1.5] tracking-normal text-left font-plusjakartasans text-[#097a8e] underline">
                      {related.relatedName}
                    </p>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-start self-stretch px-6 py-8 w-full h-16">
        <hr className="border-t-[1px] self-stretch flex-grow-0 border-[#D5DEE0] w-full" />
        <ProjectUpdates />
      </div>
    </div>
  );
}
