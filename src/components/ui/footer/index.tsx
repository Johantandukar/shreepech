import { Footer as FooterType } from "@/types/payload-types";
import getImage, { getAltText } from "@/lib/get-image";
import Image from "next/image";
import {LinkButton} from "../Button";

export default function Footer({ data }: { data: FooterType }) {
  const columns = data.columns || [];
  const socials = data.socials || [];

  const getSocialIcon = (platform: string) => {
    switch (platform) {
      case "facebook":
        return (
          <svg fill="currentColor" viewBox="0 0 24 24" className="w-4 h-4">
            <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
          </svg>
        );
      case "linkedin":
        return (
          <svg fill="currentColor" viewBox="0 0 24 24" className="w-4 h-4">
            <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h5v-8.306c0-4.613 6-4.954 6 0v8.306h5v-10.312c0-5.385-5.748-5.115-7.85-2.903l-1.02-1.777h-2.162z" />
          </svg>
        );
      case "twitter":
        return (
          <svg fill="currentColor" viewBox="0 0 24 24" className="w-4 h-4">
            <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
          </svg>
        );
      case "instagram":
        return (
          <svg
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            viewBox="0 0 24 24"
            className="w-4 h-4"
          >
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <footer className="pb-8 z-10 relative bg-inherit">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t pt-16 border-neutral-500">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {columns.map((column, idx) => (
            <div key={idx}>
              <h3 className="text-lg font-bold text-gray-900 mb-6 uppercase tracking-wide">
                {column.title}
              </h3>
              <ul className="space-y-4 text-gray-600">
                {column.links?.map((link, lIdx) => (
                  <li key={lIdx}>
                    <LinkButton
                      href={link.url}
                      className="hover:text-gray-900 transition-colors"
                      target={
                        link.url.startsWith("http") ? "_blank" : undefined
                      }
                    >
                      {link.label}
                    </LinkButton>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between">
          <div>
            <Image
              src={getImage(data.logo)}
              alt={getAltText(data.logo)}
              width={60}
              height={60}
            />
          </div>

          <div className="text-sm mb-4 md:mb-0">
            {data.copyright ||
              `© ${new Date().getFullYear()} Shreepech Internationals. All Rights Reserved.`}
          </div>

          <div className="flex space-x-4">
            {socials.map((social, sIdx) => (
              <a
                key={sIdx}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 text-gray-600 hover:bg-gray-100 transition-colors"
              >
                {getSocialIcon(social.platform)}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
