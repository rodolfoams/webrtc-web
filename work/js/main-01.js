'use strict';

const audioStreamConstraints = {
    audio: true,
};

const videoStreamConstraints = {
    video: {
        width: {
            min: 1280
        },
        height: {
            min: 720
        }
    }
};

// Video element where stream will be placed.
const localVideo = document.querySelector('video');
const localAudio = document.querySelector('test');

// Local stream that will be reproduced on the video.
let localVideoStream;
let localAudioStream;

// Handles success by adding the MediaStream to the video element.
function gotLocalVideoStream(mediaStream) {
    localVideoStream = mediaStream;
    localVideo.srcObject = mediaStream;
}

function gotLocalAudioStream(mediaStream) {
    localAudioStream = mediaStream;
    localAudio.srcObject = mediaStream;
}

// Handles error by logging a message to the console with the error message.
function handleLocalMediaStreamError(error) {
    console.log('navigator.getUserMedia error: ', error);
}

// Initializes media stream.
navigator.mediaDevices.getUserMedia(audioStreamConstraints)
    .then(gotLocalAudioStream).catch(handleLocalMediaStreamError);

navigator.mediaDevices.getUserMedia(videoStreamConstraints)
    .then(gotLocalVideoStream).catch(handleLocalMediaStreamError);