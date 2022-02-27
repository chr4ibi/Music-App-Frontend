import React from 'react';
import { Card, Button } from 'react-bootstrap';
import _ from 'lodash';

const PlayList = ({ playlist }) => {
  return (
    <div>
      {Object.keys(playlist).length > 0 && (
        <div className="playlist">
          {playlist.items.map((item, index) => {
            return (
              <React.Fragment key={index}>
                <Card style={{ width: "18rem", backgroundColor: "#303030" }}>
                    {!_.isEmpty(item.images) ? (
                      <Card.Img variant="top" src={item.images[0].url} alt="" />
                    ) : (
                      <Card.Img variant="top" src='https://st3.depositphotos.com/4111759/13425/v/600/depositphotos_134255634-stock-illustration-avatar-icon-male-profile-gray.jpg' alt="" />
                    )}
                  <Card.Body>
                    <Card.Title style={{ color: 'white'}}>{item.name}</Card.Title>
                    <Card.Text style={{ color: 'white'}}>
                      <small>By {item.owner.display_name}</small>
                    </Card.Text>
                    <a
                      target="_blank"
                      href={item.external_urls.spotify}
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
    </div>
  );
};

export default PlayList;