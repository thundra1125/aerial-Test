/* eslint-disable react/no-children-prop */
import React from 'react'
import { Table, Group, Menu, ScrollArea } from '@mantine/core'
import styles from './styles.module.css';

type Row = {
  name: string
  department: string
  salary: number
  documents: Array<string>
}

type Props = {
  data: Array<Row>
}

const Documents = ({ documents }: { documents: Array<string> }) => {
  return (
    <Group className={styles.documents}>
      <Group className={styles.list}>
        {documents.map((document: string, index) => (
          <div key={index}>{document}</div>
        ))}
      </Group>
      <Menu position='right' sx={{ p: 2 }} className={styles.menu}>
        <ScrollArea
          sx={{ height: `${Math.min(documents.length, 4) * 40}px` }}
          type='auto'
        >
          {documents.map((document: string, index) => (
            <Menu.Item sx={{ height: 40 }} key={index}>
              {document}
            </Menu.Item>
          ))}
        </ScrollArea>
      </Menu>
    </Group>
  )
}

export default function MyTable({ data }: Props) {
  const rows = data.map((row: Row, index) => {
    return (
      <tr key={index}>
        <td>{row.name}</td>
        <td>{row.department}</td>
        <td>{row.salary}</td>
        <td>
          <Documents documents={row.documents} />
        </td>
      </tr>
    )
  })
  return (
    <Table verticalSpacing='md' striped highlightOnHover>
      <thead>
        <tr>
          <th>Name</th>
          <th>Date</th>
          <th>Salary</th>
          <th>Documents</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </Table>
  )
}
