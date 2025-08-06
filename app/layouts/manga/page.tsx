import MangaLayout from "./layout";
export default function MangaTheme() {
    return (
        <MangaLayout>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center"}}>
                <h1 style={{fontSize: "20vh", fontWeight: "bold"}}>漫画 Theme</h1>
            </div>
        </MangaLayout>
    );
}