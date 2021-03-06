import React from "react";
import _ from "lodash";
import { Button } from "react-bootstrap";
import { Redirect } from "react-router-dom";
import AlbumsList from "../AlbumsList/AlbumsList";
import ArtistsList from "../ArtistsList/ArtistsList";
import PlayList from "../PlayList/PlayList";
import TracksList from "../TracksList/TracksList";
import "./SearchResult.css";

const SearchResult = (props) => {
  const { isValidSession, loadMore, result, setCategory, selectedCategory } =
    props;
  const { albums, artists, playlist, tracks } = result;

  if (!isValidSession()) {
    return (
      <Redirect
        to={{
          pathname: "/",
          state: {
            session_expired: true,
          },
        }}
      />
    );
  }
  return (
    <React.Fragment>
      <div className="search-buttons">
        {!_.isEmpty(tracks) && (
          <button
            className={`${
              selectedCategory === "tracks" ? "btn active" : "btn"
            }`}
            onClick={() => setCategory("tracks")}
          >
            Tracks
          </button>
        )}
        {!_.isEmpty(albums.items) && (
          <button
            className={`${
              selectedCategory === "albums" ? "btn active" : "btn"
            }`}
            onClick={() => setCategory("albums")}
          >
            Albums
          </button>
        )}
        {!_.isEmpty(artists.items) && (
          <button
            className={`${
              selectedCategory === "artists" ? "btn active" : "btn"
            }`}
            onClick={() => setCategory("artists")}
          >
            Artists
          </button>
        )}
        {!_.isEmpty(playlist.items) && (
          <button
            className={`${
              selectedCategory === "playlist" ? "btn active" : "btn"
            }`}
            onClick={() => setCategory("playlist")}
          >
            PlayLists
          </button>
        )}
      </div>
      <div className={`${selectedCategory === "tracks" ? "" : "hide"}`}>
        {tracks && <TracksList tracks={tracks} />}
      </div>
      <div className={`${selectedCategory === "albums" ? "" : "hide"}`}>
        {albums && <AlbumsList albums={albums} />}
      </div>
      <div className={`${selectedCategory === "artists" ? "" : "hide"}`}>
        {artists && <ArtistsList artists={artists} />}
      </div>
      <div className={`${selectedCategory === "playlist" ? "" : "hide"}`}>
        {playlist && <PlayList playlist={playlist} />}
      </div>
      {!_.isEmpty(result[selectedCategory]) &&
        !_.isEmpty(result[selectedCategory].next) && (
          <div className="load-more" onClick={() => loadMore(selectedCategory)}>
            <Button variant="dark">Load More</Button>
          </div>
        )}
    </React.Fragment>
  );
};
export default SearchResult;
