import React from 'react';
import {View} from 'react-native';

import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import {defaultStyle} from '../../styles/styles';

const MapDirection = ({route}) => {
  const origin = {latitude: 37.3318456, longitude: -122.0296002};
  const destination = {latitude: 37.771707, longitude: -122.4053769};
  const {latitude, longitude, title} = route.params;

  return (
    <View style={defaultStyle.mapcontainer}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={defaultStyle.map}
        toolbarEnabled={true}
        showsBuildings={true}
        showsMyLocationButton={true}
        showsScale={true}
        showsTraffic={true}
        zoomControlEnabled={true}
        pitchEnabled={true}
        showsCompass={true}
        showsUserLocation={true}
        loadingEnabled
        region={{
          latitude: parseFloat(latitude),
          longitude: parseFloat(longitude),
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}>
        <Marker
          title={title}
          coordinate={{
            latitude: parseFloat(latitude),
            longitude: parseFloat(longitude),
          }}
          identifier={title}
        />
      </MapView>
    </View>
  );
};

export default MapDirection;
