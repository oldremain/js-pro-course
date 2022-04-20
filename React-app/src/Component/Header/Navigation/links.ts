type LinksType = {
    name: string;
    path: string;
    className?: string;
};

const LINKS: Array<LinksType> = [
    {
        name: "header.nav.link.home",
        path: "/",
    },
    {
        name: "header.nav.link.posts",
        path: "/posts",
    },
    {
        name: "header.nav.link.registration",
        path: "/registration",
        className: "_registration",
    },
    {
        name: "header.nav.link.login",
        path: "/login",
    },
];

export default LINKS;
