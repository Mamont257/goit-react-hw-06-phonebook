import { FilterLabel, FilterInput } from './Filter.styled';
import { useDispatch } from 'react-redux';
import { filterContact } from 'redux/filterSlice';

export const Filter = () => {
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
