import React from 'react';
import { Pressable, Text, View } from 'react-native';
import BackgroundService from 'react-native-background-actions';
import Home from './src/components/Home';

const sleep = (time: any) => new Promise<void>((resolve) => setTimeout(() => resolve(), time));



const App = () => {
  const veryIntensiveTask = async (taskDataArguments: any) => {
    // Example of an infinite loop task
    const { delay } = taskDataArguments;
    await new Promise(async (resolve) => {
      for (let i = 0; BackgroundService.isRunning(); i++) {
        console.log(i);
        await sleep(delay);
      }
    });
  };
  const options = {
    taskName: 'Data App',
    taskTitle: 'App is Running',
    taskDesc: 'ExampleTask description',
    taskIcon: {
      name: 'ic_launcher',
      type: 'mipmap',
    },
    color: '#ff00ff',
    linkingURI: 'yourSchemeHere://chat/jane', // See Deep Linking for more info
    parameters: {
      delay: 1000,
    },
  };

  const startBackGround = async () => {
    await BackgroundService.start(veryIntensiveTask, options);
    await BackgroundService.updateNotification({ taskDesc: 'New ExampleTask description' });
  }
  const stopBackgroundService = async () => {
    await BackgroundService.stop();
  }
  return (
    <>
      <View style={{ flexDirection: 'row', justifyContent: 'space-around', paddingVertical: 12 }}>
        <Pressable onPress={startBackGround} style={{
          height: 40, width: 120, backgroundColor: 'green',
          alignItems: 'center',
          justifyContent:'center'
        }}><Text>Start</Text></Pressable>
        <Pressable onPress={stopBackgroundService} 
         style={{
          height: 40, width: 120, backgroundColor: 'red',
          alignItems: 'center',
          justifyContent:'center'
        }}><Text>Stop</Text></Pressable>
      </View>
      <Home />
    </>
  )
}

export default App