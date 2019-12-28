import React from 'react';
import { Grid, List } from 'semantic-ui-react';
import { IActivity } from '../../../../app/models/activity';
import ActivityList from './ActivityList';

interface Iprops {
   activities: IActivity[];
}

const ActivityDashboard: React.FC<Iprops> = ({ activities }) => {
   return (
      <Grid>
         <Grid.Column width={10}>
            {/* <List>
               {activities.map(activity => (
                  <List.Item key={activity.id}>{activity.title}</List.Item>
               ))}
            </List> */}
            <ActivityList activities = {activities}/>
         </Grid.Column>
      </Grid>
   );
};

export default ActivityDashboard;
