import React, { useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  Home,
  Task,
  Chat,
  CalendarScreen,
  CreateTask,
} from '../../screen/Dashboard';
import TabBar from './TabBar';
import FabModal from './FabModal';

const Tab = createBottomTabNavigator();

const BottomTabs=()=> {
  const [isModalOpen, setIsModalOpen] = useState(false);


  return (
    <>
      <Tab.Navigator
        screenOptions={{ headerShown: false }}
        tabBar={props => (
          <TabBar {...props} onFabPress={() => setIsModalOpen(true)} />
        )}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Task" component={Task} />
        <Tab.Screen name="CreateTask" component={CreateTask} />
        <Tab.Screen name="Chat" component={Chat} />
        <Tab.Screen name="Calendar" component={CalendarScreen} />
      </Tab.Navigator>
      <FabModal visible={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <CreateTask onClose={() => setIsModalOpen(false)} />
      </FabModal>
    </>
  );
}
export default BottomTabs