import { Bell, BellDot, CircleUser } from "lucide-react";

export function TopBar() {
  return (
    <div className="h-10 w-full flex items-center justify-between">
      <div className="text-xl font-semibold">Title</div>

      <div className="flex items-center gap-4">
        <div className="p-2 rounded-full border border-gray-300 flex items-center justify-center">
          <Bell />
        </div>

        <div className="p-2 rounded-full bg-gray-100 flex items-center justify-center">
          <CircleUser />
        </div>
      </div>
    </div>
  );
}
