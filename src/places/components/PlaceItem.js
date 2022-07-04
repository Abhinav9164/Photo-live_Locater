import React, { useState,useContext } from 'react';

import Card from '../../shared/components/UIElements/Card';
import Button from '../../shared/components/FormElements/Button';
import Modal from '../../shared/components/UIElements/Modal';
import Map from '../../shared/components/UIElements/Map';
import './PlaceItem.css';
import {AuthContext} from '../../shared/context/auth-context';


const PlaceItem = props => {

const auth = useContext(AuthContext);

  const [showMap, setShowMap] = useState(false);


const [showConfirmModal,setConfirmModal] = useState(false);

  const openMapHandler = () => setShowMap(true);

  const closeMapHandler = () => setShowMap(false);


const cancelDeleteHandler = () => {
  setConfirmModal(false);
};

const setDeleteHandler = () => {
  setConfirmModal(true);
};

const confirmDeleteHandler = () =>{
  console.log('DELETE');
};

  return (
    <React.Fragment>
      <Modal
        show={showMap}
        onCancel={closeMapHandler}
        header={props.address}
        contentClass="place-item__modal-content"
        footerClass="place-item__modal-actions"
        footer={<Button onClick={closeMapHandler}>CLOSE</Button>}
      >
        <div className="map-container">
          <Map center={props.coordinates} zoom={16} />
        </div>
      </Modal>
<Modal
show = {showConfirmModal}
onCancel = {cancelDeleteHandler}

header="Are you Sure?"
footerClass="place-item__modal-actions"
footer={
<React.Fragment>

<Button inverse onClick={cancelDeleteHandler}>Cancel</Button>
<Button danger onClick={confirmDeleteHandler}>DELETE</Button>

</React.Fragment>
}>

<p>Do you want to proceed. Once done cant revert the process.</p>

</Modal>


      <li className="place-item">
        <Card className="place-item__content">
          <div className="place-item__image">
            <img src={props.image} alt={props.title} />
          </div>
          <div className="place-item__info">
            <h2>{props.title}</h2>
            <h3>{props.address}</h3>
            <p>{props.description}</p>
          </div>
          <div className="place-item__actions">
            <Button inverse onClick={openMapHandler}>
            VIEW ON MAP
            </Button>
            {auth.isLoggedIn && <Button to={`/places/${props.id}`}>
            EDIT
            </Button>}
            { auth.isLoggedIn && <Button danger onClick={setDeleteHandler}>
            DELETE
            </Button>}
          </div>
        </Card>
      </li>
    </React.Fragment>
  );
};

export default PlaceItem;
