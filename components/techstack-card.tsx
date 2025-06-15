import Image from "next/image";

type TechStack = {
    name: string,
    type: string,
    src: string
}

export default function TechStackCard({ techStack }: { techStack: TechStack }) {
    return (
        <div className="dark:bg-neutral-900 bg-neutral-100 rounded-lg flex items-center p-4 gap-4 dark:hover:bg-neutral-700 hover:bg-neutral-200 border hover:border-gray-500 transition select-none">
            <Image src={techStack.src} alt={techStack.name} width={100} height={100} className="w-12 h-12 dark:bg-neutral-800 bg-neutral-300 rounded-md p-2" />
            <div>
                <p className="text-neutral-900 dark:text-white leading-tight">{techStack.name}</p>
                <span className="text-neutral-600 dark:text-neutral-400 text-sm">{techStack.type}</span>
            </div>
        </div>
    );
};