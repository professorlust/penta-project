// @flow
import React from 'react';
import styled from 'styled-components';
import NavigationItem, { type NavigationItemProps } from './NavigationItem';

const NavigationHolder = styled.div`
  position: relative;
  display: flex;
  margin-bottom: 2rem;
`;

export type NavigationProps = {
  navigationItems: Array<NavigationItemProps>,
  activeKey: SettingsGroup
};

const Navigation = (props: NavigationProps) => (
  <NavigationHolder className="font__accent">
    {props.navigationItems.map((item: NavigationItemProps) => (
      <NavigationItem
        name={item.name}
        key={item.dataKey}
        dataKey={item.dataKey}
        active={item.dataKey === props.activeKey}
        clickHandler={item.clickHandler}
      />
    ))}
  </NavigationHolder>
);

export default Navigation;
