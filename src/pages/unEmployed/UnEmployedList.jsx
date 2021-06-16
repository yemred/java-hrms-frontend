import React, { useState,useEffect } from "react";
import UnEmployedService from "../../services/unEmployedService/unEmployedService";
import { Icon, Menu, Table } from "semantic-ui-react";

export default function UnEmployedList() {
  const [unEmployeds, setUnEmployeds] = useState([]);

  useEffect(() => {
    let unEmployedService = new UnEmployedService();
    unEmployedService
      .getUnEmployeds()
      .then((result) => setUnEmployeds(result.data.data));
  },[]);

  return (
    <div>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Adı</Table.HeaderCell>
            <Table.HeaderCell>Soyadı</Table.HeaderCell>
            <Table.HeaderCell>Doğum Tarihi</Table.HeaderCell>
            <Table.HeaderCell>E-Posta</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {unEmployeds.map((unEmployed) => (
            <Table.Row key={unEmployed.id}>
              <Table.Cell>{unEmployed.firstName}</Table.Cell>
              <Table.Cell>{unEmployed.lastname}</Table.Cell>
              <Table.Cell>{unEmployed.birthdate}</Table.Cell>
              <Table.Cell>{unEmployed.email}</Table.Cell>
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
  );
}
