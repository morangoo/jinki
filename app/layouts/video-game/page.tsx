import VideoGameLayout from "./layout";
export default function VideoGameTheme() {
    return (
        <VideoGameLayout>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center"}}>
                <h1 style={{fontSize: "20vh", fontWeight: "bold"}}>Video Game Theme</h1>
            </div>
        </VideoGameLayout>
    );
}