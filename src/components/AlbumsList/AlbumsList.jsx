import React from "react";
import { Card, Button } from "react-bootstrap";
import _ from "lodash";

const AlbumsList = ({ albums }) => {
  return (
    <React.Fragment>
      {Object.keys(albums).length > 0 && (
        <div className="albums">
          {albums.items.map((album, index) => {
            return (
              <React.Fragment key={index}>
                <Card style={{ width: "18rem", backgroundColor: "#303030" }}>
                  {!_.isEmpty(album.images) ? (
                    <Card.Img variant="top" src={album.images[0].url} alt="" />
                  ) : <Card.Img variant="top" src='https://st3.depositphotos.com/4111759/13425/v/600/depositphotos_134255634-stock-illustration-avatar-icon-male-profile-gray.jpg' alt="" /> }

                  <Card.Body>
                    <Card.Title style={{ color: 'white'}}>{album.name}</Card.Title>
                    <Card.Text style={{ color: 'white'}}>
                      <small>
                      {album.artists[0].name}
                      </small>
                    </Card.Text>
                    <a
                      target="_blank"
                      href={album.external_urls.spotify}
                      rel="noopener noreferrer"
                      className="card-image-link"
                    >
                      <Button
                        variant="primary"
                      >
                        Open on spotify
                      </Button>
                    </a>
                  </Card.Body>
                </Card>
              </React.Fragment>
            );
          })}
        </div>
      )}
    </React.Fragment>
  );
};

export default AlbumsList;
