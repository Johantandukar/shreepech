import Home from "@/components/home";

export const revalidate = 3600; // Revalidate at most every hour as a fallback

export default function Page() {
  return (
    <>
      <Home />
    </>
  );
}
