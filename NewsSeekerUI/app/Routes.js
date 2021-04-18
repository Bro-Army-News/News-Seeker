import React from "react";
import { Router, Scene } from "react-native-router-flux";
import WelcomeScreen from "./screens/WelcomeScreen";
import SignUp from "./screens/SignUp.js";
import Login from "./screens/Login.js";
import Tabs from "./TabRoutes";
import DiscussionForumChat from "./screens/DiscussionForumChat";

const Routes = () => (
  <Router>
    <Scene key="root">
      <Scene
        key="welcome"
        component={WelcomeScreen}
        title="Welcome"
        initial={true}
        headerShown={false}
      />
      <Scene
        key="signup"
        component={SignUp}
        title="SignUp"
        headerShown={false}
      />
      <Scene key="login" component={Login} title="Login" headerShown={false} />
      <Scene
        key="home"
        component={Tabs}
        title="NewsSeeker"
        headerShown={false}
      />
      <Scene
        key="discussionForumChat"
        component={DiscussionForumChat}
        title="Discussion"
        headerShown={false}
      />
    </Scene>
  </Router>
);

export default Routes;
