import React  from 'react';
import { IonTabs, IonRouterOutlet, IonTabBar, IonTabButton, IonIcon, IonLabel, IonBadge } from '@ionic/react';
import { Redirect, Route } from 'react-router-dom';
import { newspaperOutline, createOutline, map, personOutline } from 'ionicons/icons';
import { IonReactRouter } from '@ionic/react-router';
import Tab1 from '../pages/Tab1';
import Tab2 from '../pages/Tab2';
import Tab3 from '../pages/Tab3';

const MainTabs: React.FC = () => {
  return (
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route exact path="/tabs/tab1">
            <Tab1 />
          </Route>
          <Route exact path="/tabs/tab2">
            <Tab2 />
          </Route>
          <Route exact path="/tabs/tab3">
            <Tab3 />
          </Route>
          <Redirect exact path="/tabs" to="/tabs/tab1" />
        </IonRouterOutlet>

        <IonTabBar slot="bottom">
          <IonTabButton tab="tab1" href="/tabs/tab1">
            <IonIcon icon={newspaperOutline} />
            <IonLabel>Posts</IonLabel>
          </IonTabButton>

          <IonTabButton tab="tab2" href="/tabs/tab2">
            <IonIcon icon={createOutline} />
            <IonLabel>Writing</IonLabel>
          </IonTabButton>

          <IonTabButton tab="tab3" href="/tabs/tab3">
            <IonIcon icon={personOutline} />
            <IonLabel>My</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  );
};

export default MainTabs;