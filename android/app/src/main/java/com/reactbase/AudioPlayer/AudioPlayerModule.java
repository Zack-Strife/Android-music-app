package com.reactbase.AudioPlayer;

import com.facebook.react.bridge.JavaScriptModule;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.Callback;

import android.media.MediaPlayer;
import android.media.AudioManager;
import android.net.Uri;
import java.io.IOException;

public class AudioPlayerModule extends ReactContextBaseJavaModule {
    private MediaPlayer mediaPlayer = new MediaPlayer();
    private ReactApplicationContext context;

  public AudioPlayerModule(ReactApplicationContext reactContext) {
    super(reactContext);
    mediaPlayer.setAudioStreamType(AudioManager.STREAM_MUSIC);
  }

    @Override
  public String getName() {
    return "AudioPlayer";
  }

  @ReactMethod
  public void newMusic(String urlFromJs, Boolean play, Callback cb) {
    this.mediaPlayer.reset();
    Uri url = Uri.parse(urlFromJs);
    try {
      this.mediaPlayer.setDataSource(getReactApplicationContext(), url);
    } catch (IOException e) {
      cb.invoke(e.getMessage());
    }
    try {
      this.mediaPlayer.prepare();
    } catch (IOException e) {
      cb.invoke(e.getMessage());
    }
    if (play) {
      this.mediaPlayer.start();
    }
    cb.invoke("OK");
  }

 @ReactMethod
    public void play(Callback cb) {
      if (this.mediaPlayer.isPlaying()) {
        this.mediaPlayer.pause();
        cb.invoke("pause");
      } else {
        this.mediaPlayer.start();        
        cb.invoke("start");
      }
  }

  @ReactMethod
  public void pause(Callback cb) {
    this.mediaPlayer.pause();
  }
}