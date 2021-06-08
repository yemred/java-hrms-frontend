import React from 'react'
import { Grid, GridColumn } from 'semantic-ui-react'
import Sidebar from './Sidebar'
import EmployerList from "../pages/employer/EmployerList";
import Footer from './Footer';

export default function Dashboard() {
    return (
        <div>
            <Grid>
                <Grid.Row>
                    <GridColumn width={4}>
                        <Sidebar/>
                    </GridColumn>
                    <GridColumn width={12}>
                        <EmployerList/>
                    </GridColumn>
                </Grid.Row>
                <Grid.Row>
                    <GridColumn width={16}>
                        <Footer/>
                    </GridColumn>
                </Grid.Row>
            </Grid>
        </div>
    )
}
