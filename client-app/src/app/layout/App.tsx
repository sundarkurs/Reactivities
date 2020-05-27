import React, { Component } from 'react'
import { Header, Icon, List } from 'semantic-ui-react'
import axios from 'axios';

export default class App extends Component {
  state = {
    activities: []
  }

  componentDidMount() {

    axios.get('http://localhost:5000/api/activities').then((response) => {
      this.setState({
        activities: response.data
      })
    })

  }

  render() {
    return (
      <div>

        <Header as='h2'>
          <Icon name='plug' />
          <Header.Content>Reactivities</Header.Content>
        </Header>

        <List>
          {this.state.activities.map((activitie: any) => (
            <List.Item key={activitie.id}>{activitie.title}</List.Item>
          ))}
        </List>
      </div>
    )
  }
}