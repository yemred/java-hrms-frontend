import React, { useState, useEffect } from "react";
import JobAdvertisementService from "../../services/jobAdvertisementService/jobAdvertisementService";
import { Button, Card, Container, Image } from 'semantic-ui-react'

export default function JobAdvertisement() {
  const [jobAdvertisements, setJobAdvertisements] = useState([]);

  useEffect(() => {
    let jobAdvertisementService = new JobAdvertisementService();
    jobAdvertisementService
      .getAdvertisements()
      .then((result) => setJobAdvertisements(result.data.data));
  }, []);
  return (
    <div>
      <Container>
      <Card.Group>
        {jobAdvertisements.map((jobAdvertisement)=>(
        <Card>
          <Card.Content>
            <Image
              floated="right"
              size="mini"
              src="/images/avatar/large/steve.jpg"
            />
            <Card.Header>{jobAdvertisement.jobDescription}</Card.Header>
            <Card.Meta>Friends of Elliot</Card.Meta>
            <Card.Description>
              Steve wants to add you to the group <strong>best friends</strong>
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <div className="ui two buttons">
              <Button basic color="green">
                Approve
              </Button>
              <Button basic color="red">
                Decline
              </Button>
            </div>
          </Card.Content>
        </Card>
        ))}
      </Card.Group>
      </Container>
      
    </div>
  );
}
