import "@/app/layouts/manga/styles/manga.css";

export default function MangaLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="manga-layout">
      {children}
    </div>
  );
}