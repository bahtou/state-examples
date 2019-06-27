import React from 'react';
import { connect } from 'react-redux';
import { setFilter } from '../../store/actions';
import { VISIBILITY_FILTERS } from '../../constants';


const VisibilityFilters = ({ activeFilter, dispatch }) => {
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

const mapStateToProps = state => {
  return {
    activeFilter: state.visibilityFilter
  };
};

export default connect(
  mapStateToProps
)(VisibilityFilters);
