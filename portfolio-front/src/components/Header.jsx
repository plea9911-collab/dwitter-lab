import { useState, useEffect } from 'react';
import Logo from "./header/Logo.jsx";
import ToggleButton from "./header/ToggleButton.jsx";
import MenuList from "./commons/MenuList.jsx";
import { getfetchData } from "../util/fetch.js";

export default function Header() {
    const [data, setData] = useState({});
    useEffect(()=> {
        const fetchData = () => {
            const jsonData = await getfetchData("/header");
            setData(jsonData.result);
        }
        fetchData();
    }, []);

    // console.log(data);
    

    return (
        <header className="header">
            <Logo   img={data?.logo?.img}
                    alt="header-logo"
                    style="header-logo-img"
                    title={data?.logo?.name}
            />
            <MenuList menus={data?.menus} style="header-menu open" />
            <ToggleButton />
        </header>
    )
}