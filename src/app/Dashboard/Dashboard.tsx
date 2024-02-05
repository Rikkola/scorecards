import * as React from 'react';
import { PageSection, Title } from '@patternfly/react-core';
import {DataListBasic} from "@app/Dashboard/ListOfReports";

const Dashboard: React.FunctionComponent = () => (
  <PageSection>
    <Title headingLevel="h3" size="lg">Report</Title>
    <DataListBasic ></DataListBasic>
  </PageSection>
)

export { Dashboard };
