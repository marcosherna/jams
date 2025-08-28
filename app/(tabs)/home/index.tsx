import { useEffect, useState } from "react";
import { View, Text, FlatList, Image, StyleSheet } from "react-native";
import { Artist } from "../../../types/Artist";

export default function HomeScreen() {
  const [artists, setArtists] = useState([]);

  useEffect(() => {
    fetch("https://api.deezer.com/chart/0/artists")
      .then((response) => response.json())
      .then(({ data }) => setArtists(data))
      .catch((error) => console.error(error));
  }, []);

  const renderItem = ({ item }: { item: Artist }) => (
    <View style={styles.cardArtist}>
      <Image source={{ uri: item.picture_small }} style={styles.imageArtist} />
      <Text style={styles.nameArtist} numberOfLines={1} ellipsizeMode="tail">
        {item.name}
      </Text>
    </View>
  );

  return (
    <View>
      <Text style={{ fontSize: 24, fontWeight: "bold", margin: 10 }}>
        Top Artists
      </Text>
      <FlatList
        data={artists}
        keyExtractor={(item) => item.id.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={renderItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  cardArtist: {
    margin: 10,
    alignItems: "center",
  },
  imageArtist: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  nameArtist: {
    fontWeight: "bold",
    marginBottom: 5,
    width: 60,
    textAlign: "center",
  },
});
