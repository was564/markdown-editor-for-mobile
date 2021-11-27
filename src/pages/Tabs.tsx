import { IonContent, IonHeader, IonMenuButton, IonPage } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import MainTabs from '../components/MainTabs';
import MainToolBar from '../components/MainToolBar';
import SideMenu from './SideMenu';

const Tabs: React.FC = () => {
  return (
    <IonPage id="main">
      <MainTabs />
      <IonHeader>
        <MainToolBar name="Tabs"/>
      </IonHeader>
      <IonContent>
        <strong>Select Tab of Tabs.</strong>
      </IonContent>
    </IonPage>
  );
};

export default Tabs;
