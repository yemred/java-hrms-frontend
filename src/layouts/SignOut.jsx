import React from "react";
import { Button, Menu } from "semantic-ui-react";

export default function SignOut({signIn}) {
  return (
    <div>
      <Menu.Item>
        <Button onClick={signIn} positive>
          Giriş Yap
        </Button>
        <Button primary style={{ marginLeft: "0.5em" }}>
          Kayıt Ol
        </Button>
      </Menu.Item>
    </div>
  );
}
