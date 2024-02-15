import {
  ControlProps,
  DropdownIndicatorProps,
  StylesConfig,
  GroupBase,
  CSSObjectWithLabel,
} from 'react-select';

import { theme } from '../../styles';

export const reactSelectStyles: StylesConfig<
  unknown,
  boolean,
  GroupBase<unknown>
> = {
  control: (provided: CSSObjectWithLabel, state: ControlProps) => ({
    ...provided,
    fontFamily: `${theme.fonts.main}`,
    fontWeight: `${theme.fontWeights.bold}`,
    height: '50px',
    marginBottom: '14px',
    padding: '0',
    border: 'none',
    borderRadius: '0px',
    borderBottom: `${theme.borders.bold} ${theme.colors.mainPink}`,
    cursor: 'pointer',
    backgroundColor: 'transparent',
    boxShadow: state.isFocused ? 'none' : 'none',
    '&:hover': {
      boxShadow: state.isFocused ? 'none' : 'none',
    },
  }),
  menu: (provided: CSSObjectWithLabel) => ({
    ...provided,
    marginTop: '0',
    width: '270px',
    right: '0',
    boxShadow: ' 0px 4px 12px rgba(0, 0, 0, 0.24)',
    borderRadius: '8px',
  }),
  option: (provided: CSSObjectWithLabel) => ({
    ...provided,
    fontFamily: `${theme.fonts.heading}`,
    fontSize: `${theme.fontSizes.xm}`,
    lineHeight: '130%',
    backgroundColor: '#FFFFFF',
    color: '#000000',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: `${theme.transition.main}`,
    ':hover': {
      backgroundColor: `${theme.colors.mainGray}`,
    },
  }),
  dropdownIndicator: (
    provided: CSSObjectWithLabel,
    state: DropdownIndicatorProps
  ) => ({
    ...provided,
    transform: state.selectProps.menuIsOpen ? 'rotate(180deg)' : '',
    transition: `${theme.transition.main}`,
    padding: '0px',
    currentColor: `${theme.colors.mainPink}`,
  }),
  indicatorSeparator: () => ({
    display: 'none',
  }),
  singleValue: (provided: CSSObjectWithLabel) => ({
    ...provided,
    color: `${theme.colors.mainBlack}`,
    fontSize: `${theme.fontSizes.xm}`,
    lineHeight: '140%',
    '@media screen and (min-width: 525px) and (max-width: 1224px)': {
      fontSize: `${theme.fontSizes.l}`,
      lineHeight: '123%',
    },
    '@media screen and (max-width: 524px)': {
      fontSize: `${theme.fontSizes.m}`,
      lineHeight: '125%',
    },
  }),
  valueContainer: (provided: CSSObjectWithLabel) => ({
    ...provided,
    padding: '0',
  }),
};
