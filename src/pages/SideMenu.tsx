import React from 'react';
import { IonMenu, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonRouterOutlet, IonSplitPane } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Route } from 'workbox-routing';
import MainToolBar from '../components/MainToolBar';

export const SideMenu: React.FC = () => {
  return (
    <IonMenu contentId="main">
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>Start Menu</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          <IonItem slot="start">Menu Item</IonItem>
          <IonItem slot="start">Menu Item</IonItem>
          <IonItem slot="start">Menu Item</IonItem>
          <IonItem slot="start">Menu Item</IonItem>
          <IonItem slot="start">Menu Item</IonItem>
        </IonList>
      </IonContent>
      <IonRouterOutlet>

      </IonRouterOutlet>
    </IonMenu>
  );
};

export default SideMenu;