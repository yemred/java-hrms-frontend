import React from 'react'
import JobAdvertisementService from '../../services/jobAdvertisementService/jobAdvertisementService';

export default function JobAdvertisement() {

    const [jobAdvertisements, setJobAdvertisements] = useState([]);

    useEffect(() => {
        
        let jobAdvertisementService = new JobAdvertisementService();
        jobAdvertisementService.getAdvertisements().then(result=>setJobAdvertisements(result.data.data));
    })
    return (
        <div>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>İş Tanımı</Table.HeaderCell>
            <Table.HeaderCell>Minumum Maaş</Table.HeaderCell>
            <Table.HeaderCell>Maximum Maaş</Table.HeaderCell>
            <Table.HeaderCell>Açık Pozisyonlar</Table.HeaderCell>
            <Table.HeaderCell>Durum</Table.HeaderCell>
            <Table.HeaderCell>İlan Bitiş Süresi</Table.HeaderCell>
            <Table.HeaderCell>İlan Tarihi</Table.HeaderCell>
            <Table.HeaderCell>Şehir</Table.HeaderCell>
            <Table.HeaderCell>İş Veren</Table.HeaderCell>
            <Table.HeaderCell>İş Pozisyon</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {jobAdvertisements.map((jobAdvertisement) => (
            <Table.Row key={jobAdvertisement.id}>
              <Table.Cell>{jobAdvertisement.jobDescription}</Table.Cell>
              <Table.Cell>{jobAdvertisement.minSalary}</Table.Cell>
              <Table.Cell>{jobAdvertisement.maxSalary}</Table.Cell>
              <Table.Cell>{jobAdvertisement.openPositions}</Table.Cell>
              <Table.Cell>{jobAdvertisement.status}</Table.Cell>
              <Table.Cell>{jobAdvertisement.advertisementDeadline}</Table.Cell>
              <Table.Cell>{jobAdvertisement.dateOfCreation}</Table.Cell>
              <Table.Cell>{jobAdvertisement.city}</Table.Cell>
              <Table.Cell>{jobAdvertisement.employerUser}</Table.Cell>
              <Table.Cell>{jobAdvertisement.jobPosition}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>

        <Table.Footer>
          <Table.Row>
            <Table.HeaderCell colSpan="3">
              <Menu floated="right" pagination>
                <Menu.Item as="a" icon>
                  <Icon name="chevron left" />
                </Menu.Item>
                <Menu.Item as="a">1</Menu.Item>
                <Menu.Item as="a">2</Menu.Item>
                <Menu.Item as="a">3</Menu.Item>
                <Menu.Item as="a">4</Menu.Item>
                <Menu.Item as="a" icon>
                  <Icon name="chevron right" />
                </Menu.Item>
              </Menu>
            </Table.HeaderCell>
          </Table.Row>
        </Table.Footer>
      </Table>
    </div>
    )
}
