import PropTypes from 'prop-types';
import { FilterLabel, FilterInput } from './Filter.styled';
import { useDispatch } from 'react-redux';
import { filterContact } from 'redux/filterSlice';

export const Filter = ({ onFilter }) => {
  const dispatch = useDispatch();
  return (
    <FilterLabel>
      Find contacts by name:
      <FilterInput
        type="text"
        onChange={e => dispatch(filterContact(e.target.value))}
      />
    </FilterLabel>
  );
};

// Filter.propTypes = {
//   onFilter: PropTypes.func.isRequired,
// };
