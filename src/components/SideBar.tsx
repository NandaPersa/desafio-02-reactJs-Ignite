import '../styles/sidebar.scss';
import { GenreResponseProps } from '../App';
import { Button } from './Button';

interface Props {
  selectedGenreId: number;
  handleClickButton: (args: number) => void;
  genres: Array<GenreResponseProps>
}

export function SideBar({ selectedGenreId, handleClickButton, genres }: Props) {
  return (
    <nav className="sidebar">
        <span>Watch<p>Me</p></span>

        <div className="buttons-container">
          {genres.map(genre => (
            <Button
              key={String(genre.id)}
              title={genre.title}
              iconName={genre.name}
              onClick={() => handleClickButton(genre.id)}
              selected={selectedGenreId === genre.id}
            />
          ))}
        </div>

      </nav>
  );
}