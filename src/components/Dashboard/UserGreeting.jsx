import React from "react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const UserGreeting = () => {
  return (
    <div className="p-4 flex items-center">
      {/* Avatar Component */}
      <div className="mr-4">
        <Avatar className="w-15 h-15">
          <AvatarImage
            src="https://github.com/shadcn.png"
            alt="User Avatar"
          />
          <AvatarFallback>JD</AvatarFallback>
        </Avatar>
      </div>

      <div>
        <h1 className="text-lg font-bold">Hello, John Doe</h1>
        <p className="text-sm text-gray-600">How are you today?</p>
      </div>
    </div>
  );
};

export default UserGreeting;