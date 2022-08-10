import * as React from 'react';
import { useSelect, SelectOption } from '@mui/base';
import Link from 'next/link';
import { styled } from '@mui/material';
import { NavSelectText } from '../../styled/desktop/NavBarText';
import { KeyboardArrowLeft } from '@mui/icons-material';
import { useLanguageQuery } from 'next-export-i18n';

const darkBackground = '#2f2f2f';
const lightBackground = '#e2e2e2';
const darkBackgroundHover = '#292929';
const lightBackgroundHover = '#eaeaea';

const Root = styled('div')`
  position: relative;
`;

const Toggle = styled('div')`
  box-sizing: border-box;
  min-height: 2.25rem;
  min-width: 2rem;
  text-align: left;
  line-height: 1.5;
  color: inherit;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: default;
  text-transform: uppercase;

  & > p {
    padding-inline: 0.45rem;
  }

`;

const Listbox = styled('ul')(
  ({ theme }) => `
  font-size: 0.875rem;
  box-sizing: border-box;
  padding: 5px;
  margin: 5px 0 0 0;
  list-style: none;
  position: absolute;
  height: auto;
  transition: opacity 0.1s ease;
  minWidth: 100%;
  box-shadow: 0 5px 13px -3px rgba(0,0,0,0.4);
  background-color: ${theme.palette.mode === 'dark' ? darkBackground : lightBackground};
  border-radius: 0.75em;
  color: ${theme.palette.text.primary};
  overflow: auto;
  z-index: 1;
  outline: 0px;
  border-radius: 1em;

  &.hidden {
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.3s 0.05s ease, visibility 0.3s 0.05s step-end;
  }

  & > li {
    padding: 0.5rem;
    cursor: pointer;
    border-radius: 0.75em;
    text-align: center;
    text-transform: uppercase;
    transition: background 0.25s ease;

    &:hover {
      background: ${theme.palette.mode === 'dark' ? darkBackgroundHover : lightBackgroundHover};
    }

    &:hover p {
      transition: opacity 0.25s ease;
      opacity: 0.25;
    }

    &:first-of-type:not(:last-of-type) {
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
    }

    &:last-of-type:not(:first-of-type) {
      border-top-left-radius: 0;
      border-top-right-radius: 0;
    }

    &:not(:first-of-type):not(:last-of-type) {
      border-radius: 0;
    }

  }
  `,
);

interface Props {
  options: SelectOption<string>[];
  placeholder?: string;
}

function CustomRouteSelect({ options, placeholder }: Props) {
  const listboxRef = React.useRef<HTMLUListElement>(null);
  const [listboxVisible, setListboxVisible] = React.useState(false);

  const { getButtonProps, getListboxProps, value } = useSelect({
    listboxRef,
    options,
  });

  const [query] = useLanguageQuery();

  React.useEffect(() => {
    if (listboxVisible) {
      listboxRef.current?.focus();
    }
  }, [listboxVisible]);

  return (
    <Root
      onMouseOver={() => setListboxVisible(true)}
      onMouseOut={() => setListboxVisible(false)}
      onFocus={() => setListboxVisible(true)}
      onBlur={() => setListboxVisible(false)}
    >
      <Toggle {...getButtonProps()} style={{ '--color': value } as any}>
        <NavSelectText>
          {placeholder}
        </NavSelectText>
        <KeyboardArrowLeft
          sx={{
            color: 'inherit',
            transition: 'transform 0.25s ease',
            transform: listboxVisible ? 'rotate(-90deg)' : 'none',
            filter: 'invert(0.2)',
            marginLeft: '-0.5rem'
          }}
        />
      </Toggle>
      <Listbox {...getListboxProps()} className={listboxVisible ? '' : 'hidden'}>
        {options.map((option) => (
          <Link
            key={option.value}
            href={{ pathname: `/${option.value}`, query: query }}
            passHref
          >
            <li>
              <NavSelectText>
                {option.label}
              </NavSelectText>
            </li>
          </Link>
        ))}
      </Listbox>
    </Root>
  );
}

export default CustomRouteSelect;
