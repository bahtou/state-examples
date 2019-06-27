import React from 'react';

import { setFilter } from '../../store/actions';
import { VISIBILITY_FILTERS } from '../../constants';
import { useStore } from './todoProvider';


const VisibilityFilters = () => {
  const { state, dispatch } = useStore();
  const activeFilter = state.visibilityFilter;

  return (
    <div className="visibility-filters">
      {Object.keys(VISIBILITY_FILTERS).map(filterKey => {
        const currentFilter = VISIBILITY_FILTERS[filterKey];
        const styles = currentFilter === activeFilter
          ? 'filter--active'
          : 'filter';

        return (
          <span
            className={styles}
            key={`visibility-filter-${currentFilter}`}
            onClick={() => {
              dispatch(setFilter(currentFilter));
            }}>
            {currentFilter}
          </span>
        );
      })}
    </div>
  );
};


export default VisibilityFilters;
