

export default function ClickablePicture({pic, onClick}) {

  return (
    <div>
       <img src={pic.clicked ? pic.image2 : pic.image} alt={pic.name}
       onClick={onClick} 
       />
    </div>
  );
}
