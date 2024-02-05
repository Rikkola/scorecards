import React from 'react';
import { DataList, DataListItem, DataListItemRow, DataListItemCells, DataListCell } from '@patternfly/react-core';
import {NavLink, Route} from "react-router-dom";

const previewPlaceholder = {
  display: 'block',
  width: '100%',
  padding: '.25rem .5rem',
  color: 'var(--pf-v5-global--Color--100)',
  backgroundColor: 'var(--pf-v5-global--BackgroundColor--200)',
  border: 'var(--pf-v5-global--BorderWidth--sm) var(--pf-v5-global--BorderColor--100) solid'
};

export const DataListBasic: React.FunctionComponent = () => (
  <DataList aria-label="Simple data list example">
    <DataListItem aria-labelledby="simple-item1">
      <DataListItemRow>
        <DataListItemCells
          dataListCells={[
            <DataListCell width={4} key="primary content">
              <span id="simple-item1">Common Vulnerability and Exposures (CVEs)</span>
            </DataListCell>,

            <DataListCell width={3} key="width 5">
              <div style={previewPlaceholder}>

                <NavLink exact={true} to='CardEditor'>
                  <b id="width-ex3-item1">Opened CVEs</b>
                </NavLink>

                <p>2 CVEs are open.</p>
              </div>
            </DataListCell>,

            <DataListCell width={3} key="width 5">
              <div style={previewPlaceholder}>
                <NavLink exact={true} to='ScoreCardGroupPage'>
                  <b id="width-ex3-item1">CVEs Acked</b>
                </NavLink>
                <p>5 out of 10 were acked in the optimal time.</p>
              </div>
            </DataListCell>,

            <DataListCell width={3} key="width 5">
              <div style={previewPlaceholder}>
                <NavLink exact={true} to='ScoreCardGroupPage'>
                <b id="width-ex3-item1">CVEs Closed</b>
                </NavLink>
                <p>More were closed than opened.</p>
              </div>
            </DataListCell>

          ]}
        />
      </DataListItemRow>
    </DataListItem>
    <DataListItem aria-labelledby="simple-item2">
      <DataListItemRow>
        <DataListItemCells
          dataListCells={[
            <DataListCell width={4} key="secondary content fill">
              <span id="simple-item2">Repository Health</span>
            </DataListCell>,

            <DataListCell width={3} key="width 5">
              <div style={previewPlaceholder}>

                <NavLink exact={true} to='CardEditor'>
                  <b id="width-ex3-item1">Opened CVEs</b>
                </NavLink>

                <p>2 CVEs are open.</p>
              </div>
            </DataListCell>,

            <DataListCell width={3} key="width 5">
              <div style={previewPlaceholder}>
                <NavLink exact={true} to='ScoreCardGroupPage'>
                  <b id="width-ex3-item1">CVEs Acked</b>
                </NavLink>
                <p>5 out of 10 were acked in the optimal time.</p>
              </div>
            </DataListCell>,

            <DataListCell width={3} key="width 5">
              <div style={previewPlaceholder}>
                <NavLink exact={true} to='ScoreCardGroupPage'>
                  <b id="width-ex3-item1">CVEs Closed</b>
                </NavLink>
                <p>More were closed than opened.</p>
              </div>
            </DataListCell>

          ]}
        />
      </DataListItemRow>
    </DataListItem>
  </DataList>
);
