import React, { useState, useEffect, Fragment } from 'react'
import { Header, Icon, List, Container } from 'semantic-ui-react'
import axios from 'axios';
import { IActivity } from '../models/activity';
import NavBar from '../../features/nav/NavBar';

const App = () => {
  const [activities, setActivities] = useState<IActivity[]>([]);

  useEffect(() => {

    axios.get<IActivity[]>('http://localhost:5000/api/activities')
      .then((response) => {
        setActivities(response.data);
      })

  }, [])

  return (
    <Fragment>
      <NavBar></NavBar>

      <Header as='h2'>
        <Icon name='plug' />
        <Header.Content>Reactivities</Header.Content>
      </Header>

      <Container style={{ marginTop: '7em' }}>
        <List>
          {activities.map((activitie) => (
            <List.Item key={activitie.id}>{activitie.title}</List.Item>
          ))}
        </List>
      </Container>

    </Fragment>
  )
}

export default App;