import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements/dist/buttons/Button';
import { useNavigation } from '@react-navigation/native';



const TrotinetteScreen = ({ route }) => {
  const [trotinette, setTrotinette] = useState(null);
  const [loading, setLoading] = useState(true);
    const navigation = useNavigation();


  useEffect(() => {
    fetch(`http://192.168.10.37:5000/scouter/getScouterById/${route.params.id}`)
      .then((response) => response.json())
      .then((json) => {
        setTrotinette(json);
        setLoading(false);
      })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <Text>Loading trotinette details...</Text>;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{trotinette.nom}</Text>
      <Text>description : {trotinette.description}</Text>
      <Text>ID : {trotinette._id}</Text>
      <Text> latitude : {trotinette.latitude}</Text>
        <Text>longitude : {trotinette.longitude}</Text>
        <Text>Statut : {trotinette.status}</Text>
        <Button
        style={styles.button}
        title="Retour"
        onPress={() => navigation.navigate('Dashboard')}
        />
        


    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
    button: {
    marginTop: 20,
    width: 200,
    height: 50,
    backgroundColor: '#000',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    },
});


export default TrotinetteScreen;
