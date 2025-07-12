interface MenuItem {
    id: number;
    page:string;
    title: string;
    link: string;
    has_dropdown: boolean;
    sub_menus?: {
        link: string;
        title: string;
    }[];
}[];

const menu_data: MenuItem[] = [
    
    {
        id: 1,
        page:"nav_1",
        has_dropdown: true,
        title: "Home",
        link: "/#",
    },
    {
        id: 2,
        page:"nav_1",
        has_dropdown: false,
        title: "Features",
        link: "/#features",
    },
    {
        id: 3,
        page:"nav_1",
        has_dropdown: false,
        title: "Characters",
        link: "/#characters",
    },
    {
        id: 4,
        page:"nav_1",
        has_dropdown: true,
        title: "Reviews",
        link: "/#reviews",
    },
    {
        id: 5,
        page:"nav_1",
        has_dropdown: false,
        title: "FAQ",
        link: "/#faq",
    },
    {
        id: 6,
        page:"nav_1",
        has_dropdown: false,
        title: "Start Now",
        link: "/#startnow",
    },
];
export default menu_data;
