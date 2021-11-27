import { IonContent, IonHeader, IonMenuButton, IonPage } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import MainToolBar from '../components/MainToolBar';

const Tab2: React.FC = () => {
  return (
    <IonPage>
        <IonHeader>
            <MainToolBar name="Tab2"/>
        </IonHeader>
        <IonContent>
            
        </IonContent>
    </IonPage>
  );
};

export default Tab2;