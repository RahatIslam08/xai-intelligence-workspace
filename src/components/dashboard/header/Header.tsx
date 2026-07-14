"use client";

import SearchBar from "./SearchBar";
import Notification from "./Notification";
import Avatar from "./Avatar";

export default function Header() {
  return (
    <header className="mb-8 flex items-center justify-between">

      <SearchBar />

      <div className="flex items-center gap-3">
        <Notification />
        <Avatar />
      </div>

    </header>
  );
}