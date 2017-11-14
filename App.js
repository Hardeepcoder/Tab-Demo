import {TabNavigator} from "react-navigation";

//import your tabs js file
import Screen1 from "./tabs/screen1";
import Screen2 from "./tabs/screen2";
import Screen3 from "./tabs/screen3";

var myTabs = TabNavigator({
	// here you will define your screen-tabs
	Home: {screen:Screen1},
	Shopping: {screen:Screen2},
	Cart: {screen:Screen3}
},
{
  tabBarPosition: 'bottom',
  animationEnabled: true,
  tabBarOptions: {
    activeTintColor: 'red',
  }
  });

export default myTabs;