"use client";

import { Disclosure } from "@headlessui/react";
import { InformationCircleIcon } from "@heroicons/react/24/outline";

export default function Note() {
  return (
    <Disclosure>
      {({ open }) => (
        <>
          <div className="flex flex-row justify-center">
            <Disclosure.Button className="flex w-fit justify-center rounded-lg px-4 py-2 text-left text-sm font-medium text-red-500 hover:bg-red-200 focus:outline-none focus-visible:ring focus-visible:ring-red-500 focus-visible:ring-opacity-75">
              <span className="flex flex-row justify-center">
                <InformationCircleIcon
                  className="h-5 w-5 text-red-400"
                  aria-hidden="true"
                />
              </span>
            </Disclosure.Button>
          </div>
          <div className="flex flex-row justify-center">
            <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-red-500 text-center">
              Please note that listing entities and applications on this site
              does not imply an endorsement by ZilWorld or Zilliqa in any way,
              nor does it constitute an official statement or affiliation with
              either organization. It is important to conduct independent due
              diligence before engaging with or using any Dapps listed on this
              site, and to not rely solely on the information provided. ZilWorld
              and Zilliqa take no responsibility for the accuracy of the
              information provided by the entities, projects, or applications
              listed on this site. ZilWorld is providing this site and its
              information as a resource for all users of the Zilliqa blockchain
              and those seeking to further engage with Zilliqa through
              applications and projects, or otherwise be connected with other
              developers and projects within the Zilliqa ecosystem. ZilWorld may
              update or stop supporting this site at any time as necessary.
            </Disclosure.Panel>
          </div>
        </>
      )}
    </Disclosure>
  );
}
