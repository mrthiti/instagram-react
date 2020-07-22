import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import getSuggetion from '../stores/suggetion/actions/getSuggetion'

function Presentation() {
  const dispatch = useDispatch()
  const listSuggetion = useSelector(state => state.suggetion)

  useEffect(() => {
    const fetchData = async () => dispatch(await getSuggetion())

    fetchData()
  }, [dispatch]);

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
        <div className="col">
          <h6 className="text-secondary"><small><strong>Suggestions For You</strong></small></h6>
        </div>
        <div className="col-3">
          <h6><small><strong>See All</strong></small></h6>
        </div>
      </div>

      {
        listSuggetion.length === 0
          ? <div className="d-flex justify-content-center">
            <div className="spinner-border text-primary" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          </div>
          : listSuggetion.map((it, index) => (
            <div className="row mt-3 ml-2" key={index}>
              <div className="col">
                <div className="row">
                  <div className="col-2 pt-1">
                    <img className="rounded-circle" src={it.imageUrl} width="32" height="32" alt="profile" />
                  </div>
                  <div className="col">
                    <div className="row">
                      <h6 className="mb-0"><small><strong>{it.name}</strong></small></h6>
                    </div>
                    <div className="row">
                      <h6 className="text-secondary"><small>{it.type}</small></h6>
                    </div>
                  </div>
                  <div className="col-3">
                    <a href="##"><h6><small><strong>Follow</strong></small></h6></a>
                  </div>
                </div>
              </div>
            </div>
          ))
      }
    </React.Fragment>
  );
}

export default Presentation;