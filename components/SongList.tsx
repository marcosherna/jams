import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
// import { Audio } from "expo-av"; // si usas Expo

import { Track } from "../types/Track";

export default function SongList() {
  const [songs, setSongs] = useState([]);
  //   const [sound, setSound] = useState(null);

  useEffect(() => {
    fetch("https://api.deezer.com/search?q=eminem")
      .then((res) => res.json())
      .then((data) => setSongs(data.data))
      .catch((err) => console.error(err));
  }, []);

  async function playPreview(previewUrl: string) {
    // if (sound) {
    // //   await sound.unloadAsync();
    // }
    // const { sound: newSound } = await Audio.Sound.createAsync({
    //   uri: previewUrl,
    // });
    // setSound(newSound);
    // await newSound.playAsync();
  }

  const renderItem = ({ item }: { item: Track }) => (
    <TouchableOpacity
      onPress={() => playPreview(item.preview)}
      style={styles.card}
    >
      <Image source={{ uri: item.album.cover }} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.title} numberOfLines={1}>
          {item.title}
        </Text>
        <Text style={styles.artist} numberOfLines={1}>
          {item.artist.name}
        </Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View>
      <FlatList
        data={songs}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
  },
  card: {
    flexDirection: "row",
    padding: 10,
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: "#ddd",
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 5,
    marginRight: 10,
  },
  info: {
    flex: 1,
  },
  title: {
    fontWeight: "bold",
    fontSize: 16,
  },
  artist: {
    color: "#666",
  },
});
