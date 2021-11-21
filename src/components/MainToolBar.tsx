import React  from 'react';
import { IonIcon, IonToolbar, IonButtons, IonMenuButton, IonButton, IonTitle, IonHeader, IonMenuToggle } from '@ionic/react';
import { star } from 'ionicons/icons';
import SideMenu from '../pages/SideMenu'

const MainToolBar: React.FC = () => {
  return (
    <IonHeader>
      <IonToolbar>
        {/*<IonTitle>Blank</IonTitle>*/}
        <IonButtons slot="start">
          <IonMenuToggle autoHide={false} menu="sideMenu" />
        </IonButtons>
        <IonButtons slot="secondary">
          <IonButton>
            <IonIcon slot="icon-only" icon={star} />
          </IonButton>
        </IonButtons>
        <IonTitle>Left side menu toggle</IonTitle>
      </IonToolbar>
    </IonHeader>
  );
};

export default MainToolBar;