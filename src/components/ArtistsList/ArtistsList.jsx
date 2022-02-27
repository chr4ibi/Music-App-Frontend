import React from 'react';
import { Card, Button } from 'react-bootstrap';
import _ from 'lodash';

const ArtistsList = ({ artists }) => {
  return (
    <React.Fragment>
      {Object.keys(artists).length > 0 && (
        <div className="artists">
          {artists.items.map((artist, index) => {
            return (
              <React.Fragment key={index}>
                <Card style={{ width: "18rem", backgroundColor: "#303030" }}>
                    {!_.isEmpty(artist.images) ? (
                      <Card.Img
                        variant="top"
                        src={artist.images[0].url}
                        alt=""
                      />
                    ) : (
                      <Card.Img variant="top" src='https://st3.depositphotos.com/4111759/13425/v/600/depositphotos_134255634-stock-illustration-avatar-icon-male-profile-gray.jpg' alt="" />
                    )}
                  <Card.Body>
                    <Card.Title style={{ color: 'white'}}>{artist.name}</Card.Title>
                    <a
                      target="_blank"
                      href={artist.external_urls.spotify}
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

export default ArtistsList;