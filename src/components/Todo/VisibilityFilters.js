import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../../store/actions';
import { VISIBILITY_FILTERS } from '../../constants';


const VisibilityFilters = () => {
  const activeFilter = useSelector(state => state.visibilityFilter);
  const dispatch = useDispatch();

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
