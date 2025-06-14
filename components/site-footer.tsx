export default function SiteFooter() {
    const gitCommitSha = process.env.VERCEL_GIT_COMMIT_SHA;
    const commitId = gitCommitSha?.substring(0, 7) || "unknown";

    return (
        <footer className="py-6 border-t w-[50%]">
            <div className="text-center text-sm text-muted-foreground">
                <p className="text-neutral-400 text-sm">
                    git <a href={`https://github.com/RECHERGG/portfolio/${gitCommitSha ? `commit/${gitCommitSha}` : ""} `} className="underline" target="_blank" rel="noopener noreferrer">{commitId}</a>
                </p>
                <br />
                Made with 💖 by Joel Tobaben <br />
                © {new Date().getFullYear()} All rights reserved
            </div>
        </footer>
    );
}