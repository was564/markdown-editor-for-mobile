import { IonContent, IonPage } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';
import MainTabs from '../components/MainTabs';
import MainToolBar from '../components/MainToolBar';
import SideMenu from './SideMenu';

const Home: React.FC = () => {
  return (
    <IonPage id="mainContent">
      <MainTabs />
      <MainToolBar />
      <IonContent fullscreen>
        <ExploreContainer />
      </IonContent>
    </IonPage>
  );
};

export default Home;
