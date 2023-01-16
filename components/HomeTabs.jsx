import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Drinks, Foods, Pastery } from '.';
import { colors } from './shared';

const Tab = createMaterialTopTabNavigator();

const HomeTabs = () => {
    return (
        <Tab.Navigator screenOptions={{
            tabBarInactiveTintColor: colors.gray,
        }}>
            {/* Foods Screen */}
            <Tab.Screen options={{
                tabBarActiveTintColor: colors.primary,
                tabBarIndicatorStyle: {
                    backgroundColor: colors.primary
                },
                tabBarLabelStyle: {
                    fontFamily: "SF-Pro-Rounded-Regular",
                    fontSize: 17,
                    textTransform: "capitalize"
                },
                tabBarStyle: {
                    backgroundColor: colors.bgGray,
                    elevation: 0,
                    shadowColor: "transparent",
                }
            }} name="Foods" component={Foods} />

            {/* Drinks Screeen */}
            <Tab.Screen  options={{
                tabBarActiveTintColor: colors.primary,
                tabBarLabelStyle: {
                    fontFamily: "SF-Pro-Rounded-Regular",
                    fontSize: 17,
                    textTransform: "capitalize"
                },
                tabBarIndicatorStyle: {
                    backgroundColor: colors.primary
                },
                tabBarLabelStyle: {
                    fontFamily: "SF-Pro-Rounded-Regular",
                    fontSize: 17,
                    textTransform: "capitalize"
                },
                tabBarStyle: {
                    backgroundColor: colors.bgGray,
                    elevation: 0,
                    shadowColor: "transparent"
                }
            }} name="Drinks" component={Drinks} />

            {/* Pasteries Screen */}
            <Tab.Screen options={{
                tabBarActiveTintColor: colors.primary,
                tabBarIndicatorStyle: {
                    backgroundColor: colors.primary
                },
                tabBarLabelStyle: {
                    fontFamily: "SF-Pro-Rounded-Regular",
                    fontSize: 17,
                    textTransform: "capitalize"
                },
                tabBarStyle: {
                    backgroundColor: colors.bgGray,
                    elevation: 0,
                    shadowColor: "transparent"
                }
            }} name="Pastery" component={Pastery} />
        </Tab.Navigator>
    )
}


export default HomeTabs;