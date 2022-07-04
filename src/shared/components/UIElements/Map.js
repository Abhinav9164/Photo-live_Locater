import React, {useRef,useEffect} from 'react';
import mapboxgl from 'mapbox-gl';

import './Map.css';

mapboxgl.accessToken =
'pk.eyJ1IjoiYWJoaW5hdjExMjEiLCJhIjoiY2w0eWo0dXh1MDVlYTNpcXV3dTI4NWVoNiJ9.myZD9xG9bDbh7WFfLRE6Ew';

const Map = props =>{
const mapRef = useRef();

const {center,zoom} = props;

useEffect(() => {
  const map = new mapboxgl.Map({
    container:mapRef.current,
    style: 'mapbox://styles/mapbox/streets-v11',
  center:center,
  zoom:zoom
});

new mapboxgl.Marker({position:center,map:map});
},[center,zoom]);



return <div
ref = {mapRef}
className={`map ${props.className}`}
style={props.style}>
</div>
};
export default Map;
