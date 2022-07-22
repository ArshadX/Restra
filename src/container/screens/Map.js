import React from 'react';
import {View} from 'react-native';

import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import {defaultStyle} from '../../styles/styles';
const Map = () => {
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
          latitude: 22.4606577,
          longitude: 70.2462409,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}></MapView>
    </View>
  );
};

export default Map;
