import React, { Component, useState, useEffect, Fragment } from 'react';
import { Header, Icon, List, Container } from 'semantic-ui-react';
import axios from 'axios';
import { IActivity } from '../models/activity';
import NavBar from '../../features/nav/NavBar';
import ActivityDashboard from '../../features/nav/activities/dashboard/ActivityDashboard';

// Classic React
// interface Istate {
//    activities: IActivity[];
// }
// // component can take a "Type" paramater
// class App extends Component<{}, Istate> {
//    readonly state: Istate = {
//       // readonly to mutate state for protection
//       activities: []
//    };

//React Hooks

const App = () => {
   const [activities, setActivities] = useState<IActivity[]>([]);

   useEffect(
      () => {
         axios
            .get<IActivity[]>('http://localhost:5000/api/activities')
            .then(response => {
               setActivities(response.data);
            });
      },
      // this to stop the coninues render
      []
   );

   //    componentDidMount() {
   //       axios
   //          .get<IActivity[]>('http://localhost:5000/api/activities')
   //          .then(response => {
   //             this.setState({
   //                activities: response.data
   //             });
   //          });
   //    }
   //    render() {
   return (
      <Fragment>
         <NavBar />
         <Container style={{ marginTop: '7em' }}>
            <ActivityDashboard activities={activities} />
         </Container>
      </Fragment>
   );
};
// }

export default App;
