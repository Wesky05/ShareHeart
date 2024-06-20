import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { Home } from "../screens/Home";
import { BellSimple, BellSimpleRinging, Globe, HandHeart, House, } from "phosphor-react-native";;
import { Comunidade } from "../screens/Comunidade";
import { Doar } from "../screens/Doar";
import { Notificacoes } from "../screens/Notificacoes";
import { Login } from "../screens/Login";
import { Cadastro } from "../screens/Cadastro";
import { Text, View } from "react-native";
import { Postar } from "../screens/Postar";
import { Perfil } from "../screens/Perfil";
import { EditarPerfil } from "../screens/EditarPerfil";

const {Navigator, Screen} = createBottomTabNavigator();

export function TabRoutes() {
    return (
        <Navigator
            initialRouteName="Login"
        
            screenOptions={{
                tabBarStyle: {
                    position: "absolute",
                    bottom: 0,
                    backgroundColor: "#FAFAFA",
                    height: 80,
                    alignItems: "center",
                    borderTopRightRadius: 30,
                    borderTopLeftRadius: 30,
                    shadowColor: "#9d9d9d80",
                shadowOffset: {
                     width: 0,
                     height: -1,
                },
                shadowRadius: 10,
                shadowOpacity: 0.5,
                elevation: 2,
                },
                headerShown: false,
                tabBarActiveTintColor: "#EB6AAF",
                tabBarInactiveTintColor: "#6A77EB",
                tabBarShowLabel: false,
            }}
        >
            <Screen 
                name="Login" 
                component={Login} 
                options={{
                tabBarButton: () => null,
                tabBarStyle: {display: "none"},
            }}/>

            <Screen 
                name="Cadastro" 
                component={Cadastro} 
                options={{
                tabBarButton: () => null,
                tabBarStyle: {display: "none"},
            }}/>

            <Screen 
                name="Home" 
                component={Home} 
                options={{
                tabBarIcon: ({focused, color}) => {
                    return(
                        <View style={{alignItems: "center", justifyContent: "center"}}>
                            {focused ? <House color={color} size={30} weight="fill"/> : <House color={color} size={30} weight="light"/>}
                            {focused ? <Text style={{color: "#EB6AAF", fontSize: 12, fontWeight: "400"}}>Home</Text> : <Text style={{color: "#6A77EB", fontSize: 12, fontWeight: "400"}}>Home</Text>}
                        </View>
                    )
                }
            }}/>
            
            <Screen 
                name="Comunidade" 
                component={Comunidade} 
                options={{
                    tabBarIcon: ({focused, color}) => {
                        return(
                            <View style={{alignItems: "center", justifyContent: "center"}}>
                                {focused ? <Globe color={color} size={30} weight="regular"/> : <Globe color={color} size={30} weight="light"/>}
                                {focused ? <Text style={{color: "#EB6AAF", fontSize: 12, fontWeight: "400"}}>Comunidade</Text> : <Text style={{color: "#6A77EB", fontSize: 12, fontWeight: "400"}}>Comunidade</Text>}
                            </View>
                        )
                    }
            }}/>

            <Screen 
                name="Doar" 
                component={Doar} 
                options={{
                    tabBarIcon: ({focused, color}) => {
                        return(
                            <View style={{alignItems: "center", justifyContent: "center"}}>
                                {focused ? <HandHeart color={color} size={30} weight="fill"/> : <HandHeart color={color} size={30} weight="light"/>}
                                {focused ? <Text style={{color: "#EB6AAF", fontSize: 12, fontWeight: "400"}}>Doar</Text> : <Text style={{color: "#6A77EB", fontSize: 12, fontWeight: "400"}}>Doar</Text>}
                            </View>
                        )
                    }
            }}/>

            <Screen 
                name="Notificacoes" 
                component={Notificacoes} 
                options={{
                    tabBarIcon: ({focused, color}) => {
                        return(
                            <View style={{alignItems: "center", justifyContent: "center"}}>
                                {focused ? <BellSimpleRinging color={color} size={30} weight="fill"/> : <BellSimple color={color} size={30} weight="light"/>}
                                {focused ? <Text style={{color: "#EB6AAF", fontSize: 12, fontWeight: "400"}}>Notificações</Text> : <Text style={{color: "#6A77EB", fontSize: 12, fontWeight: "400"}}>Notificações</Text>}
                            </View>
                        )
                    }
            }}/>

            <Screen 
                name="Postar" 
                component={Postar} 
                options={{
                tabBarButton: () => null,
                tabBarStyle: {display: "none"},
            }}/>

            <Screen 
                name="Perfil" 
                component={Perfil} 
                options={{
                tabBarButton: () => null,
                tabBarStyle: {display: "none"},
            }}/>

            <Screen 
                name="EditarPerfil" 
                component={EditarPerfil} 
                options={{
                tabBarButton: () => null,
                tabBarStyle: {display: "none"},
            }}/>

        </Navigator>
    );
}