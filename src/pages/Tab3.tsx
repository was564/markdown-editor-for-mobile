import { IonContent, IonHeader, IonMenuButton, IonPage } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import MainToolBar from '../components/MainToolBar';

const Tab3: React.FC = () => {
  return (
    <IonPage>
        <IonHeader>
            <MainToolBar name="Tab3"/>
        </IonHeader>
        <IonContent>
            
        </IonContent>
    </IonPage>
  );
};

export default Tab3;