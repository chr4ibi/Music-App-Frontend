import React, { useState } from "react";
import "./SearchPage.css";
import {
  initiateGetResult,
  initiateLoadMoreAlbums,
  initiateLoadMorePlaylist,
  initiateLoadMoreArtists,
  initiateLoadMoreTracks,
} from "../../redux/actions/index";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import SearchResult from "../../components/SearchResult/SearchResult";
import SearchForm from "../../components/SearchForm/SearchForm";
import Loader from "../../components/Loader";

const SearchPage = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("albums");
  const { isValidSession, history } = props;

  const handleSearch = (searchTerm) => {
    if (isValidSession()) {
      setIsLoading(true);
      props.dispatch(initiateGetResult(searchTerm)).then(() => {
        setIsLoading(false);
        setSelectedCategory("tracks");
      });
    } else {
      history.push({
        pathname: "/",
        state: {
          session_expired: true,
        },
      });
    }
  };

  const loadMore = async (type) => {
    if (isValidSession()) {
      const { dispatch, albums, artists, playlist, tracks } = props;
      setIsLoading(true);
      switch (type) {
        case "albums":
          await dispatch(initiateLoadMoreAlbums(albums.next));
          break;
        case "artists":
          await dispatch(initiateLoadMoreArtists(artists.next));
          break;
        case "playlist":
          await dispatch(initiateLoadMorePlaylist(playlist.next));
          break;
        case "tracks":
          await dispatch(initiateLoadMoreTracks(tracks.next));
          break;
        default:
      }
      setIsLoading(false);
    } else {
      history.push({
        pathname: "/",
        state: {
          session_expired: true,
        },
      });
    }
  };

  const setCategory = (category) => {
    setSelectedCategory(category);
  };

  const { albums, artists, playlist, tracks } = props;
  const result = { albums, artists, playlist, tracks };

  return (
    <React.Fragment>
      {isValidSession() ? (
        <div className="search-page">
          <h1>Search Music</h1>
          <SearchForm handleSearch={handleSearch} />
          <Loader show={isLoading}>Loading...</Loader>
          <SearchResult
            result={result}
            loadMore={loadMore}
            setCategory={setCategory}
            selectedCategory={selectedCategory}
            isValidSession={isValidSession}
          />
        </div>
      ) : (
        <Redirect
          to={{
            pathname: "/",
            state: {
              session_expired: true,
            },
          }}
        />
      )}
    </React.Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    albums: state.albums,
    artists: state.artists,
    playlist: state.playlist,
    tracks: state.tracks,
  };
};

export default connect(mapStateToProps)(SearchPage);
