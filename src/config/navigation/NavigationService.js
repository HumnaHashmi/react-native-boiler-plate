import { createRef } from 'react';
import { CommonActions, DrawerActions } from '@react-navigation/native';

export const navigationRef = createRef();

const navigate = (name, params) => {
  navigationRef.current?.dispatch(CommonActions.navigate({ name, params }));
};

const goBack = () => {
  navigationRef.current?.dispatch(CommonActions.goBack());
};

const resetStack = name => {
  navigationRef.current?.dispatch(
    CommonActions.reset({ index: 0, routes: [{ name }] }),
  );
};

const openDrawer = () =>
  navigationRef.current?.dispatch(DrawerActions.openDrawer());
const closeDrawer = () =>
  navigationRef.current?.dispatch(DrawerActions.closeDrawer());

export const NavigationService = {
  navigate,
  goBack,
  resetStack,
  openDrawer,
  closeDrawer,
};
