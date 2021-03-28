import React from 'react';
import {ColorFilter, TypeFilter, CategoryFilter, LinkFilter, RarityFilter} from './filters';

const SubHeader = () => {
    return (
        <>
          <ColorFilter />
          <TypeFilter />
          <CategoryFilter />
          <LinkFilter />
          <RarityFilter />
          </>
    );
};

export default SubHeader;