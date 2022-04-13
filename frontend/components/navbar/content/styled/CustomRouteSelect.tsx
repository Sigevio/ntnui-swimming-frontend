import * as React from 'react';
import { useSelect, SelectOption } from '@mui/base';
import Link from 'next/link';
import { Typography, styled } from '@mui/material';

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
`;

const ButtonText = styled(Typography)`
  font-weight: 500;
  font-size: 0.875rem;
  line-height: 1.75;
  letter-spacing: 0.02857em;
  text-transform: uppercase;
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

    &:hover {
      background: ${theme.palette.mode === 'dark' ? darkBackgroundHover : lightBackgroundHover};
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
        <ButtonText
          paddingLeft='0.45rem'
          paddingRight='0.45rem'
        >
          {placeholder}
        </ButtonText>
      </Toggle>
      <Listbox {...getListboxProps()} className={listboxVisible ? '' : 'hidden'}>
        {options.map((option) => (
          <Link
            key={option.value}
            href={`/${option.value}`}
            passHref
          >
            <li>
              <ButtonText>
                {option.label}
              </ButtonText>
            </li>
          </Link>
        ))}
      </Listbox>
    </Root>
  );
}

export default CustomRouteSelect;
