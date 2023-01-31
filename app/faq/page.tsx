"use client";
import { Disclosure } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

const faqs = [
  {
    question: "What is Zilworld and what is its purpose??",
    answer:
      "Zilworld is a website that provides information about the projects building in the Zilliqa ecosystem. It is designed for individuals who are new to Zilliqa and want to learn more about the projects in the ecosystem.",
  },
  {
    question: "How can I get my project listed on Zilworld?",
    answer:
      "To get your project listed on Zilworld, you can reach out to @shorea_sg on Twitter.",
  },

  {
    question: "Where does Zilworld get its token statistics",
    answer:
      "Zilworld gets its token statistics from Zilstream. For more in-depth statistics, visit https://zilstream.com/.",
  },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Faq() {
  return (
    <div className="flex flex-1 flex-col md:pl-64">
      <div className="mx-auto py-6 max-w-7xl px-4 sm:px-6 md:px-8 flex justify-center">
        <div className="mx-auto max-w-3xl divide-y-2 divide-gray-200">
          <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Frequently asked questions
          </h2>
          <dl className="mt-6 space-y-6 divide-y divide-gray-200">
            {faqs.map((faq) => (
              <Disclosure as="div" key={faq.question} className="pt-6">
                {({ open }) => (
                  <>
                    <dt className="text-lg">
                      <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-400">
                        <span className="font-medium text-gray-900">
                          {faq.question}
                        </span>
                        <span className="ml-6 flex h-7 items-center">
                          <ChevronDownIcon
                            className={classNames(
                              open ? "-rotate-180" : "rotate-0",
                              "h-6 w-6 transform"
                            )}
                            aria-hidden="true"
                          />
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as="dd" className="mt-2 pr-12">
                      <p className="text-base text-gray-700">{faq.answer}</p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
