import React from 'react'
import { useMap } from 'react-map-gl'
import { useState } from 'react'

const GetFeature = () => {
    const [feature, setFeature] = useState(null);
    const {current: map} = useMap();
    map.on('click', (e) => {
      const bbox = [
                  [e.point.x - 6, e.point.y - 6],
                  [e.point.x + 6, e.point.y + 6]
              ];
              let x = map.queryRenderedFeatures(bbox);
              console.log(x);
              setFeature(x);
              
            });


            return feature;
          }

export default GetFeature