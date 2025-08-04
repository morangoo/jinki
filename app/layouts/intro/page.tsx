"use client";
export function IntroPage({ onClose }: { onClose: () => void }) {
  return (
    <div>
      <h1>Welcome</h1>
      <button onClick={onClose}>Enter the site</button>
    </div>
  );
}