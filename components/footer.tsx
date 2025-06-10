import {Button} from "@/components/ui/button";
import {DiscordLogoIcon, LinkedInLogoIcon} from "@radix-ui/react-icons";

export default function Footer() {
    return (
        <div className="flex items-center justify-between p-4">
            <div className="pl-96 text-gray-300">
                <p>Copyright © {new Date().getFullYear()} Joel Tobaben</p>
            </div>
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
