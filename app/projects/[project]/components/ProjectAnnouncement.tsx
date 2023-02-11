"use client";

import { ProjectDetailsCardProps } from "../../../../types";
import parse from "html-react-parser";

export default function ProjectAnnouncement({
    projectData,
}: ProjectDetailsCardProps) {
    return (
        <div className="flex flex-1 flex-col md:pl-64">
            <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                    Announcements
                </h3>
                {projectData.announcements.length > 0 ? <div className="rounded-lg bg-white shadow p-6">
                    <div className="mt-6 flow-root">
                        <ul role="list" className="-my-5 divide-y divide-gray-200">
                            {projectData.announcements.map((announcement) => (
                                <li key={projectData.name} className="py-5">
                                    <div className="relative focus-within:ring-2 focus-within:ring-indigo-500">
                                        <h3 className="text-sm font-semibold text-gray-800">
                                            <p>

                                                <span className="absolute inset-0" aria-hidden="true" />
                                                {announcement.title}
                                            </p>
                                        </h3>
                                        <div className="mt-1 text-sm text-gray-600 line-clamp-2">{parse(announcement.preview.toString())}</div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div> : <div className="px-4 py-5 sm:p-6 font-semibold opacity-80 text-gray-900 bg-gray-400 text-center">
                    No Announcements avaliable
                </div>}

            </div>
        </div>
    );
}
