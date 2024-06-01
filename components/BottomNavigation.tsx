import * as React from "react";
import { View } from "react-native";
import TabBar, {
  FluidNavigator,
  Route,
} from "enhanced-fluid-bottom-navigation-bar";

interface Props {
  navigation: FluidNavigator;
  onTabPress: (route: Route) => void;
}

class FluidTabBar extends React.Component<Props> {
  render() {
    return (
      <View>
        <TabBar
          onPress={(tabIndex: number) => {
            const route = this.props.navigation.state.routes[tabIndex];
            this.props.onTabPress(route);
          }}
          values={[
            {
              title: "Home",
              icon: "home",
              iconSet: "AntDesign",
              size: 32,
            },
            {
              title: "My Teams",
              icon: "users",
              iconSet: "FontAwesome",
              size: 32,
            },
            {
              title: "Attendance",
              icon: "list-alt",
              iconSet: "FontAwesome",
              size: 32,
            },
            {
              title: "Notification",
              icon: "bell",
              iconSet: "FontAwesome",
              size: 32,
            },
            {
              title: "More",
              icon: "appstore-o",
              iconSet: "AntDesign",
              size: 32,
            },
          ]}
        />
      </View>
    );
  }
}

export default FluidTabBar;
