import "@/app/layouts/video-game/styles/video-game.css";

export default function VideoGameLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="video-game-layout">
      {children}
    </div>
  );
}