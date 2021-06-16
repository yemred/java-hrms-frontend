import React from 'react'
import { Grid, GridColumn } from 'semantic-ui-react'

import EmployerList from "../pages/employer/EmployerList";

import { Route } from 'react-router';
import JobAdvertisement from '../pages/jobAdvertisement/JobAdvertisement';
import UnEmployedList from '../pages/unEmployed/UnEmployedList';
import SideBar from './SideBar';
import ShareJobAdvertisement from '../pages/jobAdvertisement/ShareJobAdvertisement';

export default function Dashboard() {
    return (
        <div>
            <Grid>
                <Grid.Row>
                    <GridColumn width={4}>
                        <SideBar />
                    </GridColumn>
                    <GridColumn width={12}>
                        <Route exact path="/" component={JobAdvertisement}></Route>
                        <Route path="/jobadvertisement" component={JobAdvertisement} ></Route>
                        <Route path="/employer" component={EmployerList}></Route>
                        <Route path="/unemployed" component={UnEmployedList}></Route>
                        <Route path="/sharejobadvertisement" component={ShareJobAdvertisement}></Route>
                    </GridColumn>
                </Grid.Row>
            </Grid>
        </div>
    )
}
