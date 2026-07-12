"use client";

import Link from "next/link";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { Sparkles } from "lucide-react";

const navLinks = [
  { label: "Product", href: "#" },
  { label: "Solutions", href: "#" },
  { label: "Resources", href: "#" },
  { label: "Pricing", href: "#" },
  { label: "Company", href: "#" },
];

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-[rgba(11,17,32,0.65)] backdrop-blur-xl">
      <Container>
        <nav className="flex h-20 items-center justify-between">

          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2"
          >
            <Sparkles
              className="text-[var(--brand)]"
              size={22}
            />

            <span className="text-2xl font-bold tracking-tight">
  Xai
</span>
          </Link>

          {/* Navigation */}
          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm text-[var(--text-secondary)] transition-all duration-300 hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-4">

            <Link
              href="#"
              className="hidden md:block text-sm text-[var(--text-secondary)] hover:text-white transition"
            >
              Sign In
            </Link>

            <Button>
              Start Free Trial
            </Button>

          </div>

        </nav>
      </Container>
    </header>
  );
}