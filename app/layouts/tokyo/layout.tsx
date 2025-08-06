import "@/app/layouts/tokyo/styles/tokyo.css";

export default function TokyoLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="tokyo-layout">
      {children}
    </div>
  );
}