import React, { useState, useEffect } from 'react';
import AppNavigation from "./AppNavigation";
import OnboardingNavigation from "./OnboardingNavigation";
import { createSwitchNavigator, createAppContainer} from "react-navigation";
import { NavigationContainer } from '@react-navigation/native'
import OnboardingStackComponent from '../components/OnboardingStackComponent';


const RootSwitch = createSwitchNavigator(
    {
      Onboarding: {
        screen: OnboardingStackComponent,
      },
      App: {
        screen: AppNavigation,
      },
    },
    {
        initialRouteName: 'Onboarding'
    } // Here we can define navigation options, we'll have a look later.
  );

  const RootNavigator = createAppContainer(RootSwitch)

  export default class RootNavigation extends React.Component {
    render() {
      return <RootNavigator/>;
    }
  }