import React  from 'react';
import { IonIcon, IonToolbar, IonButtons, IonMenuButton, IonButton, IonTitle, IonHeader, IonMenuToggle } from '@ionic/react';
import { star } from 'ionicons/icons';

const MainToolBar: React.FC<{ name: string }> = ({ name }) => {
  return (
    <IonToolbar>
      <IonButtons slot="start">
        <IonMenuButton />
      </IonButtons>
      <IonButtons slot="secondary">
        <IonButton>
          <IonIcon slot="icon-only" icon={star} />
        </IonButton>
      </IonButtons>
      <IonTitle>{name}</IonTitle>
    </IonToolbar>
  );
};

export default MainToolBar;