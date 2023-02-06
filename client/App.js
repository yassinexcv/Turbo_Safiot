import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View  , Image} from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const markers = [
  {
    latitude: 32.3123,
    longitude: -9.2311,
    title: 'Trotinet 1',
    description: 'Emplacement du trotinét',
    Image: require('./assets/icone.png')
  },
  {
    latitude: 32.3224,
    longitude: -9.2411,
    title: 'Trotinet 2',
    description: 'Emplacement d\'un autre trotinét',
    Image: require('./assets/icone.png')
  },
  {
    latitude: 32.3070,
    longitude: -9.2411,
    title: 'Trotinet 3',
    description: 'Emplacement d\'un autre trotinét',
    Image: require('./assets/icone.png')
  },
];

export default function App() {
  return (
    <MapView
      style={{ flex: 1, width: '100%', height: '100%' }}
      initialRegion={{
        latitude: 32.3123,
        longitude: -9.2311,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
    >
      {markers.map((marker, index) => (
        <Marker
          key={index}
          coordinate={{ latitude: marker.latitude, longitude: marker.longitude }}
          title={marker.title}
          description={marker.description }
          image={marker.Image}
          

        />
      ))}
    </MapView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
