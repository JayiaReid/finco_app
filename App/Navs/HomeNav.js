import { createStackNavigator } from "@react-navigation/stack"

const Stack = createStackNavigator()

import React from 'react'
import Home from "../Screen/Home"
import Login from "../Screen/Login"
import SignUp from "../Screen/SignUp"
import Budgets from "../Screen/Budgets"
import BudgetPage from "../Screen/Budget"

const HomeNav = () => {
  return (
    
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="home" component={Home} />
            <Stack.Screen name="login" component={Login} />
            <Stack.Screen name="signup" component={SignUp} />
            <Stack.Screen name="budgets" component={Budgets} />
            <Stack.Screen name="budget" component={BudgetPage} />
        </Stack.Navigator>
    
  )
}

export default HomeNav