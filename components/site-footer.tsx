export default function SiteFooter() {
    return (
        <footer className="py-6 border-t w-[50%]">
            <div className="text-center text-sm text-muted-foreground">
                © {new Date().getFullYear()} jtobaben.me
            </div>
        </footer>
    );
}