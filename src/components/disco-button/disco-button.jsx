import LikeButton from "../like-button/like-button";

function DiscoButton() {
    const colors = ["purple", "blue", "green", "yellow", "orange", "red"]
    return(
        <div className="mt-4">
        <LikeButton colors={colors}/>
        <LikeButton colors={colors}/>
        </div>
    );
}

export default DiscoButton;