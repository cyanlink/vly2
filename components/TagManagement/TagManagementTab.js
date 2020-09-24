import React, { useEffect } from "react";
import { Tabs, Button } from "antd";
import VTabs from "../VTheme/VTabs";
import { withOrgs } from "../../lib/redux/reduxApi.js";
import ItemList from "../VTheme/ItemList";
import { useSelector, useDispatch } from "react-redux";
import { TagTable } from "./TagTable";
import TagInput from "../Form/Input/TagInput";
import Link from "next/link";
import { FormattedMessage } from "react-intl";
import styled from 'styled-components'

const SearchContainer = styled.div`
  display: inline-block;
  position: relative;
  width: auto;
  padding-bottom: 1em;
  padding-right: 1em;
`;

const TagManagementTab = (props) => {
  return (
    <VTabs size="large">
      <Tabs.TabPane tab={"Tags"} key={1}>
        <SearchContainer>
          {" "}
          <TagInput />{" "}
        </SearchContainer>
        <Link href={""}>
          <Button shape="round" size="medium" type="primary">
            <FormattedMessage
              id="TagManagement.button.search"
              defaultMessage="Add tag"
            />
          </Button>
        </Link>
        <TagTable />
      </Tabs.TabPane>
      <Tabs.TabPane tab={"Tag Groups"} key={2}>
        <h1>Test</h1>
      </Tabs.TabPane>
    </VTabs>
  );
};

export default withOrgs(TagManagementTab);
