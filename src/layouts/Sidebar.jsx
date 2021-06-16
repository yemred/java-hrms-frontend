import React from "react";
import { Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";

export default function SideBar() {
  return (
    <div>
      <Menu pointing vertical>
        <Menu.Item name="Anasayfa" as={ Link } to='/'/>
        <Menu.Item name="İş Verenler" as={ Link } to='/employer'/>
        <Menu.Item name="İş Arayanlar" as={ Link } to='/unemployed' />
        <Menu.Item name="İş İlanı Paylaş" as={ Link } to='/sharejobadvertisement' />
       
      </Menu>
    </div>
  );
}

//<Link to={`/jobadvertisement`}>Anasayfa</Link>