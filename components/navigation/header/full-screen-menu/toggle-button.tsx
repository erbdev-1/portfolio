import { cn } from "@/lib/utils";

export default function ToggleButton({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <button
      onClick={() => setOpen((prev: boolean) => !prev)}
      className="fixed right-4 top-32 m-5 z-50 w-20 h-20 rounded-full bg-[#323E56] cursor-pointer"
    >
      <div className="relative flex items-center justify-center">
        <div className="flex flex-col gap-y-2 w-[30px] transfrom transition-all duration-300 origin-center overflow-hidden">
          <div
            className={cn(
              "bg-white h-[2px] w-7 transform transition duration-300 origin-left",
              {
                "translate-x-10": open,
              }
            )}
          />
          <div
            className={cn(
              "bg-white h-[2px] w-7 rounded transform transition duration-300 delay-75",
              {
                "translate-x-10": open,
              }
            )}
          />
          <div
            className={cn(
              "bg-white h-[2px] w-7 rounded transform transition duration-300 delay-75",
              {
                "translate-x-10": open,
              }
            )}
          />
        </div>
      </div>
    </button>
  );
}
