import React, {useState} from "react";
import {  Container, Menu } from "semantic-ui-react";
import SignOut from "./SignOut";
import SignedIn from "./SignedIn";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";

export default function Navi() {

  const [isAuthenticated, setIsAuthenticated] = useState(false)

  const history = useHistory()

  function handleSignIn(params) {
    setIsAuthenticated(true);
  }

  function handleSignOut(params) {
    setIsAuthenticated(false);

    history.push("/")
  }
  
  return (
    <div>
      <Menu inverted fixed="top">
        <Container>
          <Menu.Item  name="Anasayfa" as={ Link }  to='/'/>
          <Menu.Menu position="right">
          {isAuthenticated?<SignedIn signOut={handleSignOut} />:<SignOut signIn={handleSignIn}/>}      
          </Menu.Menu>
        </Container>
      </Menu>
    </div>
  );
}
