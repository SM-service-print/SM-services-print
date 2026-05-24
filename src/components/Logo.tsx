import logo from "@/assets/logo.jpeg";

export function Logo({ className = "h-10 w-10" }: { className?: string }) {
  return (
    <img
      src={logo}
      alt="SM Services Print"
      className={`${className} object-cover rounded-full`}
      width={80}
      height={80}
    />
  );
}
