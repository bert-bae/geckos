import React from 'react';
import {
  withStyles,
  createStyles,
  Theme,
  WithStyles
} from '@material-ui/core/styles';
import {
  OverrideProps,
  OverridableComponent,
  OverridableTypeMap
} from '@material-ui/core/OverridableComponent';
import MuiButton from '@material-ui/core/Button';

const withStylesOptions = {
  withTheme: true as const
};

export interface ExtendedButtonProps {
  color?: 'primary' | 'secondary' | 'warning' | 'error' | 'success' | 'default';
}

type UnstyledButtonProps<D extends React.ElementType = typeof MuiButton> = Omit<
  React.ComponentProps<D>,
  keyof ExtendedButtonProps
> &
  ExtendedButtonProps;

const styles = (theme: Theme) =>
  createStyles({
    root: ({ color = 'default' }: UnstyledButtonProps) => ({
      backgroundColor:
        color === 'default'
          ? theme.palette.action.active
          : theme.palette[color].main,
      color:
        color === 'default'
          ? theme.palette.getContrastText(theme.palette.action.active)
          : theme.palette[color].contrastText
    })
  });

export type StyledButtonProps<
  D extends React.ElementType = typeof MuiButton
> = Omit<UnstyledButtonProps<D>, 'classes'> &
  WithStyles<typeof styles, typeof withStylesOptions.withTheme> & {
    component?: React.ElementType;
  };

export type ButtonClassKey = keyof StyledButtonProps['classes'];

export type ButtonTypeMap<
  P = {},
  D extends React.ElementType = typeof MuiButton
> = {
  props: P & UnstyledButtonProps<D> & Partial<WithStyles<typeof styles>>;
  classKey: ButtonClassKey;
  defaultComponent: D;
};

export interface ExtendedButtonTypeMap<M extends OverridableTypeMap> {
  props: M['props'] & Omit<ButtonTypeMap['props'], 'classes'>;
  classKey: ButtonClassKey;
  defaultComponent: M['defaultComponent'];
}

export type ExtendedButton<M extends OverridableTypeMap> = OverridableComponent<
  ExtendedButtonTypeMap<M>
>;

export type ButtonProps<
  D extends React.ElementType = ButtonTypeMap['defaultComponent'],
  P = {}
> = OverrideProps<ButtonTypeMap<P, D>, D>;

const StyledButton = withStyles(
  styles,
  withStylesOptions
)(
  React.forwardRef<React.ElementRef<typeof MuiButton>, StyledButtonProps>(
    function Button(props, ref) {
      const { theme, color, ...rest } = props;
      return <MuiButton ref={ref} {...rest} />;
    }
  )
);

const Button = (StyledButton as any) as ExtendedButton<ButtonTypeMap>;

export default Button;
