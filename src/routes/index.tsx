import { NavigationContainer } from "@react-navigation/native";
import { TabRoutes } from "./tabs.routes";
import { UserProvider } from '../context/UserContext';



export function Routes(){
    return(
        <UserProvider>
            <NavigationContainer>
                <TabRoutes/>
            </NavigationContainer>
        </UserProvider>
    );
}