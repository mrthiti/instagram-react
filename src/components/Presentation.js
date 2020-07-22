import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import getPresentation from '../stores/presentation/actions/getPresentation'

function Presentation() {
  const dispatch = useDispatch()
  const listPresentation = useSelector(state => state.presentation)

  useEffect(() => {
    const fetchData = async () => dispatch(await getPresentation())

    fetchData()
  }, [dispatch]);

  return (
    <div className="card" >
      <div className="card-body">
        <div className="row">
          {
            listPresentation.length === 0
              ? "Loading..."
              : listPresentation.map((it, index) => (
                <div className="col" key={index}>
                  <div className="row justify-content-xl-center">
                    <img className="rounded-circle" src={it.imageUrl} width="56" height="56" alt="Profile" />
                  </div>

                  <div className="row justify-content-xl-center">
                    <h6><small>{it.name}</small></h6>
                  </div>
                </div>
              ))
          }
        </div>
      </div>
    </div>
  );
}

export default Presentation;