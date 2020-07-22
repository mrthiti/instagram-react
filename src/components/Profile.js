import React from 'react';

function Presentation() {
  return (
    <React.Fragment>
      <div className="row mt-3 ml-2">
        <div className="col-3">
          <img className="rounded-circle" src="https://cdn2.thecatapi.com/images/a79.jpg" width="56" height="56" alt="profile" />
        </div>
        <div className="col ml-4">
          <div className="row mt-1">
            <h6><small><strong>thiti.y</strong></small></h6>
          </div>
          <div className="row">
            <h6 className="text-secondary"><small>THITI YAMSUNG</small></h6>
          </div>
        </div>
      </div>

      <div className="row mt-3 ml-2">
        <div className="col-10">
          <h6><small><strong>Suggestions For You</strong></small></h6>
        </div>
        <div className="col-2">
          <div className="row">
            <h6><small><strong>See All</strong></small></h6>
          </div>
        </div>
      </div>

      {
        <div className="row mt-3 ml-2">
          <div className="col-10">
            <h6><small><strong>Suggestions For You</strong></small></h6>
          </div>
          <div className="col-2">
            <div className="row">
              <h6><small><strong>See All</strong></small></h6>
            </div>
          </div>
        </div>
      }
    </React.Fragment>
  );
}

export default Presentation;