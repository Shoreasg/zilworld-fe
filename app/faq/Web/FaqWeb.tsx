"use client";
import { Disclosure } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

const faqs = [
  {
    question: "What is Zilworld and what is its purpose?",
    answer:
      "Zilworld is a website that provides information about the projects building in the Zilliqa ecosystem. It is designed for individuals who are new to Zilliqa and want to learn more about the projects in the ecosystem.",
  },
  {
    question: "How can I get my project listed on Zilworld?",
    answer:
      "To get your project listed on Zilworld, you can reach out to @shorea_sg on Twitter.",
  },

  // {
  //   question: "Where does Zilworld get its token statistics",
  //   answer:
  //     "Zilworld gets its token statistics from Zilstream. For more in-depth statistics, visit https://zilstream.com/.",
  // },
  {
    question: "Do you accept donations?",
    answer:
      "Yes, Please donate to zil1pytaesxsedaw7rvvcx2qwx58n74wpfywckde6s. Donation will contribute to the development of our site",
  },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function FaqWeb() {
  return (
      <div className="flex flex-col justify-start items-start gap-2 p-0 w-full mx-14 mt-14">
        <div className=" font-plusjakartasans text-sm text-right text-[#143e4a] tracking-[1px] font-extrabold">
          FREQUENTLY ASKED QUESTIONS
        </div>
        <div className="flex flex-row">
          <div className=" font-plusjakartasans text-xl font-extrabold leading-[1.4] text-right text-[#06242e]">
          Connect On Twitter If You Have Additional Questions
          </div>
        </div>
        <hr className="border-t-[1px] border-[#D5DEE0] w-full" />
        <dl className="space-y-6 divide-y divide-gray-200 ml-8 w-1/2">
            {faqs.map((faq) => (
              <Disclosure as="div" key={faq.question} className="pt-4">
                {({ open }) => (
                  <>
                    <dt className="text-lg">
                      <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-400">
                        <span className="font-bold leading-normal text-[#06242e] font-plusjakartasans text-lg">
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
                      <p className="font-plusjakartasans leading-relaxed text-left text-[#143e4a] text-base">{faq.answer}</p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
      </div>
  );
}
