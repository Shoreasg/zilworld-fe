'use client'
import { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'

const Categories = [
    { id: 1, name: 'All Projects' },
    { id: 2, name: 'Wallets' },
    { id: 3, name: 'DEX' },
    { id: 4, name: 'NFT' },
    { id: 5, name: 'Analytics & Dashboard' },
    { id: 6, name: 'NFT Marketplace' },
    { id: 7, name: 'Watch' },
    { id: 8, name: 'Games' },
    { id: 9, name: 'Music' },
    { id: 10, name: 'News & Infographics' },
    { id: 11, name: 'Initial Liquidity Offering & Grants' },
    { id: 12, name: 'Bridges' },
    { id: 13, name: 'Messaging' },
    { id: 14, name: 'Finance' },
    { id: 15, name: 'Create' },
    { id: 16, name: 'Decentralized Identity' },
    { id: 17, name: 'Liquid Staking' },
    { id: 18, name: 'Ecommerce' },
    { id: 19, name: 'Education' },
    { id: 20, name: 'Developer Tools' },
]

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}
type FilterMenuProps = {
    selected: string;
    setCategories: (catName:string) => void;
  };

export default function FilterMenu({selected, setCategories}:FilterMenuProps) {



    return (
        <Listbox value={selected} onChange={(selectedValue)=>setCategories(selectedValue)}>
            {({ open }) => (
                <div className='flex flex-row justify-center mt-2 mb-6'>
                    <Listbox.Label className="flex flex-col justify-center text-sm font-medium text-gray-700 mr-3">Filter by Category</Listbox.Label>
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
    )
}
