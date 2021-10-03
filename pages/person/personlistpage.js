/*
  PersonListPage - a page listing all the people returned from fetchPeople
  results in simple vertical list
  Entry - people menu item.
*/
import React from 'react'
import { Button } from 'antd'
import Link from 'next/link'
import { Helmet } from 'react-helmet'
import { FormattedMessage } from 'react-intl'

import PersonList from '../../components/Person/PersonList'
import { FullPage } from '../../components/VTheme/VTheme'
import reduxApi, { withPeople } from '../../lib/redux/reduxApi.js'
import reduxWrapper from '../../lib/redux/store'

export const PersonListPage = ({
  people
}) => {
  return (
    <FullPage>
      <Helmet>
        <title>Voluntarily - People List</title>
      </Helmet>
      <h1><FormattedMessage id='personListTitle' defaultMessage='People' description='H1 on Person list page' /></h1>
      <Button shape='round'>
        <Link href='/person/new'>
          <a><FormattedMessage id='people.new' defaultMessage='New Person' description='Button to create a new person' /></a>
        </Link>
      </Button>
      <br /><br />
      <PersonList people={people.data} />
    </FullPage>
  )
}

export const getServerSideProps = reduxWrapper.getServerSideProps(

  store => async () => {
    const select = { s: 'name', p: 'name imgUrl placeOfWork job' }
    await store.dispatch(reduxApi.actions.people.get(select))
  })

export default withPeople(PersonListPage)
