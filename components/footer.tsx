import {Button} from "@/components/ui/button";
import {DiscordLogoIcon, LinkedInLogoIcon} from "@radix-ui/react-icons";

export default function Footer() {

    const gitCommitSha = process.env.VERCEL_GIT_COMMIT_SHA;
    const commitId = gitCommitSha?.substring(0, 7) || "unknown";

    return (
        <div className="flex items-center justify-between p-4">
            <div className="pl-96 text-gray-300">
                <p>Copyright © {new Date().getFullYear()} Joel Tobaben</p>
            </div>
            <p className="text-neutral-400 text-sm">
                Version - {commitId}
            </p>
            <div className="pr-96 space-x-2">
                <a href="https://discordapp.com/users/697131095015293009" target="_blank">
                    <Button variant="outline" size="icon">
                        <DiscordLogoIcon className="h-4 w-4"/>
                    </Button>
                </a>
                <a href="https://www.linkedin.com/in/joel-tobaben" target="_blank">
                    <Button variant="outline" size="icon">
                        <LinkedInLogoIcon className="h-4 w-4"/>
                    </Button>
                </a>
            </div>
        </div>
    )
}
