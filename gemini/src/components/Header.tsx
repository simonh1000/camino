import { JSX } from "solid-js";

interface HeaderProps {
  title: string;
  subtitle: JSX.Element | string;
  icon?: JSX.Element | string;
}

export default function Header(props: HeaderProps) {
  return (
    <header class="header">
      <div class="title-section">
        <h1>{props.title}</h1>
        <p>{props.subtitle}</p>
      </div>
      <div class="icon">
        {props.icon || (
          <img
            src="/imgs/conch.png"
            alt="Camino logo"
            style={{ width: "48px", height: "48px", "object-fit": "contain" }}
          />
        )}
      </div>
    </header>
  );
}
