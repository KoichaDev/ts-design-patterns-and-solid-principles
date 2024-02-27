(() => {
	interface MediaPlayerImplementation {
		playAudio(): void;
		playVideo(): void;
	}

	class WindowsMediaPlayer implements MediaPlayerImplementation {
		playAudio(): void {
			console.log('🔉 Playing audio on Windows Media Player');
		}

		playVideo(): void {
			console.log('🎥 Playing video on Windows Media Player');
		}
	}

	class MacOSMediaPlayer implements MediaPlayerImplementation {
		playAudio(): void {
			console.log('🔉 Playing audio on MacOS Media Player');
		}

		playVideo(): void {
			console.log('🎥 Playing video on MacOS Media Player');
		}
	}

	abstract class MediaPlayerAbstraction {
		constructor(protected implementation: MediaPlayerImplementation) {}

		abstract playFile(): void;
	}

	class AudioPlayer extends MediaPlayerAbstraction {
		public playFile(): void {
			this.implementation.playAudio();
		}
	}

	class VideoPlayer extends MediaPlayerAbstraction {
		public playFile(): void {
			this.implementation.playVideo();
		}
	}

	// Client Code
	const windowsAudioPlayer = new AudioPlayer(new WindowsMediaPlayer());
	windowsAudioPlayer.playFile();

	const macOSVideoPlayer = new VideoPlayer(new MacOSMediaPlayer());
	macOSVideoPlayer.playFile();
})();
