import { Children, FC, InputHTMLAttributes, forwardRef } from "react";
import cls from "./Input.module.scss";
import { ClassNames, Mods } from "@/shared/lib/classNames";

type VariantInput = "default" | "borderless";

interface InputProps
  extends InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  className?: string;
  error?: string;
  value?: string;
  textarea?: boolean;
  variant?: VariantInput;
}

export const Input: FC<InputProps> = forwardRef((props, ref: any) => {
  const {
    className,
    value = "",
    error,
    placeholder,
    textarea,
    variant,
    ...rest
  } = props;

  // const variantClasses: Record<VariantInput, string> = {
  //   default: cls.default,
  //   borderless: cls.borderless,
  // };
  // const classes = [variant && variantClasses[variant], className];

  const mods: Mods = {
    [cls.active]: value,
    [cls.errorField]: error,
    [cls.textAreaActive]: textarea,
  };
  return (
    <div className={ClassNames(cls.field, mods, [className])}>
      <div className={cls.label}>
        {textarea ? (
          <textarea rows={10} ref={ref} value={value} {...rest}></textarea>
        ) : (
          <input ref={ref} value={value} {...rest}></input>
        )}

        {placeholder && <span className={cls.placeholder}>{placeholder}</span>}
      </div>

      <span className={ClassNames(cls.error, { [cls.errorActive]: error }, [])}>
        {error}
      </span>
    </div>
  );
});
