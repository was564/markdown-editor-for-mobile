import React from 'react';
import { IonMenu, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonRouterOutlet } from '@ionic/react';
import './common.css';

export const SideMenu: React.FC = () => (
  <>
    <IonMenu side="start" menuId="sideMenu" contentId='mainContent' >
      
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>Start Menu</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          <IonItem slot="start" >Menu Item</IonItem>
          <IonItem slot="start" >Menu Item</IonItem>
          <IonItem slot="start" >Menu Item</IonItem>
          <IonItem slot="start" >Menu Item</IonItem>
          <IonItem slot="start" >Menu Item</IonItem>
        </IonList>
      </IonContent>
      <IonRouterOutlet>
        
      </IonRouterOutlet>
    </IonMenu>
  </>
)

export default SideMenu;