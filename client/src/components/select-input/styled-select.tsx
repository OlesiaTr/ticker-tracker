import { useState, useEffect } from 'react';
import Select, {
  OnChangeValue,
  components,
  DropdownIndicatorProps,
} from 'react-select';

import { getInterval, updateInterval } from '../../service/api';
import { DropDownIcon } from '../../assets/icons';
import { POOL_OPTIONS } from '../../constants';

import { theme } from '../../styles';
import { reactSelectStyles } from './react-select-styles';
import { Container, Title } from './styled-select.styled';

const StyledSelect = () => {
  const [selectedOption, setSelectedOption] = useState<number>(0);

  useEffect(() => {
    const fetchInterval = async () => {
      const { dataUpdateInterval } = await getInterval();
      setSelectedOption(dataUpdateInterval);
    };

    fetchInterval();
  }, []);

  const handleIntervalUpdate = async (value: number) => {
    await updateInterval(value);
    setSelectedOption(value);
  };

  const DropdownIndicator = (props: DropdownIndicatorProps) => {
    return (
      <components.DropdownIndicator {...props}>
        <DropDownIcon stroke={theme.colors.mainPink} />
      </components.DropdownIndicator>
    );
  };

  return (
    <Container>
      <Title>Update Data Every</Title>

      <Select
        value={POOL_OPTIONS.find(option => option.value === selectedOption)}
        options={POOL_OPTIONS}
        styles={reactSelectStyles}
        components={{ DropdownIndicator }}
        // @ts-expect-error type check
        onChange={(
          selectedOption: OnChangeValue<{ value: number; label: string }, false>
        ) => handleIntervalUpdate(selectedOption!.value)}
        isSearchable={false}
        isClearable={false}
        menuPlacement="bottom"
      />
    </Container>
  );
};

export default StyledSelect;
