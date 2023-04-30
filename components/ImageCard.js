

const ImageCard= (props) => {
  return (
    <div class="max-w-xl rounded overflow-hidden shadow-lg">
      <img class="w-full h-28 object-cover object-center" src={props.src} alt="Sunset in the mountains"/>
      <div class="px-6 py-4 flex justify-center align-center">
        <p class="text-gray-700 text-sm">{props.desc}</p>
      </div>
    </div>
  );

}

export default ImageCard;