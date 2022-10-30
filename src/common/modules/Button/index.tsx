import { AnchorHTMLAttributes, HTMLAttributes } from "react";
import * as S from "./style";

interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  name: string;
  className?: string;
  link: string;
}

export function Button({ name, className, link, ...rest }: ButtonProps) {
  return (
    <S.Container href={link} {...rest}>
      <button className={className}>{name}</button>
    </S.Container>
  );
}
