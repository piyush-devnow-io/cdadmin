import React from 'react';
import { Switch, Route } from 'react-router-dom';
import About from './About';
import UsersData from './UsersData';
import PillarsData from './PillarsData';
import PillarDetails from './PillarDetails';
import LessonsData from './LessonsData';
import QuotesData from './QuotesData';
import BehavioursData from './BehavioursData';
import AddPillar from './AddPillar'
import LessonDetail from './LessonDetail'
import PillarLessonsDetails from './PillarLessonsDetails'
import PillarBehavioursDetails from './PillarBehavioursDetails'
import PillarQuotesDetails from './PillarQuotesDetails'
import LoginTab from './LoginForm';


const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={UsersData} />
      <Route exact path='/about' component={About} />
      
      <Route exact path='/login' component={LoginTab} />
      <Route exact path='/users' component={UsersData} />
      <Route exact path='/pillars' component={PillarsData} />
      <Route exact path='/lessons' component={LessonsData} />
      <Route exact path='/quotes' component={QuotesData} />
      <Route exact path='/behaviours' component={BehavioursData} />

      <Route exact path='/pillar/detail/:id' component={PillarDetails} />
      <Route exact path='/pillar/lessons/:id' component={PillarLessonsDetails} />
      <Route exact path='/pillar/quotes/:id' component={PillarQuotesDetails} />
      <Route exact path='/pillar/behaviours/:id' component={PillarBehavioursDetails} />

      <Route exact path='/pillar/add' component={AddPillar} />
      
      <Route  path='/lesson/detail/:id' component={LessonDetail} />

      <Route exact path='/lesson/add' component={AddPillar} />

      <Route exact path='/quote/add' component={AddPillar} />
      <Route exact path='/behaviour/add' component={AddPillar} />

      {/*<Route exact path='/meetups/edit/:id' component={EditMeetup} />
<Route exact path='/meetups/:id' component={MeetupDetails} />*/}
    </Switch>
  </main>
)

export default Main;