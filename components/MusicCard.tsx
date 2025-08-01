import { View, Text, Image, StyleSheet } from "react-native";

interface MusicCardProps {
  name: string;
  artist: string;
  imageUrl: string;
}

export default function MusicCard({ name, artist, imageUrl }: MusicCardProps) {
  return (
    <View style={styles.cardContainer}>
      <Image
        source={{
          uri: imageUrl,
        }}
        style={styles.image}
        resizeMode="cover"
      />
      <View style={styles.textContainer}>
        <Text style={styles.nameText} numberOfLines={1}>
          {name}
        </Text>
        <Text style={styles.artistText}>{artist}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    padding: 10,
    flexDirection: "row",
    borderRadius: 10,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 1,
    shadowRadius: 3.84,
    borderColor: "#ccc",
    elevation: 3,
  },
  textContainer: {
    flex: 1,
    paddingLeft: 10,
  },
  nameText: {
    fontSize: 17,
    fontWeight: "bold",
  },
  artistText: {
    fontSize: 14,
    color: "#666",
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 10,
  },
});
