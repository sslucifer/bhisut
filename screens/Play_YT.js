import React, { Component, useRef, useState } from "react";
import {
  AppState,
  Dimensions,
  StyleSheet,
  View,
  TouchableOpacity,
} from "react-native";
import YoutubePlayer from "react-native-youtube-iframe";
import Icon from "react-native-vector-icons/FontAwesome5";

import Card3 from "../cardView/Home_Card_Row3";
const { width, height } = Dimensions.get("window");

const youtubePlayer = ({ navigation }) => {
  const videoid = navigation.getParam("videoid");
  const data_for_row = navigation.getParam("data");
  const playerRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  return (
    <View style={styles.container}>
      <View style={styles.Player}>
        <YoutubePlayer
          ref={playerRef}
          height={height / 3}
          width={width}
          videoId={videoid}
          play={playing}
          onChangeState={(event) => console.log(event)}
          onReady={() => console.log("ready")}
          onError={(e) => console.log(e)}
          onPlaybackQualityChange={(q) => console.log(q)}
          volume={50}
          playbackRate={1}
          playerParams={{
            cc_lang_pref: "us",
            showClosedCaptions: true,
          }}
        />
      </View>
      <View style={styles.google_voice}>
        <TouchableOpacity style={styles.mic}>
          <Icon name="microphone" size={24} color="red" />
        </TouchableOpacity>
      </View>
      <Card3 data={data_for_row} navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    alignContent: "center",
    justifyContent: "center",
    flex: 1,
  },
  google_voice: {
    flex: 1,
    width: "100%",
    height: "22%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent",
   // marginVertical: "0.6%",
  },
  mic: {
    width: 50,
    height: 50,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    elevation: 2,
    backgroundColor: "#ffffff",
  },
  Player: {
    flex: 1,
    width: "100%",
    height: height / 3,
    marginTop: "15%",
  },
});

export default youtubePlayer;
