import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonIcon, IonItem, IonLabel, IonPage } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';
import MainTabs from '../components/MainTabs';
import MainToolBar from '../components/MainToolBar';
import SideMenu from './SideMenu';
import { pin, walk, warning, wifi, wine } from 'ionicons/icons';

const Home: React.FC = () => {
  return (
    <IonPage id="mainContent">
      <IonCard>
        <IonCardHeader>
          <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
          <IonCardTitle>Card Title</IonCardTitle>
        </IonCardHeader>

        <IonCardContent>
          Keep close to Nature's heart... and break clear away, once in awhile,
          and climb a mountain or spend a week in the woods. Wash your spirit
          clean.
        </IonCardContent>
      </IonCard>
      <IonCard>
        <IonCardHeader>
          <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
          <IonCardTitle>Card Title</IonCardTitle>
        </IonCardHeader>

        <IonCardContent>
          Keep close to Nature's heart... and break clear away, once in awhile,
          and climb a mountain or spend a week in the woods. Wash your spirit
          clean.
        </IonCardContent>
      </IonCard>
      <IonCard>
        <IonCardHeader>
          <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
          <IonCardTitle>Card Title</IonCardTitle>
        </IonCardHeader>

        <IonCardContent>
          Keep close to Nature's heart... and break clear away, once in awhile,
          and climb a mountain or spend a week in the woods. Wash your spirit
          clean.
        </IonCardContent>
      </IonCard>
      <IonCard>
        <IonCardHeader>
          <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
          <IonCardTitle>Card Title</IonCardTitle>
        </IonCardHeader>

        <IonCardContent>
          Keep close to Nature's heart... and break clear away, once in awhile,
          and climb a mountain or spend a week in the woods. Wash your spirit
          clean.
        </IonCardContent>
      </IonCard>
    </IonPage>
  );
};

export default Home;
