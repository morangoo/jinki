"use client";
export function IntroPage({ onClose }: { onClose: () => void }) {
  const handleClick = () => {
    localStorage.setItem("introSeen", "true");
    window.dispatchEvent(new Event("storage"));
    onClose();
  };
  return (
    <div>
      <h1>Welcome</h1>
      <button onClick={handleClick}>Enter the site</button>
    </div>
  );
}