'use client'
import { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'
const Categories = [
    { id: 1, name: 'All Projects' },
    { id: 2, name: 'Wallets' },
    { id: 3, name: 'DEX' },
    { id: 4, name: 'NFT' },
    { id: 5, name: 'Analytics' },
    { id: 6, name: 'NFT MarketPlace' },
    { id: 7, name: 'Watch' },
    { id: 8, name: 'Games' },
    { id: 9, name: 'Music' },
    { id: 10, name: 'News' },
    { id: 11, name: 'Funds' },
    { id: 12, name: 'Bridges' },
    { id: 13, name: 'Message' },
    { id: 14, name: 'Finance' },
    { id: 15, name: 'Create' },
    { id: 16, name: 'Decentralized Identity' },
    { id: 17, name: 'Liquid Staking' },
    { id: 18, name: 'Ecommerce' },
    { id: 19, name: 'Education' },
    { id: 20, name: 'Developer Tools' },
]

type FilterMenuProps = {
    selected: string;
    setCategories: (catName: string) => void;
};

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

export default function FilterMenu({ selected, setCategories }: FilterMenuProps) {
    return (
        <>
            <div className='md:hidden'>
                <Listbox value={selected} onChange={(selectedValue) => setCategories(selectedValue)}>
                    {({ open }) => (
                        <div className='flex flex-row justify-center mt-2 mb-6'>
                            <div className="relative mt-1">
                                <Listbox.Button className="relative w-fit cursor-default rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 text-left shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm">
                                    <span className="block truncate">{selected}</span>
                                    <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                        <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                                    </span>
                                </Listbox.Button>

                                <Transition
                                    show={open}
                                    as={Fragment}
                                    leave="transition ease-in duration-100"
                                    leaveFrom="opacity-100"
                                    leaveTo="opacity-0"
                                >
                                    <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-40 overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                        {Categories.map((Categories) => (
                                            <Listbox.Option
                                                key={Categories.id}
                                                className={({ active }) =>
                                                    classNames(
                                                        active ? 'text-white bg-indigo-600' : 'text-gray-900',
                                                        'relative cursor-default select-none py-2 pl-3 pr-9 '
                                                    )
                                                }
                                                value={Categories.name}
                                            >
                                                {({ selected, active }) => (
                                                    <>
                                                        <span className={classNames(selected ? 'font-semibold' : 'font-normal', 'block whitespace-nowrap')}>
                                                            {Categories.name}
                                                        </span>

                                                        {selected ? (
                                                            <span
                                                                className={classNames(
                                                                    active ? 'text-white' : 'text-indigo-600',
                                                                    'absolute inset-y-0 right-0 flex items-center pr-4'
                                                                )}
                                                            >
                                                                <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                                            </span>
                                                        ) : null}
                                                    </>
                                                )}
                                            </Listbox.Option>
                                        ))}
                                    </Listbox.Options>
                                </Transition>
                            </div>
                        </div>
                    )}
                </Listbox>
            </div>
            <div className='hidden md:grid grid-cols-4 gap-4 mb-10 mr-4'>
                {Categories.map((category) => {
                    return (
                        <button key={category.id} onClick={() => setCategories(category.name)} className={selected === category.name ? "inline-flex justify-center items-center rounded border border-transparent bg-[#077a8f] px-2.5 py-1.5 text-xs font-medium text-white shadow-sm hover:bg-[#077a8f] focus:outline-none focus:ring-2 focus:ring-[#077a8f] focus:ring-offset-2"
                            : "inline-flex items-center justify-center rounded border border-gray-300 bg-white px-2.5 py-1.5 text-xs font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#077a8f] focus:ring-offset-2"}>
                            {category.name}
                        </button>
                    )
                })}
            </div>
        </>
    )
}
