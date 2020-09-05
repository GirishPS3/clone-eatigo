import React, { useState } from 'react';
import Camera from 'react-html5-camera-photo';
import 'react-html5-camera-photo/build/css/index.css';
 
 
function App (props) {
  const [dataUri, setDataUri] = useState('');
 
  async function handleTakePhotoAnimationDone (dataUri) {
    console.log(dataUri);
    let file = await fetch(dataUri)
    .then(r => r.blob())
    .then(blobFile => new File([blobFile], 'image.jpeg', {type: 'image/jpeg'}))
    setDataUri(file);
  }
 
  const isFullscreen = false;
  return (
    <div>
             <Camera
      onTakePhotoAnimationDone = { (dataUri) => { handleTakePhotoAnimationDone(dataUri); } }
      idealResolution = {{width: 200, height: 200}}
      imageType = {'jpeg'}
      imageCompression = {0.97}
      isMaxResolution = {true}
      isImageMirror = {false}
      isSilentMode = {false}
      isDisplayStartCameraError = {true}
      isFullscreen = {false}
      sizeFactor = {1}

    />
      
    </div>
  );
}
 
export default App;