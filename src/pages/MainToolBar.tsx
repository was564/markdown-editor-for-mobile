import React  from 'react';
import { IonIcon, IonToolbar, IonButtons, IonMenuButton, IonButton, IonTitle, IonHeader } from '@ionic/react';
import { star } from 'ionicons/icons';

interface MainTabsProps { }

const MainTabs: React.FC<MainTabsProps> = () => {
  return (
    <IonHeader>
      <IonToolbar>
        {/*<IonTitle>Blank</IonTitle>*/}
        <IonButtons slot="start">
          <IonMenuButton autoHide={false} />
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

export default MainTabs;