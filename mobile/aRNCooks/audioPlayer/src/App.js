import React, { Component } from 'react';
import { Audio } from 'expo-av';
import { Feather } from 'react-native-vector-icons/Feather';
import { Text, TouchableOpacity, View } from 'react-native';
import playlist from './playlist';
import styles from './styles.stylesheet';

export default class App extends Component {
  state = {
    isPlaying: false,
    playbackInstance: null,
    volume: 1.0,
    currentTrackIndex: 0,
    isBuffering: false,
  }

	async componentDidMount() {
    await Audio.setAudioModeAsync({
      allowsRecordingIOS: false,
      playThroughEarpieceAndroid: true,
      interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_DO_NOT_MIX,
      playsInSilentModeIOS: true,
      shouldDuckAndroid: true,
      interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DO_NOT_MIX,
    });
    this.loadAudio();
  }

  handlePlayPause = async () => {
    const { isPlaying, playbackInstance } = this.state;
    isPlaying ? await playbackInstance.pauseAsync() : await playbackInstance.playAsync();
    this.setState({
      isPlaying: !isPlaying
    });
  }

  handlePreviousTrack = async () => {
    let { playbackInstance, currentTrackIndex } = this.state;
    if (playbackInstance) {
      await playbackInstance.unloadAsync();
      currentTrackIndex === 0 ? currentTrackIndex = playlist.length - 1 : currentTrackIndex -= 1;
      this.setState({
        currentTrackIndex
      });
      this.loadAudio();
    }
  }

  handleNextTrack = async () => {
    let { playbackInstance, currentTrackIndex } = this.state;
    if (playbackInstance) {
      await playbackInstance.unloadAsync();
      currentTrackIndex < playlist.length - 1 ? currentTrackIndex += 1 : currentTrackIndex = 0;
      this.setState({
        currentTrackIndex
      });
      this.loadAudio();
    }
  }

  onPlaybackStatusUpdate = (status) => {
    this.setState({
      isBuffering: status.isBuffering
    });
  }

  async loadAudio() {
    const playbackInstance = new Audio.Sound();
    const source = {
      uri: playlist[this.state.currentTrackIndex].uri
    }
		const status = {
			shouldPlay: this.state.isPlaying,
			volume: this.state.volume,
    };
    playbackInstance
      .setOnPlaybackStatusUpdate(
        this.onPlaybackStatusUpdate
      );
    await playbackInstance.loadAsync(source, status, false);
    this.setState({
      playbackInstance
    });
  }

  renderSongInfo() {
    const { playbackInstance, currentTrackIndex } = this.state;
    return playbackInstance ?
    <View style={styles.trackInfo}>
      <Text style={[styles.trackInfoText, styles.largeText]}>
        {playlist[currentTrackIndex].title}
      </Text>
      <Text style={[styles.trackInfoText, styles.smallText]}>
        {playlist[currentTrackIndex].artist}
      </Text>
      <Text style={[styles.trackInfoText, styles.smallText]}>
        {playlist[currentTrackIndex].album}
      </Text>
    </View>
    : null;
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={[styles.largeText, styles.buffer]}>
          {this.state.isBuffering && this.state.isPlaying ? 'Buffering...' : null}
        </Text>
        {this.renderSongInfo()}
        <View style={styles.controls}>
          <TouchableOpacity
            style={styles.control}
            onPress={this.handlePreviousTrack}
          >
            <Feather name="skip-back" size={32} color="#fff"/>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.control}
            onPress={this.handlePlayPause}
          >
            {this.state.isPlaying ?
              <Feather name="pause" size={32} color="#fff"/> :
              <Feather name="play" size={32} color="#fff"/>
            }
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.control}
            onPress={this.handleNextTrack}
          >
            <Feather name="skip-forward" size={32} color="#fff"/>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
