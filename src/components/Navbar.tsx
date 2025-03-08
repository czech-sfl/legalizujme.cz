export default function Navbar() {
    const links = [
        { name: "úvod", href: "#" },
        { name: "program", href: "#program" },
        { name: "řečníci", href: "#speakers" },
        { name: "o nás", href: "#about-us" },
        { name: "minulé ročníky", href: "#past-years" },
        { name: "partneři", href: "#partners" },
        { name: "vstupenky", href: "#tickets" },
    ];

    return (
        <div className="flex justify-center sticky top-0 z-10 backdrop-blur-3xl bg-[#ffffffb0]">
            <div className="flex justify-between max-w-6xl p-4">
                {links.map((link) => (
                    <a
                        key={link.href}
                        href={link.href}
                        className="p-4"
                    >
                        {link.name}
                    </a>
                ))}
            </div>
        </div>
    );
}