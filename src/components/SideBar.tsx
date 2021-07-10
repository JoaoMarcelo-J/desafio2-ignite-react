import { Button } from "./Button";

import "../styles/sidebar.scss";
import "../styles/global.scss";

interface GenreResponseProps {
  id: number;
  name: "action" | "comedy" | "documentary" | "drama" | "horror" | "family";
  title: string;
}

type SideBarProps = {
  property: {
    genres: GenreResponseProps[];
    selectedGenreId: number;
    handleClickButton: (id: number) => void;
  };
};

export function SideBar(props: SideBarProps) {
  // Complete aqui

  return (
    <nav className="sidebar">
      <span>
        Watch<p>Me</p>
      </span>

      <div className="buttons-container">
        {props.property.genres.map((genre) => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => props.property.handleClickButton(genre.id)}
            selected={props.property.selectedGenreId === genre.id}
          />
        ))}
      </div>
    </nav>
  );
}
