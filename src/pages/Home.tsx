import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButtons, IonButton, IonMenuButton, IonIcon, IonFooter, IonTabs, IonTabBar, IonTabButton, IonLabel, IonBadge, IonRouterOutlet } from '@ionic/react';
import { personCircle, star, calendar, map } from 'ionicons/icons';
import { Redirect } from 'react-router';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';
import MainTabs from './MainTabs';
import MainTollBar from './MainToolBar';

const Home: React.FC = () => {
  return (
    <IonPage>
      <MainTabs />
      <MainTollBar />
      <IonContent fullscreen>
        <ExploreContainer />
      </IonContent>
    </IonPage>
  );
};

export default Home;
