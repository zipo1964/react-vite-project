import { ArrowUp,Linkedin, Facebook } from "lucide-react";

export const Footer = () => {
    const socialLinks = [
        { href: "https://www.linkedin.com/in/yourprofile", label: "LinkedIn", Icon: Linkedin },
        { href: "https://www.facebook.com/yourprofile", label: "Facebook", Icon: Facebook },
      ];
  return (
    <footer className="py-12 px-4 bg-card relative border-t border-border mt-12 pt-8 flex flex-wrap justify-between items-center">
      {" "}
      <p className="text-sm text-muted-foreground">
        {" "}
        &copy; {new Date().getFullYear()} RamDev. All rights reserved.
      </p>
      <ul className="flex items-center gap-3">
        {socialLinks.map(({ href, label, Icon }) => (
          <li key={label}>
            <a
              href={href}
              aria-label={label}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors focus:outline-none focus:ring focus:ring-primary/40"
            >
              <Icon className="w-4 h-4" />
            </a>
          </li>
        ))}
       
      </ul>
      <a
        href="#hero"
        className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
      >
        <ArrowUp size={20} />
      </a>
    </footer>
  );
};