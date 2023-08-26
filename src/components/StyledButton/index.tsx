'use client'
import styled from 'styled-components'

const StyledButton = styled.button`
  --button-radius: 100em;
  --button-xsmall: 24px;
  --button-small: 32px;
  --button-medium: 40px;
  --button-large: 48px;
  --button-size: var(--button-medium);
  align-items: center;
  background-color: transparent;
  border: 0;
  border-radius: var(--button-radius);
  color: var(--interactive);
  cursor: pointer;
  display: inline-flex;
  font-size: var(--font-size-scale-up-01);
  font-weight: var(--font-weight-semi-bold);
  height: var(--button-size);
  justify-content: center;
  overflow: hidden;
  padding: 0 var(--spacing-scale-3x);
  position: relative;
  text-align: center;
  vertical-align: middle;
  white-space: nowrap;
  width: auto;

  &.block {
    width: 100%;
  }

  @media (min-width: 576px) {
    &.block-sm {
      width: 100%;
    }

    &.auto-sm {
      width: auto;
    }
  }

  @media (min-width: 992px) {
    &.block-md {
      width: 100%;
    }

    &.auto-md {
      width: auto;
    }
  }

  @media (min-width: 1280px) {
    &.block-lg {
      width: 100%;
    }

    &.auto-lg {
      width: auto;
    }
  }

  @media (min-width: 1600px) {
    &.block-xl {
      width: 100%;
    }

    &.auto-xl {
      width: auto;
    }
  }

  &.circle,
  &[circle],
  &.is-circle {
    border-radius: 50%;
    padding: 0;
    width: var(--button-size);
  }

  /* ... other variations ... */

  &:disabled {
    cursor: not-allowed;
  }

  &:not(:disabled) {
    --focus-offset: var(--spacing-scale-half);
  }

  &:not(:disabled):focus {
    outline: none;
  }

  &:not(:disabled).focus-visible,
  &:not(:disabled):focus-visible {
    outline-color: var(--focus);
    outline-offset: var(--focus-offset);
    outline-style: var(--focus-style);
    outline-width: var(--focus-width);
  }

  &:not(:disabled):not(:disabled):hover {
    background-image: linear-gradient(
      rgba(var(--interactive-rgb), var(--hover)),
      rgba(var(--interactive-rgb), var(--hover))
    );
  }

  &:not(:disabled):not(:disabled):active {
    background-image: linear-gradient(
      rgba(var(--interactive-rgb), var(--pressed)),
      rgba(var(--interactive-rgb), var(--pressed))
    );
  }

  &.active,
  &.is-active,
  &[active] {
    --hover: var(--hover-dark);
    background-color: var(--active);
    color: var(--color-dark);
  }

  &.loading::after,
  &[loading]::after,
  &.is-loading::after {
    border-color: var(--interactive) var(--interactive) transparent;
    border-style: solid;
  }

  /* ... other loading variations ... */

  &.inverted,
  &.is-inverted,
  &[inverted],
  &.dark-mode {
    --color: var(--color-dark);
    --color-rgb: var(--color-dark-rgb);
    --text-color: var(--color-dark);
    --interactive: var(--interactive-dark);
    --interactive-rgb: var(--interactive-dark-rgb);
    --visited: var(--visited-dark);
    --hover: var(--hover-dark);
    --pressed: var(--pressed-dark);
    --focus-color: var(--focus-color-dark);
    --focus: var(--focus-color-dark);
    color: var(--interactive-dark);
  }

  /* ... other inverted variations ... */

  &.inverted.primary,
  &[primary],
  &.is-primary,
  &.is-inverted.primary,
  &[primary],
  &.is-inverted.is-primary,
  &[inverted].primary,
  &[inverted][primary],
  &[inverted].is-primary,
  &.dark-mode.primary,
  &[primary],
  &.dark-mode.is-primary {
    --interactive-rgb: var(--background-dark-rgb);
    background-color: var(--interactive-dark);
    color: var(--background-dark);
  }

  /* ... other inverted primary variations ... */

  &.inverted.secondary,
  &[secondary],
  &.is-secondary,
  &.is-inverted.secondary,
  &[secondary],
  &.is-inverted.is-secondary,
  &[inverted].secondary,
  &[inverted][secondary],
  &[inverted].is-secondary,
  &.dark-mode.secondary,
  &[secondary],
  &.dark-mode.is-secondary {
    background-color: var(--background-dark);
  }

  /* ... other inverted secondary variations ... */

  &.inverted.active,
  &.is-inverted.active,
  &[inverted].active,
  &.dark-mode.active {
    --hover: var(--hover-light);
    --interactive-rgb: var(--active-rgb);
    background-color: var(--background-light);
    color: var(--active);
  }

  /* ... other inverted active variations ... */

  a& {
    font-weight: var(--font-weight-semi-bold);
    text-decoration: none !important;
  }
`

export default StyledButton
