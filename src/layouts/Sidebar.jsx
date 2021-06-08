import React from "react";
import {  Menu } from "semantic-ui-react";

export default function Sidebar() {
  return (
    <div>
      <Menu pointing vertical>
        <Menu.Item name="Dashboard" />
        <Menu.Item name="İş İlanları" />
        <Menu.Item name="İş Verenler" />
        <Menu.Item name="İş Arayanlar" />
      </Menu>
    </div>
  );
}
