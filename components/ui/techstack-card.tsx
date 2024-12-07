import Image from "next/image";

type TechStack = {
    name: string,
    type: string,
    src: string
}

export default function TechStackCard({ techStack }: { techStack: TechStack }) {
    return (
        <div className="bg-neutral-900 rounded-lg flex items-center p-4 gap-4 hover:bg-neutral-700 transition">
            <Image src={techStack.src} alt={techStack.name} width={100} height={100} className="w-12 h-12 bg-neutral-800 rounded-md p-2" />
            <div>
                <p className="text-white leading-tight">{techStack.name}</p>
                <span className="text-neutral-400 text-sm">{techStack.type}</span>
            </div>
        </div>
    );
};
