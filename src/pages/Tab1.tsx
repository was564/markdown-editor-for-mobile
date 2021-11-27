import { IonContent, IonHeader, IonMenuButton, IonPage } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import MainToolBar from '../components/MainToolBar';

const Tab1: React.FC = () => {
  return (
    <IonPage>
        <IonHeader>
            <MainToolBar name="Tab1"/>
        </IonHeader>
        <IonContent>
            
        </IonContent>
    </IonPage>
  );
};

export default Tab1;